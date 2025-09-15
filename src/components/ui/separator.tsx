import * as SeparatorPrimitive from "@radix-ui/react-separator";
import React from "react";
import { cn } from "../../lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      className={cn(
        "shrink-0 bg-gray-500",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      orientation={orientation}
      decorative={decorative}
      {...props}
    />
  );
}

export { Separator };
