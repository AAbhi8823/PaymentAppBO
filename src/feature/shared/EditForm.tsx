import { FC } from "react";
import { InputField, Select } from "@app/components/form";
import { useFormContext } from "react-hook-form";

const EditForm: FC<formProps> = (props) => {
    const { transactionStatusOptions, isStatusPending, formId } = props;
    const { control } = useFormContext();

    return (
        <form id={formId}>
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
                <div className="pl-14 w-full">
                    <Select control={control} name="status" id="status" options={transactionStatusOptions} isDisabled={!isStatusPending} isErrorVisible />
                </div>
            </div>
        </form>

    )
}

export default EditForm