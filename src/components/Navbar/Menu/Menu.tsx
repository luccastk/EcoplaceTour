import clsx from "clsx";
import type React from "react";
import { dropdown, menu, open } from "./menu.css";

type HeaderMenuProps = { isOpen: boolean } & React.PropsWithChildren;

export function Menu({ isOpen, children }: HeaderMenuProps) {
  return (
    <div className={clsx(dropdown, isOpen && open)}>
      <nav className={menu}>{children}</nav>
    </div>
  );
}
