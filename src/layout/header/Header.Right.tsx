import { FC, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PROTECTED_ROUTES } from "@app/routes/route.constant";
import { CgProfile } from "react-icons/cg";
import { Button } from "@app/components";
import  useInitiateLogout  from "@app/hooks/useInitiateLogout"

const HeaderRight: FC = () => {
    const [toggleProfileOption, setToggleProfileOption] = useState(false);
    const menuRef = useRef();
    const { handleLogout } = useInitiateLogout();
    // close menu when clicked outside the menu
    useEffect(() => {
        const handleClickOutsideMenuClose = (e) => {
            if (menuRef?.current && !menuRef?.current?.contains(e.target)) {
                setToggleProfileOption(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutsideMenuClose);

        return () => {
            document.addEventListener("mousedown", handleClickOutsideMenuClose);
        }
    })

    const handleToggle = () => setToggleProfileOption(!toggleProfileOption);

    return (
        <div className="flex items-center">
            <div className="flex relative items-center ml-3" ref={menuRef}>
                <div>
                    <Button variant="rounded" size="xSm" onClick={handleToggle}>
                        <span className="sr-only">Open user menu</span>
                        <CgProfile size="35" />
                    </Button>
                </div>
                {
                    toggleProfileOption && <div  className="z-50 absolute top-8 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                        <div className="px-4 py-3" role="none">
                            <p className="text-sm text-gray-900 dark:text-white" role="none">
                                Arbaz Akhter
                            </p>
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                arbaz.akhter@gmail.com
                            </p>
                        </div>
                        <ul className="py-1" role="none">
                            <li>
                                <Link to={PROTECTED_ROUTES.CHANGE_PASSWORD} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Change password</Link>
                            </li>
                           
                            <li onClick={handleLogout}>
                                <div className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:cursor-pointer dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Logout</div>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default HeaderRight