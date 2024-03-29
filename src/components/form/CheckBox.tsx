import { checkboxProps } from "@app/type/components/checkbox";
import { FC } from "react";
import { useController } from "react-hook-form";

const CheckBox: FC<checkboxProps> = (props) => {
    const { label, id, name, control, isDisabled, isRequired, isChecked } = props;

    const { field } = useController({
        name,
        control,
    });

    return (
        <div className="flex items-center">
            <input id={id} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" disabled={isDisabled} required={isRequired} checked={isChecked} {...field} 
            />
            <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
        </div>
    )
}

export default CheckBox