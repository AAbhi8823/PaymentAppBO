import { FC } from "react";
import { Header, SideBar } from "@app/layout";
import { layoutWrapperProps } from "@app/type/layout/layoutWrapper";
import  MenuProvider  from "@app/layout/layoutWrapper/MenuProvider";

const LayoutWrapper: FC<layoutWrapperProps> = (props) => {
    const {children} = props;

    return (
        <MenuProvider>
            <Header />
            <SideBar />
            <div className="p-4 sm:ml-64 mt-14 md:mt-14" >
                {children}
            </div>
        </MenuProvider>
    )
}

export default LayoutWrapper