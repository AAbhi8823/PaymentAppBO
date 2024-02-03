import { InputField } from "@app/components/form"
import { Button } from "@app/components"
import { FC } from "react"
import { useFormContext } from "react-hook-form";
import { manageUpiFormProps } from "@app/type/pages/manageUpiForm";

const ManageUpiForm: FC<manageUpiFormProps> = (props) => {
    const { isLoading } = props;
    const { control, reset } = useFormContext()

    return (
        <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                <InputField control={control} name="upi" id="upi" type="text" label="New Upi id" placeholder="Enter" isErrorVisible />
                <InputField control={control} type="number" name="minDepositLimit" id="minDepositLimit" label="Min Deposit Limit" placeholder="Enter" isErrorVisible />
                <InputField control={control} type="number" name="maxDepositLimit" id="maxDepositLimit" label="Max Deposit Limit" placeholder="Enter" isErrorVisible />
            </div>
            <div className="flex gap-2 mt-6 md:mt-3">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="secondary" type="reset" onClick={reset} isDisabled={isLoading}>Clear</Button>
            </div>
        </div>
    )
}

export default ManageUpiForm