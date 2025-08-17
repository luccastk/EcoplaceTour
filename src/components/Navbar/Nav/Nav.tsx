import { nav } from "./nav.css";

type HeaderNavProps = React.PropsWithChildren;

export function Nav({ children }: HeaderNavProps) {
  return <nav className={nav}>{children}</nav>;
}
