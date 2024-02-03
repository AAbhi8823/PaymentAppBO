import { FC } from "react";
import { HeaderLeft, HeaderRight } from "@app/layout";

const Header: FC = () => {
    return (
        <nav className="fixed top-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <HeaderLeft />
                    <HeaderRight />
                </div>
            </div>
        </nav>
    )
}

export default Header