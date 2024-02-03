import { FC, Fragment } from "react";
import { Heading } from "@app/components/typography";
import ManageWithdrawalForm from "@app/pages/manageWithdrawal/BankAccountForm";
import BankAccountTable from "@app/feature/shared/BankAccountTable";
import useBankAccountTable from "@app/pages/manageWithdrawal/hook/useBankAccountTable";
import { useGetBankAccountDataQuery } from "@app/store/services/manageWithdrawalBankAccountApi";
import { Loader } from "@app/components";

const ManageBankAccount: FC = () => {
    const { columns } = useBankAccountTable();
    const { data: withdrawalBankList, refetch, isLoading } = useGetBankAccountDataQuery();

    return (
        <Fragment>
            {
                isLoading && <Loader/>
            }
            <Heading as="h3">Manage Bank Account (withdrawal)</Heading>
            <ManageWithdrawalForm refetch={refetch} />
            <BankAccountTable refetch={refetch} columns={columns} data={withdrawalBankList?.data || []} />
        </Fragment>
    )
}

export default ManageBankAccount