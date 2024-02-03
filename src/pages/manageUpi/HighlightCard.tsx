import { HighlightCardProps } from "@app/type/pages/highlightCard";
import { FC } from "react";

const HighlightCard: FC<HighlightCardProps> = (props) => {
    const { type, title, description, icon, count } = props;
    return (

        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                {title}
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{description}</p>
            <ul className="my-4 space-y-3">
                <li>
                    <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        {icon}
                        <span className="flex-1 ml-3 whitespace-nowrap">{count}</span>
                        <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">{type}</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default HighlightCard