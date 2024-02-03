import { FC, Fragment, useEffect } from "react";
import { Heading } from "@app/components/typography";
import ManageDepositForm from "@app/pages/manageDeposit/BankAccountForm";
import BankAccountTable from "@app/feature/shared/BankAccountTable";
import useBankAccountTable from "@app/pages/manageDeposit/hook/useBankAccountTable";
import { useGetBankAccountDataQuery } from "@app/store/services/manageDepositBankAccountApi";
import { Loader } from "@app/components";

const ManageBankAccount: FC = () => {
    const { columns } = useBankAccountTable();
    const { data: depositBankAccountList, refetch, isLoading } = useGetBankAccountDataQuery();

    return (
        <Fragment>
            {
                isLoading && <Loader/> 
            }
            <Heading as="h3">Manage Bank Account (Deposit)</Heading>
            <ManageDepositForm refetch={refetch} />
            <BankAccountTable refetch={refetch} columns={columns} data={depositBankAccountList?.resData?.data || []} />
        </Fragment>
    )
}

export default ManageBankAccount