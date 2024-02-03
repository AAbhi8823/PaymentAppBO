import { inputFieldProps } from "@app/type/components/inputField";
import { FC, useState, MouseEvent } from "react";
import { useController } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";

const InputField: FC<inputFieldProps> = (props) => {
    const { name, isErrorVisible = false, control, label, id, type = "text", placeholder, isRequired, isDisabled, className, isShowHideRequired = false } = props;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const { field, fieldState: { error } } = useController({
        name,
        control
    });

    const showError = isErrorVisible && error;
    const fieldType = isShowHideRequired && isPasswordVisible ? "text" : type;
    const appearanceNone = type === "number" && `[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`;

    const handleTogglePassword = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => { 
        e.preventDefault()
        setIsPasswordVisible(!isPasswordVisible)
    }

    return (
        <div className="mb-2">
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <div className="relative">
                <input type={fieldType} id={id} className={`${className} ${appearanceNone} ${showError ? `border-red-500` : `border-gray-300`} bg-gray-50 ${isShowHideRequired && `pr-8`} shadow-sm border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${isDisabled && `hover:cursor-not-allowed`}`} placeholder={placeholder}  {...field} required={isRequired} disabled={isDisabled} />
                <div className="absolute top-2/4 right-2 -translate-y-1/2">
                    {
                        isShowHideRequired &&
                        <>
                            {
                                isPasswordVisible ? <button onClick={(e) => handleTogglePassword(e)}>
                                    <GoEye />
                                    </button> : <button onClick={(e) => handleTogglePassword(e)}>
                                    <GoEyeClosed />
                                </button>
                            }
                        </>
                    }
                </div>
            </div>
            {
                showError && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error?.message}</p>
            }
        </div>
    )
}

export default InputField