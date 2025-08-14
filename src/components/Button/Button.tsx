import type { ReactNode } from "react";
import { buttonStyle, buttonIcon, type ButtonVariants } from "./button.css";
import clsx from "clsx";

type Direction = "top" | "right" | "bottom" | "left";

type ButtonProps = {
  className?: string;
} & Omit<React.ComponentPropsWithRef<"button">, "className"> &
  ButtonVariants;

type ButtonIconProps = {
  icon: ReactNode;
  direction?: Exclude<Direction, "top" | "bottom">;
} & ButtonProps;

export function Button({ variant, className, ref, children }: ButtonProps) {
  return (
    <button ref={ref} className={clsx(buttonStyle({ variant }), className)}>
      {children}
    </button>
  );
}

export function ButtonIcon({
  icon,
  variant,
  direction = "left",
  className,
  children,
}: ButtonIconProps) {
  return (
    <button className={clsx(buttonIcon, buttonStyle({ variant }), className)}>
      {direction === "left" && icon}
      {children}
      {direction === "right" && icon}
    </button>
  );
}
