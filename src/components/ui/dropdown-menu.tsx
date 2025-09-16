import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root modal={false} {...props} />;
}

function DropdownMenuTrigger({
  className,
  children,
  asChild,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  if (asChild) {
    return (
      <DropdownMenuPrimitive.Trigger
        className={className}
        asChild={asChild}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Trigger>
    );
  }

  return (
    <DropdownMenuPrimitive.Trigger
      className={cn(
        // Base styles seguindo o design system
        "flex h-10 w-full items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-sm shadow-xs transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
        "hover:border-primary/50",
        "text-text",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180" />
    </DropdownMenuPrimitive.Trigger>
  );
}

function DropdownMenuContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={cn(
          // Base styles para o dropdown
          "relative z-50 w-full min-w-[8rem] overflow-hidden rounded-lg border border-border bg-background shadow-lg",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item>) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        // Base styles para os itens
        "relative flex w-full cursor-default select-none items-center rounded-md py-2 px-3 text-sm outline-none",
        "focus:bg-primary/10 focus:text-primary",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "transition-colors duration-200",
        "text-text hover:bg-background/80",
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  );
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger>) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-md py-2 px-3 text-sm outline-none",
        "focus:bg-primary/10 focus:text-primary",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "transition-colors duration-200",
        "text-text hover:bg-background/80",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      className={cn(
        "relative z-50 w-full min-w-[8rem] overflow-hidden rounded-lg border border-border bg-background shadow-lg",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.SubContent>
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <div
      className={cn("mx-2 my-2 h-[1px] bg-gray-300", className)}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
