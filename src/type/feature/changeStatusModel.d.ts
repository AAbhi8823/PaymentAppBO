import { Dispatch, ReactNode, SetStateAction } from "react";

interface changeStatusModelProps {
  title: string;
  isLoading?: boolean;
  formSubmitHandler: (fieldValue: fieldValue) => Promise<void>;
  isHidden?: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}
