import type React from "react";
import { head, type CardHeadVariants } from "./cardHead.css";

type CardHeadProps = CardHeadVariants & React.PropsWithChildren;

export function CardHead({ align, justify, children }: CardHeadProps) {
  return <div className={head({ align, justify })}>{children}</div>;
}
