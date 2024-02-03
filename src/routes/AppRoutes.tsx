import { Routes, Route } from "react-router-dom";
import { Suspense, FC } from "react";
import { Loader } from "@app/components";
import Login from "@app/pages/auth/login";
import routeList from "@app/routes/route.config";
import { PUBLIC_ROUTES } from "@app/routes/route.constant";
import RouteElement from "@app/routes/RouteElement";

const AppRoutes: FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />

                {/* protected routes */}
                {
                    routeList && routeList?.map((route) => {
                        return (
                            <Route key={route.path} path={route.path} element={<RouteElement route={route} />} />
                        )
                    })
                }
            </Routes>
        </Suspense>
    )
}

export default AppRoutes