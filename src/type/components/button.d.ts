import { ReactNode, ButtonHTMLAttributes } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary" | "tertiary" | "rounded";
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  size?: "xSm" | "sm" | "md" | "lg";
  onClick?: () => void;
}