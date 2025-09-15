import type React from "react";
import { cn } from "../../lib/utils";

const baseInput = [
  "file:text-foreground selection:bg-primary selection:text-primary dark:bg-input/30 border-border flex h-9 w-full min-w-0 rounded-md border bg-background px-3 py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  "focus-visible:ring-primary focus-visible:ring-2",
  "aria-invalid:ring-red-500 dark:aria-invalid:ring-destructive/40 aria-invalid:border-red-500",
];

const iconContainerStyles = "relative";
const iconStyles =
  "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground";
const iconInputStyles = "pl-10";

function Input({
  className,
  type,
  icon,
  ...rest
}: React.ComponentProps<"input"> & { icon?: React.ReactNode }) {
  if (icon) {
    return (
      <div className={iconContainerStyles}>
        <div className={iconStyles}>{icon}</div>
        <input
          type={type}
          className={cn(baseInput, iconInputStyles, className)}
          {...rest}
        />
      </div>
    );
  }

  return <input type={type} className={cn(baseInput, className)} {...rest} />;
}

export { Input };
