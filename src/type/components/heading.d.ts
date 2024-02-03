import { ReactNode } from "react";

type headingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface headingProps {
  children: ReactNode;
  as: headingVariant;
}
