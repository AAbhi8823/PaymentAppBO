import { Control } from "react-hook-form";

interface dateRangePickerProps {
  name: string;
  control: Control<T>;
  isErrorVisible?: boolean;
}
