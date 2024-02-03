import { Dispatch, SetStateAction } from "react";

interface editModelProps {
  isHidden?: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
  editItem: any;
  refetch: () => void;
  tableData: Array<T>;
}

interface fieldValue {
  isActive?: boolean | null | undefined;
  newUpi: string;
}

export {editModelProps, fieldValue };
