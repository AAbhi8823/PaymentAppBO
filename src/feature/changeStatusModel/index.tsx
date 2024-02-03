import { Button } from "@app/components";
import { Heading } from "@app/components/typography";
import { changeStatusModelProps } from "@app/type/feature/changeStatusModel";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

const ChangeStatusModel: FC<changeStatusModelProps> = (props) => {
    const { title, isLoading, formSubmitHandler, isHidden, setIsHidden, children} = props;
    const { handleSubmit, reset } = useFormContext();

    if (isHidden) {
        return null;
    }

    const handleCloseModel = () => {
        setIsHidden(!isHidden);
        reset();
    }

    return (
        <div id="editUserModal" className="fixed top-0 bg-black/50 inset-0 z-50 items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full">
            <div className="relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-2xl max-h-full">
                {/* model content */}
                <form className="relative bg-white rounded-lg shadow dark:bg-gray-700" onSubmit={handleSubmit(formSubmitHandler)}>
                    {/* model header */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <Heading as="h5">
                            {title}
                        </Heading>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="editUserModal" onClick={handleCloseModel}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    {/* model main body */}
                    <div className="p-6 space-y-6">
                        {children}
                    </div>

                    {/* model footer part */}
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                        <Button variant="secondary" type="reset" isDisabled={isLoading} onClick={handleCloseModel}>
                            Close
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangeStatusModel