import { FC, useState } from "react";
import EditUpiModel from "@app/pages/manageUpi/EditUpiModel";
import { useRemoveUpiIdMutation } from "@app/store/services/manageUpiList";
import { ReactToastify } from "@app/components";
import useGetTableData from "@app/hooks/useGetTableData";

const ExistingUpiTable: FC<existingUpiTableProps> = (props) => {
    const { columns, data = [], refetch } = props;
    const [removeUpiId] = useRemoveUpiIdMutation();
    const [editItem, setEditItem] = useState({});
    const [isEditModelHidden, setIsEditModelHidden] = useState(true);
    const { tableData } = useGetTableData(data)

    const handleEdit = (item: any) => {
        setIsEditModelHidden(!isEditModelHidden);
        setEditItem(item);
    }

    const handleDelete = async (id: string) => {
        try {
            const res = await removeUpiId(id);

            if (res?.data?.resData?.status) {
                refetch();
                ReactToastify(res?.data?.resData?.message, "success");
                return;
            }

            ReactToastify("oops!, could not be deleted", "error");
        }

        catch (error) {
            throw new Error(`An error occurred ${error}`)
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
                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <p className="text-base font-semibold">{el?.upi}</p>
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
                                        <button className="ont-medium text-red-600 dark:text-red-500 hover:underline"
                                            onClick={() => handleDelete(el._id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <EditUpiModel editItem={editItem} isHidden={isEditModelHidden} setIsHidden={setIsEditModelHidden} refetch={refetch} tableData={tableData} />
        </div>
    )
}

export default ExistingUpiTable