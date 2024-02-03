import { Heading } from "@app/components/typography";
import { FC, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import WithdrawalTransactionForm from "@app/pages/withdrawal/WithdrawalTransactionForm";
import WithdrawalDataTable from "@app/pages/withdrawal/WithdrawalDataTable";
import useDepositTable from "@app/pages/withdrawal/hook/useDepositTable";
import { useGetMasterDataQuery } from "@app/store/services/masterApi";
import { useGetWithdrawalDataQuery } from "@app/store/services/withdrawalSearchApi";
import { Loader } from "@app/components";

const Withdrawal: FC = () => {
    const methods = useForm({
        mode: "onChange",
        // defaultValues: defaultValues
    });
    const { handleSubmit } = methods;
    const [queryPrams, setQueryPrams] = useState({});
    const { data: masterData, isLoading: isMasterLoading } = useGetMasterDataQuery();
    const { data: withdrawalData, refetch, isLoading: isWithdrawalLoading } = useGetWithdrawalDataQuery(queryPrams);
    const data = withdrawalData?.resData?.data;
    const { columns } = useDepositTable();

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
        <>
            {
                (isMasterLoading || isWithdrawalLoading) && <Loader />
            }
            <Heading as="h3">Withdrawal Transaction Search</Heading>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(handleSearch)}>
                    <WithdrawalTransactionForm masterData={masterData} />
                </form>
            </FormProvider>
            <WithdrawalDataTable columns={columns} data={data} masterData={masterData} />
        </>
    )
}

export default Withdrawal