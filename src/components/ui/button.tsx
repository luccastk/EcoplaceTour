import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "secundary" | "outline" | "ghost" | "link";
  link?: boolean;
  asChild?: boolean;
}

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:opacity-50 disabled:pointer-events-none [&_svg]:pointer-events-none shrink-0 [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:border-ringn focus-visible:ring-1 focus-visible:ring-ring arial-invalid:ring-red-500",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-secundary transition-all hover:scale-105",
        secundary: "bg-primary transition-all hover:bg-primary/80",
        outline: "bg-white/20 border transition-all hover:bg-white/40",
        ghost: "bg-white/20 border transition-all hover:bg-white/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Button = ({
  variant = "default",
  className,
  asChild = false,
  ...rest
}: Readonly<ButtonProps>) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant }), className)} {...rest} />
  );
};

export { Button };
