import { protectedRouteProps } from "@app/type/protectedRoute";
import { FC, Fragment, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from "@app/routes/route.constant";
import { ReactToastify } from "@app/components";

const ProtectedRoute: FC<protectedRouteProps> = (props) => {
    const { children } = props;
    const location = useLocation();
    const { pathname } = location;
    const currentPageName = pathname.substring(1);

    // check for auth token in session storage
    const isAuthenticated = sessionStorage.getItem("authToken");
    const pageAccessArray = sessionStorage.getItem("pageAccessAllowed");
    const pageAccessAllowed = pageAccessArray && JSON.parse(pageAccessArray);

    useEffect(() => {
        if (pageAccessAllowed && !pageAccessAllowed.includes(currentPageName)) {
            ReactToastify("Restricted Page", "error");
        }

    }, [pathname, currentPageName, pageAccessAllowed])

    if (!isAuthenticated) {
        return (
            <Navigate to={PUBLIC_ROUTES.LOGIN} state={{ from: location }} replace />
        )
    }

    if (!pageAccessAllowed.includes(currentPageName)) {
        return (
            <Navigate to={PROTECTED_ROUTES.DASHBOARD} state={{ from: location }} replace />
        )
    }

    return (
        <Fragment>{children}</Fragment>
    )
}

export default ProtectedRoute