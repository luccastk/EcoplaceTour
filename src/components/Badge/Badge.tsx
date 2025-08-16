import { badge, type BadgeVariants } from "./badge.css";

type BadgeProps = BadgeVariants & React.PropsWithChildren;

export function Badge({ variant, children }: BadgeProps) {
  return <div className={badge({ variant })}>{children}</div>;
}
