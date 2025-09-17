import { cn } from "../../../lib/utils";
import useUiStateStore from "../../../stores/ui-state.store";

export function EducaGridSection({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { viewEduca } = useUiStateStore();

  return (
    <div
      className={cn(
        "grid gap-4",
        viewEduca === "grid" && "gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {children}
    </div>
  );
}
