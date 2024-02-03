import { ReactNode } from "react";

interface modelProps {
  isHidden?: boolean;
  setIsHidden: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title?: string;
  refetch: () => void;
}
