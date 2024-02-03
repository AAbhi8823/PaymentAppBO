import { ElementType } from "react";

interface routeList {
  path?: string;
  element: ElementType;
  isLayoutWrapperRequire: boolean;
}

interface elementProps {
  route: routeList;
}

 