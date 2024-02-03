import { FC } from "react"
import Datepicker from "react-tailwindcss-datepicker"
import { useController } from "react-hook-form";
import { dateRangePickerProps } from "@app/type/components/dateRangePickerProps";

const DateRangePicker: FC<dateRangePickerProps> = (props) => {
    const { name, control, isErrorVisible } = props;

    const { field, fieldState: { error } } = useController({
        name,
        control
    });

    const showError = isErrorVisible && error;

    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="">Select Date Range</label>
            <Datepicker inputClassName="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" primaryColor="blue" {...field} placeholder="Select Date Range" />
            {
                showError && <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error?.message}</p>
            }
        </div>
    )
}

export default DateRangePicker