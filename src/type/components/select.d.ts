import { Control } from "react-hook-form";

interface selectProps extends commonFormProps {
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  options?: options[];
  control: Control<T>;
  isErrorVisible?: boolean;
}
