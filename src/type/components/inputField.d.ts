import { Control } from "react-hook-form";
import { ChangeEvent } from "react";

interface inputFieldProps extends commonFormProps {
  type: "text" | "email" | "password" | "number" | "date";
  value?: string;
  placeholder?: string;
  className?: string;
  control: Control<T>;
  isErrorVisible?: boolean;
  onChangeEvents?: (event: ChangeEvent<HTMLInputElement>) => void | undefined;
  isShowHideRequired?: boolean;
}
