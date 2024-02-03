import { FC, Fragment, useState } from "react";
import { Heading } from "@app/components/typography";
import DepositTransaction from "@app/pages/deposits/DepositTransactionForm";
import { FormProvider, useForm } from "react-hook-form";
import DepositsDataTable from "@app/pages/deposits/DepositsDataTable";
import useDepositTable from "@app/pages/deposits/hook/useDepositTable";
import { useGetMasterDataQuery } from "@app/store/services/masterApi";
import { useGetDepositDataQuery } from "@app/store/services/depositSearchApi";
import { Loader } from "@app/components";

const Deposits: FC = () => {
    const methods = useForm();
    const { handleSubmit } = methods;
    const [queryPrams, setQueryPrams] = useState({});
    const { columns } = useDepositTable();
    const { data: masterData, isLoading: isMasterLoading } = useGetMasterDataQuery();
    const { data: depositData, refetch, isLoading: isDepositLoading } = useGetDepositDataQuery(queryPrams)
    const data = depositData?.resData?.data;

    const handleSearch = (fieldValue: searchFieldValue) => {
        const getDateRange = () => {
            if (fieldValue.dateRange?.startDate && fieldValue.dateRange?.endDate) {
                return `${fieldValue.dateRange?.startDate}~${fieldValue.dateRange?.endDate}`
            }
            else {
                return ""
            }
        }

        setQueryPrams({
            amount: fieldValue?.amount ?? "",
            transaction_id: fieldValue?.transactionId ?? "",
            transaction_status: fieldValue?.transactionStatus ?? "",
            transaction_type: fieldValue?.transactionType ?? "",
            user_id: fieldValue?.userId ?? "",
            date_range: getDateRange(),
        })

        refetch();
    }

    return (
        <Fragment>
            {
                (isMasterLoading || isDepositLoading) && <Loader />
            }
            <Heading as="h3">Deposit Transaction Search</Heading>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleSearch)}>
                    <DepositTransaction masterData={masterData} />
                </form>
            </FormProvider>
            <DepositsDataTable columns={columns} data={data} masterData={masterData} />
        </Fragment>
    )
}

export default Deposits