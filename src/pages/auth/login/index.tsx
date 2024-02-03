import { FC } from "react";
import { CheckBox, InputField } from "@app/components/form";
import { Link } from "react-router-dom";
import { Button, CompanyLogo, ReactToastify } from "@app/components";
import { PROTECTED_ROUTES } from "@app/routes/route.constant";
import loginSchema from "@app/schema/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useGetAccessTokenMutation } from "@app/store/services/loginApi";
import { setAuthSlice } from "@app/store/features/authSlice";
import { useAppDispatch } from "@app/store/hooks";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
    const [getAccessToken, { isLoading }] = useGetAccessTokenMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({
        mode: "onChange",
        resolver: yupResolver(loginSchema)
    });

    const handleLoginSubmit = async (fieldValue: loginSchema) => {
        try {
            const res = await getAccessToken(fieldValue);
            if (res?.data[0]?.status) {
                dispatch(setAuthSlice({ authToken: res?.data[0]?.token }));
                sessionStorage.setItem("authToken", res?.data[0]?.token);
                sessionStorage.setItem("pageAccessAllowed", JSON.stringify(res?.data[0]?.pageAccessAllowed))
                navigate(PROTECTED_ROUTES.DASHBOARD);
                ReactToastify(res?.data[0]?.message, "success")
            }
        }
        catch (error) {
            ReactToastify("Invalid userName/password", "error")
            throw new Error(String(error))
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <Link to={PROTECTED_ROUTES.DASHBOARD} className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <CompanyLogo />
                </Link>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(handleLoginSubmit)}>
                            <InputField control={control} type="text" name="email" id="email" label="Username / Email" placeholder="someone@email.com" isErrorVisible={true} />
                            <InputField control={control} type="password" name="password" id="password" label="Password" placeholder="••••••••" isErrorVisible isShowHideRequired />

                            <Button className="w-full" variant="primary" type="submit" isDisabled={isLoading}>Sign in</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login