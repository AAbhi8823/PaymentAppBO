import { Button, CompanyLogo, Loader, ReactToastify } from "@app/components";
import { InputField } from "@app/components/form";
import { Text } from "@app/components/typography";
import { FC } from "react";
import { Link } from "react-router-dom";
import { PROTECTED_ROUTES } from "@app/routes/route.constant";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import changePasswordSchema from "@app/schema/changePasswordSchema";
import { useUpdateNewPasswordMutation } from "@app/store/services/changePasswordApi";
import useInitiateLogout from "@app/hooks/useInitiateLogout";
import { useNavigate } from "react-router-dom";
import { PUBLIC_ROUTES } from "@app/routes/route.constant";

const ChangePassword: FC = () => {
    const { control, handleSubmit, reset } = useForm({
        mode: "onChange",
        resolver: yupResolver(changePasswordSchema)
    });
    const { handleLogout } = useInitiateLogout();
    const navigate = useNavigate();

    const [updateNewPassword, { isLoading }] = useUpdateNewPasswordMutation();

    const handleResetPassword = async (fieldValue: changePasswordSchema) => {
        const reqBody = {
            old_password: fieldValue?.oldPassword,
            new_password: fieldValue?.newPassword,
            confirm_password: fieldValue?.confirmPassword,
        }
        try {
            const res = await updateNewPassword(reqBody);

            if (res?.data && res?.data[0]?.status) {
                ReactToastify(res?.data[0]?.message, "success");
                reset();
                handleLogout();
                navigate(PUBLIC_ROUTES.LOGIN)
                return;
            }

            ReactToastify(res?.error?.data[0]?.message, "error")
        }

        catch (error) {
            ReactToastify("Something went wrong", "error")
            throw new Error(String(error))
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            {
                isLoading && <Loader />
            }
            <div className="flex flex-col items-center justify-center px-6 pt-8 pb-4 mx-auto h-screen lg:py-0">
                <Link to={PROTECTED_ROUTES.DASHBOARD} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <CompanyLogo />
                </Link>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Change Password
                    </h2>
                    <form className="my-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit(handleResetPassword)}>
                        <InputField control={control} name="oldPassword" type="password" label="Old Password" id="oldPassword" placeholder="••••••••" isShowHideRequired isErrorVisible />
                        <InputField control={control} name="newPassword" type="password" label="New Password" id="newPassWord" placeholder="••••••••" isShowHideRequired isErrorVisible />
                        <InputField control={control} name="confirmPassword" type="password" label="Confirm Password" id="confirmPassWord" placeholder="••••••••" isShowHideRequired isErrorVisible />
                        <Button variant="primary" type="submit" className="w-full">Reset Password</Button>
                    </form>
                    <Text as="p">
                        Back to Dashboard. <Link to={PROTECTED_ROUTES.DASHBOARD} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Go back</Link>
                    </Text>
                </div>
            </div>
        </section>
    )
}

export default ChangePassword