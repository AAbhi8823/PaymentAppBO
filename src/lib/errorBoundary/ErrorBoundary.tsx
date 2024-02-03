import { FC } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@app/lib/errorBoundary/ErrorFallback";
import { errorBoundaryProps } from "@app/type/lib/errorBoundary";

const ErrorBoundary: FC<errorBoundaryProps> = (props) => {
    const { children, fallbackComponent: FallbackComponent = ErrorFallback } = props;

    return (
        <ReactErrorBoundary FallbackComponent={FallbackComponent}>{children}</ReactErrorBoundary>
    )
}

export default ErrorBoundary