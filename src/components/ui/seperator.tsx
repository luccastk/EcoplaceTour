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
      className={cn(className)}
      orientation={orientation}
      decorative={decorative}
      {...props}
    />
  );
}

export { Separator };
