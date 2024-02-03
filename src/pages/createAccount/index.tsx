import { FC } from "react";
import { Button, Loader, ReactToastify } from "@app/components";
import { InputField, Select, CheckBox } from "@app/components/form";
import { useForm } from "react-hook-form";
import { Heading } from "@app/components/typography";
import { yupResolver } from "@hookform/resolvers/yup";
import createAccountSchema from "@app/schema/createAccountSchema";
import { useCreateAccountMutation } from "@app/store/services/createNewAccountApi";
import { useGetMasterDataQuery } from "@app/store/services/masterApi";

const CreateAccount: FC = () => {
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onChange",
        resolver: yupResolver(createAccountSchema)
    });
    const [createAccount, { isLoading }] = useCreateAccountMutation();
    const { data: masterData } = useGetMasterDataQuery();

    const accountTypeOptions = masterData?.resData?.data?.account_type?.map((item) => item)

    const handleReset = () => reset();

    const getPageAccessAllowed = (fieldValue: any) => {
        const pageAccessArray = Object.entries(fieldValue);
        const checkedPageArray = pageAccessArray.filter(item => item[item.length - 1] == true);
        const pageAccessAllowedNames = checkedPageArray.map((item) => item[0])

        return pageAccessAllowedNames;
    }

    const handleCreateAccount = async (fieldValue: any) => {
        try {
            const reqBody = {
                email: fieldValue?.email,
                mobile_number: fieldValue?.mobileNumber, //mobile number is not provided in api body
                password: fieldValue?.password,
                confirm_password: fieldValue?.confirmPassword,
                account_type: fieldValue?.accountType,
                pageAccessAllowed: getPageAccessAllowed(fieldValue),
            }
            const response = await createAccount(reqBody);

            if (response?.data?.resData?.status) {
                ReactToastify(response?.data?.resData?.message, "success");
                reset();
            }
        }

        catch (error) {
            ReactToastify("Something Went Wrong", "error",)
            throw new Error(String(error));
        }

    }

    return (
        <section>
            {isLoading && <Loader/>}
            <Heading as="h3">Create Account</Heading>
            <form className="my-10" onSubmit={handleSubmit(handleCreateAccount)}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:grid-6">
                    <InputField type="email" name="email" control={control} label="Email/Username" placeholder="someone@email.com" isErrorVisible />
                    <InputField control={control} name="mobileNumber" label="Mobile number" type="number" isErrorVisible placeholder="Enter" />
                    <InputField type="password" name="password" control={control} label="Password" placeholder="••••••••" isErrorVisible isShowHideRequired />
                    <InputField type="password" name="confirmPassword" control={control} label="Confirm password" placeholder="••••••••" isErrorVisible isShowHideRequired />
                    <Select control={control} name="accountType" options={accountTypeOptions} label="Account Type" placeholder="Select" isErrorVisible />
                </div>

                <label className="block my-4 md:my-6 text-sm font-medium text-gray-900 dark:text-white">Page Access allowed</label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    <CheckBox control={control} name="dashboard" label="Dashboard" />
                    <CheckBox control={control} name="withdrawal" label="Withdrawal" />
                    <CheckBox control={control} name="register" label="Register" />
                    <CheckBox control={control} name="report" label="Report" />
                    <CheckBox control={control} name="manageDepositAccount" label="Manage Deposit Account" />
                    <CheckBox control={control} name="manageBankAccount" label="Manage Bank Account" />
                    <CheckBox control={control} name="deposit" label="Deposit" />

                </div>
                {
                    errors && <p className="mt-4 text-sm text-red-600 dark:text-red-500">{errors?.pageAccessAllowed?.message}</p>
                }

                <div className="flex gap-2 mt-8 md:mt-6">
                    <Button variant="primary" type="submit" >Create an account</Button>
                    <Button variant="secondary" type="reset" isDisabled={isLoading} onClick={handleReset}>Reset</Button>
                </div>
            </form>
        </section>
    )
}

export default CreateAccount;