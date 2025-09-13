import { cn } from "../../lib/utils";
import type { LucideIcon } from "lucide-react";

interface ChipProps {
  label: string;
  icon: LucideIcon;
  className?: string;
}

function Chip({ label, icon: Icon, className }: Readonly<ChipProps>) {
  return (
    <div
      className={cn(
        "bg-accent/80 select-none hover:bg-accent group text-muted-foreground hover:text-foreground/80 text-sm transition-all duration-200 rounded-lg py-2 px-4 cursor-pointer flex items-center gap-2",
        className
      )}
    >
      <Icon className="size-4" />
      <p>{label}</p>
    </div>
  );
}

export { Chip };