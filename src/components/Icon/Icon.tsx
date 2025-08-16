import type React from "react";
import { icon, type IconVariants } from "./icon.css";

type IconProps = IconVariants & React.PropsWithChildren;

export function Icon({ size, children }: IconProps) {
  return <i className={icon({ size })}>{children}</i>;
}
