import { FC, Fragment } from "react";
import { Heading } from "@app/components/typography";
import ManageUpiForm from "@app/pages/manageUpi/ManageUpiForm";
import HighlightCard from "@app/pages/manageUpi/HighlightCard";
import { BsCheck2All } from "react-icons/bs";
import { VscCompassActive } from "react-icons/Vsc";
import { MdOutlinePersonAddDisabled } from "react-icons/md"
import ExistingUpiTable from "@app/pages/manageUpi/ExistingUpiTable";
import useExistingUpiTableData from "@app/pages/manageUpi/hook/useExistingUpiTableData";
import { FormProvider, useForm } from "react-hook-form";
import { useGetUpiListQuery } from "@app/store/services/manageUpiList";
import useCalculateCount from "@app/pages/manageUpi/hook/useCalculateCount";
import { yupResolver } from "@hookform/resolvers/yup";
import manageUpiSchema from "@app/schema/manageUpiSchema";
import { addUpi } from "@app/type/pages/addUpi";
import { useAddUpiIdMutation } from "@app/store/services/manageUpiList";
import { Loader, ReactToastify } from "@app/components";

const ManageUpi: FC = () => {
    const methods = useForm<addUpi>({
        mode: "onChange",
        resolver: yupResolver(manageUpiSchema)
    });
    const { handleSubmit } = methods;
    const { columns } = useExistingUpiTableData()
    const { data: allUpiList, refetch, isLoading: isUpiListLoading } = useGetUpiListQuery();
    const { totalUpiCount, activeUpiCount, nonActiveUpiCount } = useCalculateCount(allUpiList?.resData?.data);
    const [addUpiId, { isLoading: isUpiAddedLoading }] = useAddUpiIdMutation()

    const handleAddNewUpi = async (data: addUpi) => {
        try {
            const res = await addUpiId({
                upi: data.upi,
                min_deposit_limit: data.minDepositLimit,
                max_deposit_limit: data.maxDepositLimit,
            })

            if (res?.data?.resData?.status) {
                ReactToastify(res?.data?.resData?.message, "success");
                refetch()
                return;
            }

            ReactToastify("something went wrong", "error")
        }
        catch (error) {
            throw new Error(`An unknown error occurred ${error}`)
        }
    }

    return (
        <Fragment>
            {
                (isUpiAddedLoading || isUpiListLoading) && <Loader />
            }
            <Heading as="h3">Manage Upi id's</Heading>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleAddNewUpi)}>
                    <ManageUpiForm isLoading={isUpiAddedLoading} />
                </form>
            </FormProvider>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <HighlightCard icon={<BsCheck2All color="blue" size="24" />} type="All" count={totalUpiCount} title="Total Upi id's count" description="Total Upi id count including active and non active" />
                <HighlightCard icon={<VscCompassActive color="green" size="24" />} type="Active" count={activeUpiCount} title="Active Upi id's count" description="Only Active Upi id count" />
                <HighlightCard icon={<MdOutlinePersonAddDisabled color="red" size="24" />} type="Inactive" count={nonActiveUpiCount} title="Inactive Upi id's count" description="Only Inactive Upi id count" />
            </div>

            <div className="container mx-auto my-8">
                <ExistingUpiTable columns={columns} data={allUpiList?.resData?.data} refetch={refetch} />
            </div>
        </Fragment>
    )
}

export default ManageUpi