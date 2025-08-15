import clsx from "clsx";
import type React from "react";
import type { ReactNode } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { content, link, type LinkVariant } from "./link.css";

type LinkProps = {
  icon?: ReactNode;
  showActive?: boolean;
  path: string;
  classNames?: string;
} & LinkVariant &
  React.PropsWithChildren;

export function Link({
  icon,
  showActive,
  path,
  variant,
  classNames,
  children,
}: LinkProps) {
  const navigator = useLocation();

  const linkActive = navigator.pathname === path && showActive;
  const iconStyle = icon && content;

  return (
    <RouterLink
      to={path}
      className={clsx(
        link({ variant, active: linkActive }),
        iconStyle,
        classNames
      )}
    >
      {children}
      {icon}
    </RouterLink>
  );
}
