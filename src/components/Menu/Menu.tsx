import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { links } from "../../types/menu-item";
import { Button } from "../Button/Button";
import { active, container, linkStyle, menu, nav } from "./menu.css";
import type React from "react";

export function Menu({ ref }: React.ComponentPropsWithRef<"div">) {
  const location = useLocation();

  return (
    <div className={menu} ref={ref}>
      <div className={container}>
        <nav className={nav}>
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={clsx(
                linkStyle,
                location.pathname === link.path ? active : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button>
          <Link to={"/badge"}>Solicitar Orçamento</Link>
        </Button>
      </div>
    </div>
  );
}
