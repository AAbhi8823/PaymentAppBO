import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavData } from "@app/layout";
import NavMenu from "@app/layout/sideBar/NavMenu"
import { MenuContext } from "@app/layout/layoutWrapper/MenuProvider";

const SideBar: FC = () => {
   const navList = useNavData();
   const { isMobileMenuOpen } = useContext<any>(MenuContext);
   
   const visibleMobileMenuStyle = isMobileMenuOpen ? `translate-x-0` : `-translate-x-full`

   return (
      <aside
         id="logo-sidebar"
         className={`fixed top-0 left-0 z-30 w-64 h-screen pt-20 transition-transform ${visibleMobileMenuStyle} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
         aria-label="Sidebar"
      >
         <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
               {navList && navList.map((item) => {
                  const { to, id, icon, name, child } = item;
                  if (child && child.length > 0) {
                     return (
                        <NavMenu id={id} icon={icon} child={child} name={name} key={id} />
                     )
                  }

                  return (<li key={id}>
                     <Link to={to} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        {icon}
                        <span className="ml-3">{name}</span>
                     </Link>
                  </li>)
               })}
            </ul>
         </div>
      </aside>
   );
};

export default SideBar;
