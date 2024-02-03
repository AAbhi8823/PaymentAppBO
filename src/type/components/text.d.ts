import { ReactNode } from "react";

type textVariant = "p" | "strong" | "em" | "small" | "span" | "u";

interface textProps {
  as: textVariant;
  children: ReactNode;
  fontSize?: "sm" | "md" | "lg"
}
