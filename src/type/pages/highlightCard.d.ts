import {ReactElement} from "react";

interface HighlightCardProps {
  title: string;
  description: string;
  icon: ReactElement;
  count: number;
  type: "All" | "Active" | "Inactive";
}
