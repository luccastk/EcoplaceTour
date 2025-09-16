import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface ChipProps {
  label: string;
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

function Chip({ label, icon: Icon, className, onClick }: Readonly<ChipProps>) {
  return (
    <div
      className={cn(
        "bg-accent/80 select-none hover:bg-accent group text-muted-foreground hover:text-foreground/80 text-sm transition-all duration-200 rounded-lg py-1 px-3 cursor-pointer flex items-center gap-2",
        className
      )}
    >
      {Icon && <Icon className="size-4 text-primary" onClick={onClick} />}
      <p className="text-sm">{label}</p>
    </div>
  );
}

export { Chip };
