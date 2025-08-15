import { typographyStyle, type TypographyVariants } from "./typography.css";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TypographyProps = {
  tag?: TagVariants;
} & Omit<React.PropsWithChildren, TagVariants | "tag"> &
  TypographyVariants;

export function Typography({
  tag,
  variant,
  color,
  w,
  align,
  children,
  ...rest
}: TypographyProps) {
  const Component = tag || "p";
  return (
    <Component
      className={typographyStyle({ variant, color, w, align })}
      {...rest}
    >
      {children}
    </Component>
  );
}
