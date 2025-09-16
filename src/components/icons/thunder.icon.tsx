import { cn } from "../../lib/utils";

export function ThunderIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      className={cn("w-10 h-10 text-primary", className)}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}
