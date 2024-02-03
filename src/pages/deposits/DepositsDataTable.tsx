import { FC } from "react";
import useGetTableData from "@app/hooks/useGetTableData";
import SideDrawer from "@app/feature/sideDrawer";
import { FormProvider } from "react-hook-form";
import useSideDrawer from "@app/pages/deposits/hook/useSideDrawer";

const DepositsDataTable: FC<depositDataTableProps> = (props) => {
    const { columns, data = [], masterData } = props;
    const { tableData } = useGetTableData(data);
    const { isDrawerClose, setIsDrawerClose, isEdit, handleEdit, handleView, methods, isStatusPending } = useSideDrawer();

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
                                    <td scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap text-base dark:text-white">
                                        {el?.user_id}
                                    </td>

                                    <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white text-base">
                                        {el?.amount}
                                    </td>

                                    <td scope="row" className="px-6 py-4 text text-gray-900 whitespace-nowrap dark:text-white text-base">
                                        {el?.transaction_id}
                                    </td>

                                    <td scope="row" className="px-6 py-4 text text-gray-900 whitespace-nowrap dark:text-white text-base">
                                        {el?.transaction_status}
                                    </td>

                                    <td scope="row" className="px-6 py-4 text text-gray-900 whitespace-nowrap dark:text-white text-base">
                                        {el?.transaction_type}
                                    </td>

                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            onClick={() => handleView(el)}
                                        >View</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            onClick={() => handleEdit(el)
                                            }
                                        >Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <FormProvider {...methods}>
                <SideDrawer formId="depositForm" isDrawerClose={isDrawerClose} setIsDrawerClose={setIsDrawerClose} isEdit={isEdit} masterData={masterData} isStatusPending={isStatusPending} />
            </FormProvider>
        </div>
    )
}

export default DepositsDataTable