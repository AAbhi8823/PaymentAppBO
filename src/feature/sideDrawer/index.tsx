import { FC } from "react";
import { DrawerForm, ReactToastify } from "@app/components";
import EditForm from "@app/feature/shared/EditForm";
import ViewForm from "@app/feature/shared/ViewForm";
import { sideDrawerProps } from "@app/type/feature/sideDrawerProps";
import { FieldValues } from 'react-hook-form';
import { useUpdateWithdrawalStatusMutation } from "@app/store/services/changeWithdrawalStatusApi";
import { useUpdateDepositStatusMutation } from "@app/store/services/changeDepositStatusApi";
import { useLocation } from "react-router-dom";

const SideDrawer: FC<sideDrawerProps> = (props) => {
    const { isDrawerClose, setIsDrawerClose, isEdit, masterData, isStatusPending, formId } = props;
    const location = useLocation();
    const pathname = location.pathname.replace("/", "");
    const pageName = pathname == "deposits" ? "deposit_status" : "withdrawal_status"
    const transactionStatusOptions = masterData?.resData?.data[pageName].map((item: any) => item);
    const [updateWithdrawalStatus] = useUpdateWithdrawalStatusMutation();
    const [updateDepositStatus] = useUpdateDepositStatusMutation();

    const filteredTransactionStatusOptions = transactionStatusOptions?.filter((item:any) => item.toLowerCase() !== "manual" && item.toLowerCase() !== "pending");

    const handleUpdateStatus = async (fieldValue: FieldValues) => {
        try {
            const id = fieldValue.userId;
            const reqBody = {
                transaction_status: fieldValue?.status,
            }

            // call deposit or withdrawal api based in which page
            const response = formId === "depositForm" ? await updateDepositStatus({ id, reqBody }) : await updateWithdrawalStatus({ id, reqBody })

            if (response?.data?.resData?.status) {
                ReactToastify(response?.data?.resData?.message, "success");
                setIsDrawerClose(true)
            }

            else {
                ReactToastify(response?.data?.error.message, "error")
                setIsDrawerClose(false)
            }
        }

        catch (error) {
            throw new Error(`An new Error Ocurred ${error}`)
        }
    }

    const drawerType = isEdit ? "Edit" : "View";
    const pageTitle = pathname === "deposits" ? "Deposit" : "Withdrawal"

    return (
        <DrawerForm isEdit={isEdit} formId={formId} handleUpdateStatus={handleUpdateStatus} isDrawerClose={isDrawerClose} setIsDrawerClose={setIsDrawerClose} drawerHeading={`${drawerType} ${pageTitle} Status`} isStatusPending={isStatusPending}>
            {isEdit ? <EditForm formId={formId} isStatusPending={isStatusPending} transactionStatusOptions={filteredTransactionStatusOptions} /> : <ViewForm formId="formId" transactionStatusOptions={filteredTransactionStatusOptions} />}
        </DrawerForm>
    )
}

export default SideDrawer