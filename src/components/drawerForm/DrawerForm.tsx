import { FC } from "react";
import { Button } from "@app/components";
import { Heading } from "@app/components/typography";
import { drawerFormProps } from "@app/type/components/drawerForm";
import { useFormContext } from "react-hook-form";

const DrawerForm: FC<drawerFormProps> = (props) => {
    const { isDrawerClose, setIsDrawerClose, formId, children, drawerHeading, handleUpdateStatus, isStatusPending, isEdit } = props;

    const { handleSubmit } = useFormContext();

    const handleCloseDrawer = () => {
        setIsDrawerClose(!isDrawerClose)
    }

    return (
        <div id="drawer-form" className={`fixed top-0 right-0 z-50 h-screen p-4 overflow-x-hidden transition-transform ${isDrawerClose ? `translate-x-full` : `translate-x-0`}  bg-white w-96 dark:bg-gray-800 shadow-md`}>

            <div className="drawer-form-header">
                <Heading as="h6">{drawerHeading}</Heading>
                <button type="button" onClick={handleCloseDrawer} data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-3 end-1.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <hr />
            </div>

            <div className="form-drawer-form form-drawer-body grid gap-3 py-8">
                {children}
            </div>
            {
                isEdit && <div className={`form-drawer-footer absolute bg-white bottom-0 right-0 left-0`}>
                    <hr />
                    <div className="flex gap-2 justify-end">
                        <Button variant="primary" type="submit" form={formId} isDisabled={!isStatusPending} onClick={handleSubmit(handleUpdateStatus)}>Submit</Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default DrawerForm