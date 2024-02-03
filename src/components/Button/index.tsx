import { buttonProps } from "@app/type/components/button";
import { FC } from "react";

const sizeVariant = {
    xSm: "p-0",
    sm: "px-3 py-1.5",
    md: "px-5 py-2.5",
    lg: "px-7 py-3.5"
}

const Button: FC<buttonProps> = (props) => {
    const { children, variant, type = "button", isDisabled = false, size = "md", onClick, className } = props;

    const buttonVariant = {
        primary:
            `${sizeVariant[size]} ${className} text-white bg-blue-700hover:bg-blue-800 font-medium rounded-lg text-sm mr-2 mt-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none ${isDisabled ? `bg-blue-700/50 hover:cursor-not-allowed` : `bg-blue-700`}`,
        secondary:
            `${sizeVariant[size]} ${className} text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm mt-2 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`,
        tertiary:
            `${sizeVariant[size]} ${className} text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700`,
        rounded:
            `${sizeVariant[size]} ${className} flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600`
    };

    return (
        <button onClick={onClick} type={type} disabled={isDisabled} className={buttonVariant[variant]}>
            {children}
        </button>
    );
};

export default Button;
