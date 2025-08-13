import type { ReactNode } from "react";
import { typographyStyle, type TypographyVariants } from "./typography.css";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TypographyProps = {
  tag?: TagVariants;
  children: ReactNode;
} & TypographyVariants;

export function Typography({
  tag,
  variant,
  disabled,
  w,
  align,
  children,
}: TypographyProps) {
  const Component = tag || "p";
  return (
    <Component className={typographyStyle({ variant, disabled, w, align })}>
      {children}
    </Component>
  );
}
