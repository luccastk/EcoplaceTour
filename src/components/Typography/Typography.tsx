import { typographyStyle, type TypographyVariants } from "./typography.css";

type TagVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type TypographyProps = {
  tag?: TagVariants;
} & React.PropsWithChildren &
  TypographyVariants;

export function Typography({
  tag,
  variant,
  color,
  w,
  align,
  children,
}: TypographyProps) {
  const Component = tag || "p";
  return (
    <Component className={typographyStyle({ variant, color, w, align })}>
      {children}
    </Component>
  );
}
