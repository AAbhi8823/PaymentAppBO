import { selectProps } from "@app/type/components/select";
import { FC } from "react";
import { useController } from "react-hook-form";

const sizeVariant = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
}

const Select: FC<selectProps> = (props) => {
    const { label, id, control, placeholder, name, size = "md", options = [], isDisabled, isRequired, isErrorVisible } = props;

    const { field, fieldState: { error } } = useController({
        name,
        control
    });

    const showError = isErrorVisible && error;

    return (
        <div className="mb-2 w-full relative">
            {
                label && <label htmlFor={id} className={`${sizeVariant[size]} block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>{label}</label>
            }

            <select
                {...field}
                name={name}
                id={id}
                className={`${sizeVariant[size]} block w-full p-2 text-gray-900 border ${showError ? `border-red-500` : `border-gray-300`}  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                disabled={isDisabled}
                required={isRequired}
            >
                <option disabled hidden>{placeholder}</option>
                {options && options?.map((option: Array<string>) => (
                    <option value={option} key={option}>{option}</option>
                ))}
            </select>
            {
                showError && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error?.message}</p>
            }
        </div>
    );
};

export default Select;
