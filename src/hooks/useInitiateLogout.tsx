import { useAppDispatch } from "@app/store/hooks";
import { resetAuthSlice } from "@app/store/features/authSlice";
import { ReactToastify } from "@app/components";
import { useNavigate } from "react-router-dom";
import { PUBLIC_ROUTES } from "@app/routes/route.constant";

const useInitiateLogout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const clearBrowserData = () => {
        localStorage.clear();
        sessionStorage.clear();
    }

    const handleProcessLogout = () => {
        if (!localStorage.getItem("authToken")){
            navigate(PUBLIC_ROUTES.LOGIN)
            setTimeout(() => {
                ReactToastify("Logout Successfully", "success")
            }, 600);
        }
        else{ 
            ReactToastify("Something went wrong! unable to logout", "error")
        }
    }

    const handleLogout = () => {
        clearBrowserData();
        dispatch(resetAuthSlice);
        handleProcessLogout()
    }

    return { handleLogout }
}

export default useInitiateLogout;