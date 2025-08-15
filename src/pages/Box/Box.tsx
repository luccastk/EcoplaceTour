import type React from "react";
import { box, type BoxVariants } from "./box.css";

type BoxProps = React.PropsWithChildren & BoxVariants;

export function Box({ elevation, children }: BoxProps) {
  return <div className={box({ elevation })}>{children}</div>;
}
