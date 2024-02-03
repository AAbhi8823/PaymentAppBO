import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";


const NavMenu: FC = (props: any) => {
    const { icon, id, name, child } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <li key={id}>
            <button type="button" onClick={handleToggleMenu} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                {icon}
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{name}</span>
                {isMenuOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            {
                isMenuOpen && <ul id="dropdown-example" className="py-2 space-y-2">
                    {
                        child && child?.map((item: any) => (<li>
                            <Link key={item?.id} to={item?.to} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{item.name}</Link>
                        </li>))
                    }
                </ul>
            }

        </li>
    )
}

export default NavMenu