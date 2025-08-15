import { nav } from "./headerNav.css";

type HeaderNavProps = React.PropsWithChildren;

export function HeaderNav({ children }: HeaderNavProps) {
  return <nav className={nav}>{children}</nav>;
}
