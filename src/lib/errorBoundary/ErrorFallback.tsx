import { FC } from "react";
import { Heading } from "@app/components/typography";
import { Button, Alert } from "@app/components";
import { FallbackProps } from "react-error-boundary";

const ErrorFallback: FC<FallbackProps> = (props) => {
    const { error } = props;

    const handleRedirectToOrigin = () => {
        window.location.assign(window.location.origin)
    }

    return (
        <div className="flex justify-center items-center h-screen border">
            <div className="text-center h-min w-4/12 p-8 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h1 className="text-5xl mb-3">Oops!</h1>
                <Heading as="h3">There is An Error</Heading>
                <Alert variant="danger" message={error?.message} />
                <Button variant="primary" size="lg" onClick={handleRedirectToOrigin}>Try Again</Button>
            </div>
        </div>
    )
}

export default ErrorFallback