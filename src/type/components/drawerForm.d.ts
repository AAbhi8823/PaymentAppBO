import { SetStateAction, Dispatch, ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface drawerFormProps {
  isDrawerClose: boolean;
  setIsDrawerClose: Dispatch<SetStateAction<boolean>>;
  formId: string;
  children: ReactNode;
  drawerHeading?: string;
  handleUpdateStatus: SubmitHandler<FieldValues>;
  isStatusPending?: boolean;
  isEdit?: boolean;
}
