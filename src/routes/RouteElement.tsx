import { LayoutWrapper } from "@app/layout";
import ProtectedRoute from "@app/routes/ProtectedRoute";
import { elementProps } from "@app/type/routeElement";
import { FC } from "react";

const RouteElement: FC<elementProps> = (props) => {
    const { route } = props;
    const Element = route.element;

    if (route.isLayoutWrapperRequire) {
        return (
            <ProtectedRoute>
                <LayoutWrapper>
                    <Element />
                </LayoutWrapper>
            </ProtectedRoute>
        )
    }

    return (
        <ProtectedRoute>
            <Element />
        </ProtectedRoute>
    )
}

export default RouteElement