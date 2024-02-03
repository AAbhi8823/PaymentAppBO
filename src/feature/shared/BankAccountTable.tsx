import { FC, useState } from "react";
import useGetTableData from "@app/hooks/useGetTableData";
import EditWithdrawalModel from "@app/pages/manageWithdrawal/EditWithdrawalModel";
import { useLocation } from "react-router-dom";
import { useRemoveDepositBankAccountMutation } from "@app/store/services/manageDepositBankAccountApi";
import { useRemoveWithdrawalBankAccountMutation } from "@app/store/services/manageWithdrawalBankAccountApi";
import EditDepositModel from "@app/pages/manageDeposit/EditDepositModel";
import { ReactToastify } from "@app/components";

const BankAccountTable: FC<bankAccountTableProps> = (props) => {
    const { columns, data = [], refetch } = props;
    const { tableData } = useGetTableData(data);
    const [editItem, setEditItem] = useState({});
    const [isEditModelHidden, setIsEditModelHidden] = useState(true);
    const location = useLocation();
    const { pathname } = location;
    const [removeDepositBankAccount] = useRemoveDepositBankAccountMutation();
    const [removeWithdrawalBankAccount] = useRemoveWithdrawalBankAccountMutation();

    const handleEdit = (item) => {
        setIsEditModelHidden(!isEditModelHidden);
        setEditItem(item);
    }

    const handleApiCall = (bankAccountId: string) => {
        if (pathname.includes("withdrawal")) {
            return removeWithdrawalBankAccount(bankAccountId)
        }

        return removeDepositBankAccount(bankAccountId)
    }

    const handleDelete = async (item) => {
        const bankAccountId = item?.bankAccountId;

        try {
            const response = await handleApiCall(bankAccountId);
            if (response?.data?.resData?.status) {
                ReactToastify(response?.data?.resData?.message, "success");
                setIsEditModelHidden(true);
               refetch()
            }
            else {
                ReactToastify(response?.error?.data?.message, "error")
                setIsEditModelHidden(false);
            }
        }
        catch (error) {
            throw new Error(`An New Error occurred ${error}`)
        }
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {
                            columns && columns?.map((el: { id: number, name: string }) => (
                                <th scope="col" key={el?.id} className="px-6 py-3">
                                    {el?.name}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData && tableData?.map((el, index: number) => {
                            return (
                                <tr key={el.id || index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <p className="text-base font-semibold">{el?.account_number}</p>
                                    </th>

                                    <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <p className="text-base font-semibold">{el?.bank_name}</p>
                                    </th>

                                    <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <p className="text-base font-semibold">{el?.branch_name}</p>
                                    </th>

                                    <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <p className="text-base font-semibold">{el?.total_withdraw_amount || el?.total_deposit_amount}</p>
                                    </th>

                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            {
                                                el.isActive ?
                                                    <>
                                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> active
                                                    </>
                                                    :
                                                    <>
                                                        <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> In Active
                                                    </>
                                            }
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            onClick={() => handleEdit(el)}
                                        >Edit</button>
                                    </td>

                                    <td className="px-6 py-4">
                                        <button className="ont-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => handleDelete(el)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                pathname.includes("withdrawal") ? <EditWithdrawalModel editItem={editItem} isHidden={isEditModelHidden} setIsHidden={setIsEditModelHidden} tableData={tableData}
                    refetch={refetch}
                /> : <EditDepositModel editItem={editItem} isHidden={isEditModelHidden} setIsHidden={setIsEditModelHidden} tableData={tableData}
                    refetch={refetch}
                />
            }
        </div>
    )
}

export default BankAccountTable