import clsx from "clsx";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { buttonIcon, buttonStyle, type ButtonVariants } from "./button.css";

type Direction = "top" | "right" | "bottom" | "left";

type ButtonBaseProps<T extends ElementType> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "className"> &
  ButtonVariants;

export function Button<T extends ElementType = "button">({
  as,
  variant,
  className,
  children,
  ...rest
}: ButtonBaseProps<T>) {
  const Component = as || "button";
  return (
    <Component className={clsx(buttonStyle({ variant }), className)} {...rest}>
      {children}
    </Component>
  );
}

type ButtonIconProps<T extends ElementType> = ButtonBaseProps<T> & {
  icon: ReactNode;
  direction?: Exclude<Direction, "top" | "bottom">;
};

export function ButtonIcon<T extends ElementType = "button">({
  as,
  icon,
  variant,
  direction = "left",
  className,
  children,
  ...rest
}: ButtonIconProps<T>) {
  const Component = as || "button";
  return (
    <Component
      className={clsx(buttonIcon, buttonStyle({ variant }), className)}
      {...rest}
    >
      {direction === "left" && icon}
      {children}
      {direction === "right" && icon}
    </Component>
  );
}
