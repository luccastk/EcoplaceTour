import type React from "react";

export type AllowedTags = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";

export type TypographyProps = {
  element?: AllowedTags;
  variant?: "primary" | "secundary" | "tertiary" | "white";
  size?: "xs" | "sm" | "md" | "xl" | "title1" | "title2" | "title3";
  weight?: "regular" | "semibold" | "bold";
} & React.ComponentProps<"p">;

const variantClassMap = {
  variant: {
    primary: "text-text",
    secundary: "text-border",
    tertiary: "text-florest",
    white: "text-white",
  },
  size: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    xl: "text-xl",
    title1: "text-txl",
    title2: "text-tlg",
    title3: "text-tmd",
  },
  weight: {
    regular: "font-regular",
    semibold: "font-semibold",
    bold: "font-bold",
  },
};

export function Typography({
  element,
  variant = "primary",
  size = "md",
  weight = "regular",
  className,
  ...rest
}: TypographyProps) {
  const Component = element || "p";
  return (
    <Component
      className={`font-primary ${variantClassMap.variant[variant]} ${variantClassMap.size[size]} ${variantClassMap.weight[weight]} ${className}`}
      {...rest}
    />
  );
}
