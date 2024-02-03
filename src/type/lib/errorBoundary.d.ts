import { ReactNode, ComponentType } from "react";
import { FallbackProps } from "react-error-boundary";

interface errorBoundaryProps {
  children: ReactNode;
  fallbackComponent?: ComponentType<FallbackProps>;
}
