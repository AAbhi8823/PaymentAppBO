import { FC, Fragment } from "react";
import LogoIcon from "@app/assets/icons/secure-payment.png";

const colorVariant = {
    default: "text-black",
    white: "text-white",
}

const CompanyLogo: FC<companyLogoProps> = (props) => {
    const { variant = "default" } = props;

    return (
        <Fragment>
            <img className="w-8 h-8 mr-2" src={LogoIcon} alt="logo" />
            <span className={`inline-block mb-2 ${colorVariant[variant]}`}>Payment App</span>
        </Fragment>
    )
}

export default CompanyLogo