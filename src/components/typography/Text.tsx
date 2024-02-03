import { textProps } from "@app/type/components/text";
import { FC } from "react";

const fontSizeVariant = {
    sm: "",
    md: "text-md",
    lg: "text-lg",
}

const Text: FC<textProps> = (props) => {
    const { as = "p", fontSize = "sm", children } = props;

    const Tag = as;
    const className = `${fontSizeVariant[fontSize]} my-3`

    return (
        <Tag className={className}>{children}</Tag>
    )
}

export default Text