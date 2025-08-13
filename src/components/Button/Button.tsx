import type { ReactNode } from "react";
import { buttonStyle, buttonIcon, type ButtonVariants } from "./button.css";
import clsx from "clsx";

type Direction = "top" | "right" | "bottom" | "left";

type ButtonProps = {
  label: string;
} & ButtonVariants;

type ButtonIconProps = {
  icon: ReactNode;
  direction?: Exclude<Direction, "top" | "bottom">;
} & ButtonProps;

export function Button({ label, variant }: ButtonProps) {
  return <button className={buttonStyle({ variant })}>{label}</button>;
}

export function ButtonIcon({
  icon,
  label,
  variant,
  direction = "left",
}: ButtonIconProps) {
  return (
    <button className={clsx(buttonIcon, buttonStyle({ variant }))}>
      {direction === "left" && icon}
      {label}
      {direction === "right" && icon}
    </button>
  );
}
