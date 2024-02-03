import { Dispatch, SetStateAction } from "react";

interface sideDrawerProps {
  isDrawerClose: boolean;
  setIsDrawerClose: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
  masterData: Type;
  isStatusPending?: boolean;
  formId: string;
}
