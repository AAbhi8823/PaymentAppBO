import { editModelProps, fieldValue } from "@app/type/pages/editUpiModel";
import { FC, useEffect } from "react";
import { Loader, ReactToastify } from "@app/components";
import { useForm, FormProvider } from "react-hook-form";
import { useUpdateUpiIdMutation } from "@app/store/services/manageUpiList";
import ChangeStatusModel from "@app/feature/changeStatusModel";
import updateUpiSchema from "@app/schema/updateUpiSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckBox, InputField } from "@app/components/form";

const EditUpiModel: FC<editModelProps> = (props) => {
    const { isHidden, setIsHidden, editItem, refetch } = props;
    const [updateUpiId, { isLoading }] = useUpdateUpiIdMutation();
    
    const methods = useForm({
        mode: "onChange",
        resolver: yupResolver(updateUpiSchema),
        defaultValues: {
            isActive: false,
        }
    });
    const { setValue, control, formState: { isDirty }} = methods;

    useEffect(() => {
        setValue("newUpi", editItem?.upi);
        setValue("isActive", false);
    }, [editItem, setValue])

    const handleEditSave = async (fieldValue: fieldValue) => {
        if (!isDirty) {
            ReactToastify("please update any field to save", "error");
            return;
        }

        else if (fieldValue?.newUpi === editItem?.upi && !fieldValue.isActive) {
            ReactToastify("failed to update same value", "error");
            return;
        }

        const id = editItem?._id;

        const reqBody = fieldValue?.isActive ? {
            upi: fieldValue?.newUpi,
            isActive: !editItem?.isActive,
        } : {
            upi: fieldValue?.newUpi,
        }

        try {
            const res = await updateUpiId({ id, reqBody })
            if (res?.data?.status) {
                ReactToastify(res?.data?.message, "success");
                setIsHidden(!isHidden);
                refetch();
                return;
            }

            ReactToastify("something went wrong", "error");

        }
        catch (error) {
            throw new Error(`An unknown error occurred ${error}`)
        }
    }

    return (
        <FormProvider {...methods}>
            {
                isLoading && <Loader/>
            }
            <ChangeStatusModel isLoading={isLoading} isHidden={isHidden} setIsHidden={setIsHidden} title="Edit Upi" formSubmitHandler={handleEditSave}>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <InputField control={control} type="text" name="newUpi" id="new upi" placeholder="Enter" label="Upi Id" isErrorVisible />
                    </div>
                    <div className="col-span-6 sm:col-span-3 flex align-end mt-3 ">
                        <CheckBox control={control} name="isActive" label={!editItem?.isActive ? "active" : "De Activate"} />
                    </div>
                </div>
            </ChangeStatusModel>
        </FormProvider>
    )
}

export default EditUpiModel