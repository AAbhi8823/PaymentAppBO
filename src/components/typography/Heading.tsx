import { headingProps } from "@app/type/components/heading";
import { FC } from "react";

const headingVariant = {
    h1: "text-5xl",
    h2: "text-4xl",
    h3: "text-3xl",
    h4: "text-2xl",
    h5: "text-xl",
    h6: "text-lg"
}

const Heading: FC<headingProps> = (props) => {
    const { as, children } = props;

    const Tag = as in headingVariant ? as : 'h3';
    const className = `${headingVariant[Tag]} font-extrabold dark:text-black mb-3`;

    return (
        <Tag className={className}>{children}</Tag>
    )
}

export default Heading