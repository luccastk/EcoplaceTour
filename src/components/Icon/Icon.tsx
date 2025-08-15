import type React from "react";
import { icon, type IconVariants } from "./icon.css";

type IconProps = IconVariants & React.PropsWithChildren;

export function Icon({ small, large, children }: IconProps) {
  return <i className={icon({ small, large })}>{children}</i>;
}
