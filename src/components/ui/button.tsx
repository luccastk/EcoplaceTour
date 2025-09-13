import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-secundary text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-primary text-white shadow-sm hover:bg-primary/90 hover:shadow-md active:scale-[0.98]",
        outline:
          "border border-border bg-background text-text shadow-sm hover:bg-background/80 hover:border-primary/50 active:scale-[0.98]",
        ghost:
          "text-text hover:bg-background/80 hover:text-primary active:scale-[0.98]",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600 hover:shadow-md active:scale-[0.98]",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
