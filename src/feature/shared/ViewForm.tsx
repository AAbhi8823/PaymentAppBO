import { FC } from "react";
import { InputField } from "@app/components/form";
import { useFormContext } from "react-hook-form";

const ViewForm: FC<formProps> = () => {
    const { control, getValues } = useFormContext();
    const screenshotSrc = getValues("screenshot")

    return (
        <form id="depositStatusForm">
            {
                screenshotSrc && <div className="mx-auto mb-5 w-[80%]">
                    <img src={screenshotSrc} className="img-fluid" width="100%" height="auto" />
                </div>
            }

            <div className="flex items-center gap-2">
                <label htmlFor="userId" className="block w-40 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    User Id
                </label>
                <InputField type="text" name="userId" id="userId" control={control} placeholder="Enter" isDisabled />
            </div>

            <div className="flex items-center gap-2">
                <label htmlFor="amount" className="block w-40 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Amount
                </label>
                <InputField type="number" name="amount" id="amount" control={control} placeholder="Enter" isDisabled />
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="transactionNo" className="block w-40 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tr No
                </label>
                <InputField type="text" name="transactionNo" id="transactionNo" control={control} placeholder="Enter" isDisabled />
            </div>
            <div className="flex items-center gap-2 mt-2">
                <label htmlFor="status" className="block w-40 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Status
                </label>
                <InputField type="text" name="transactionStatus" id="transactionStatus" control={control} isDisabled />
            </div>
            <div className="flex items-center mt-2">
                <label htmlFor="status" className="block w-40 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Translation Date
                </label>
                <InputField type="text" name="transactionDate" id="transactionDate" className="ml-1" control={control} isDisabled />
            </div>
            <div className="flex items-center mt-2">
                <label htmlFor="status" className="block w-40 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Translation Time
                </label>
                <InputField type="text" name="transactionTime" id="transactionTime" className="ml-1" control={control} isDisabled />
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="accountType" className="block w-40 mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Type
                </label>
                <InputField type="text" name="accountType" id="accountType" control={control} placeholder="Enter" isDisabled />
            </div>
        </form>
    )
}

export default ViewForm