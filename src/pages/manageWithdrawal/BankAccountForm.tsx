import { InputField } from "@app/components/form";
import { FC, useState } from "react";
import { Button, Loader, Model, ReactToastify } from "@app/components";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import addBankAccountSchema from "@app/schema/addBankAccountSchema";
import { useAddBankInformationMutation } from "@app/store/services/withdrawalBankAccountApi";
import { Heading, Text } from "@app/components/typography";

const BankAccountForm: FC<bankAccountFormProps> = (props) => {
    const { refetch } = props
    const methods = useForm({
        mode: "onChange",
        resolver: yupResolver(addBankAccountSchema)
    });

    const { control, handleSubmit, reset } = methods;

    const [isHidden, setIsHidden] = useState(true);
    const [userDetail, setUserDetail] = useState<userDetail | null>(null);
    const [addBankInformation, { isLoading }] = useAddBankInformationMutation();

    const handleAddNewBank = async (fieldValue: FieldValues) => {
        const reqBody = {
            account_number: fieldValue?.accountNumber,
            ifsc_code: fieldValue?.ifscCode,
            branch_name: fieldValue?.branchName,
            bank_name: fieldValue?.bankName,
            phone_number: fieldValue?.mobileNumber,
            customer_id: fieldValue?.customerId,
            username: "arbaz@9852",
            password: fieldValue?.password,
            bank_url: "https://netbanking.hdfcbank.com/netbanking/",
            total_withdraw_amount: fieldValue.totalAmount,
            min_withdraw_limit: fieldValue?.minDepositLimit,
            max_withdraw_limit: fieldValue?.maxDepositLimit,
        }

        try {
            const response = await addBankInformation(reqBody);

            if (response?.data?.status) {
                ReactToastify(response?.data?.message, "success");
                setIsHidden(!isHidden)
                setUserDetail(response.data.data);
                refetch();
                return;
            }

            ReactToastify(response?.error?.data?.message, "error")
        }

        catch (error) {
            throw new Error(`An unknown error occurred ${error}`)
        }
    }

    const handleReset = () => reset();

    return (
        <div className="my-10">
            {
                isLoading && <Loader/>
            }
            <form onSubmit={handleSubmit(handleAddNewBank)}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:grid-6">
                    <InputField control={control} type="number" name="accountNumber" id="accountNumber" label="Bank Account Number" placeholder="Enter" isErrorVisible />
                    <InputField control={control} type="text" name="ifscCode" id="IfscCode" label="IFSC Code" placeholder="Enter" isErrorVisible />
                    <InputField control={control} type="text" name="branchName" id="branchName" label="Branch Name" placeholder="Enter" isErrorVisible />
                    <InputField control={control} type="text" name="bankName" id="bankName" label="Bank Name" placeholder="Enter" isErrorVisible />
                    <InputField control={control} type="number" name="mobileNumber" id="phoneNumber" label="Mobile Number" placeholder="Enter" isErrorVisible />
                    <InputField type="number" name="totalAmount" id="totalAmount" control={control} placeholder="Enter" label="Total Amount" isErrorVisible />
                    <InputField type="text" name="customerId" control={control} placeholder="Enter" label="Customer Id" id="customerId" isErrorVisible />
                    <InputField type="password" label="Password" control={control} name="password" id="password" placeholder="Enter" isErrorVisible />
                    <InputField control={control} type="number" name="minDepositLimit" id="minDepositLimit" label="Min Deposit Limit" placeholder="Enter" isErrorVisible />
                    <InputField control={control} type="number" name="maxDepositLimit" id="maxDepositLimit" label="Max Deposit Limit" placeholder="Enter" isErrorVisible />
                </div>
                <div className="flex gap-2 mt-6 md:mt-3">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="secondary" type="reset" onClick={handleReset} isDisabled={isLoading}>Clear</Button>
                </div>
            </form>

            <Model refetch={refetch} isHidden={isHidden} setIsHidden={setIsHidden} title="Login Info">
                <div className="text-center">
                    <Heading as="h5">Login with the below credentials</Heading>
                    {
                        userDetail && Object.keys(userDetail).length > 0 ? <div className="grid gap-2">
                            <div>
                                <Text as="strong">UserName</Text>: {`${userDetail?.username}`}
                            </div>
                            <div>
                                <Text as="strong">Password</Text>: {`${userDetail?.password}`}
                            </div>
                            <div>
                                <Text as="strong">Bank Account Id</Text>: {`${userDetail?.bankAccountId}`}
                            </div>
                        </div> : <Text as="p">No data found</Text>
                    }
                </div>
            </Model>
        </div>
    )
}

export default BankAccountForm