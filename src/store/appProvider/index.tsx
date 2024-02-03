import { appProviderProps } from "@app/type/appProvider";
import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "@app/lib";
import StoreProvider from "@app/store/StoreProvider";

const AppProvider: FC<appProviderProps> = (props) => {
    const { children } = props;

    return (
        <Router>
            <ErrorBoundary>
                <StoreProvider>
                    <ToastContainer />
                    {children}
                </StoreProvider>
            </ErrorBoundary>
        </Router>
    )
}

export default AppProvider