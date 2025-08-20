import React from "react";

export type ButtonProps = {
  variant?: "primary" | "secundary" | "tertiary";
  link?: boolean;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

const ButtonOrLink = (props: ButtonProps) => {
  if (props.link) {
    return <a {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }
  return (
    <button {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
  );
};

const variantClassMap = {
  variant: {
    primary:
      "bg-gradient-to-r from-primary to-secundary transition-all hover:scale-105",
    secundary: "bg-primary transition-all hover:bg-primary/80",
    tertiary: "bg-white/20 border transition-all hover:bg-white/40",
  },
};

const Button = ({ variant = "primary", className, ...rest }: ButtonProps) => {
  return (
    <ButtonOrLink
      className={`cursor-pointer text-white font-bold py-3 px-4 rounded-md ${variantClassMap.variant[variant]} ${className}`}
      {...rest}
    />
  );
};

export default Button;
