import { FC } from "react";

const sizeVariant = {
    sm: 3,
    md: 4,
    lg: 6,
}

const TextArea: FC<textAreaProps> = (props) => {
    const { id, label, size = "md", placeholder } = props;

    return (
        <div className="mb-6">
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <textarea id={id} rows={sizeVariant[size]} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} />
        </div>
    )
}

export default TextArea