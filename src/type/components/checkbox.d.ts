import { Control } from "react-hook-form";
interface checkboxProps extends commonFormProps {
  value?: string;
  isChecked?: boolean;
  control: Control<T>;
}
