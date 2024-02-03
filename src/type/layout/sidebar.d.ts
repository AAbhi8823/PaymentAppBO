import { ReactNode } from "react";

interface childNavList {
  id: number;
  isActive?: boolean;
  to?: string | null | undefined;
  name: string;
}

interface navList extends childNavList {
  icon: ReactNode;
  child: null | Array<childNavList>;
}
