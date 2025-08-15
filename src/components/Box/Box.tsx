import type React from "react";
import { box, type BoxVariants } from "./box.css";

type BoxProps = BoxVariants & React.PropsWithChildren;

export function Box({ elevation, blur, border, children }: BoxProps) {
  return <div className={box({ elevation, blur, border })}>{children}</div>;
}
