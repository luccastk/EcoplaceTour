import type React from "react";
import { stack } from "./Stack.css";

export function Stack({ children }: React.PropsWithChildren) {
  return <div className={stack}>{children}</div>;
}
