import * as TooltipPrimitive from "@radix-ui/react-tooltip";

function TooltipProvider({
  ...props
}: Readonly<React.ComponentProps<typeof TooltipPrimitive.Provider>>) {
  return <TooltipPrimitive.Provider {...props} />;
}

function TooltipTrigger({
  ...props
}: Readonly<React.ComponentProps<typeof TooltipPrimitive.TooltipTrigger>>) {
  return <TooltipPrimitive.TooltipTrigger {...props} />;
}

function TooltipContent({
  ...props
}: Readonly<React.ComponentProps<typeof TooltipPrimitive.TooltipContent>>) {
  return <TooltipPrimitive.TooltipContent {...props} />;
}

export { TooltipProvider, TooltipTrigger, TooltipContent };
