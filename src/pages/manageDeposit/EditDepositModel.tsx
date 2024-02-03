import { editModelProps } from "@app/type/pages/editUpiModel";
import { FC, useEffect } from "react";
import { useForm, FormProvider, FieldValues } from "react-hook-form";
import ChangeStatusModel from "@app/feature/changeStatusModel";
import { CheckBox, InputField } from "@app/components/form";
import { Loader, ReactToastify } from "@app/components";
import { useUpdateBankAccountStatusMutation } from "@app/store/services/manageWithdrawalBankAccountApi";

const EditDepositModel: FC<editModelProps> = (props) => {
    const { isHidden, setIsHidden, editItem, refetch } = props;
    const [updateBankAccountStatus, { isLoading }] = useUpdateBankAccountStatusMutation();

    const methods = useForm({
        mode: "onChange",
        defaultValues: {
            bankAccountId: "",
            isActive: false,
        }
    });
    const { control, setValue, formState: { isDirty } } = methods;

    useEffect(() => {
        setValue("bankAccountId", editItem?.bankAccountId);
        setValue("isActive", editItem?.isActive);
    }, [editItem, setValue])

    const handleEditSave = async (fieldValue: FieldValues) => {
        if (!isDirty) {
            ReactToastify("please update account status", "error");
            return;
        }

        const bankAccountId = fieldValue?.bankAccountId;

        try {
            const response = await updateBankAccountStatus({ bankAccountId });
            if (response?.data?.resData?.status) {
                ReactToastify(response?.data?.resData?.message, "success");
                setIsHidden(true);
                refetch()
            }
            else {
                ReactToastify(response?.error?.data?.messgae, "error");
                setIsHidden(false);
            }
        }

        catch (error) {
            throw new Error(`An Error occurred ${error}`)
        }
    }

    return (
        <FormProvider {...methods}>
            {
                isLoading && <Loader/>
            }
            <ChangeStatusModel isLoading={false} isHidden={isHidden} setIsHidden={setIsHidden} title="Edit Bank Status" formSubmitHandler={handleEditSave}>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <InputField control={control} type="text" name="bankAccountId" id="bankAccountId" placeholder="Enter" label="Bank Account Id" isErrorVisible isDisabled />
                    </div>
                    <div className="col-span-6 sm:col-span-3 flex align-end mt-3 ">
                        <CheckBox control={control} name="isActive" label={!editItem?.isActive ? "active" : "De Activate"} />
                    </div>
                </div>
            </ChangeStatusModel>
        </FormProvider>
    )
}

export default EditDepositModel