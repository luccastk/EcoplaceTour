import clsx from "clsx";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import type { MenuItem } from "../../types/menu-item";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import {
  actionBtn,
  dropdownMenu,
  header,
  link,
  linkActive,
  links,
  menu,
  navbar,
  open,
  toggleBtn,
} from "./navbar.css";

const linksItems: MenuItem[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
  },
  {
    id: 1,
    path: "/about",
    label: "Sobre",
  },
  {
    id: 2,
    path: "/enterprises",
    label: "Empresas",
  },
  {
    id: 3,
    path: "/contact",
    label: "Contato",
  },
  {
    id: 4,
    path: "/partnership",
    label: "Parceria",
  },
];

export function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const navigator = useLocation();

  return (
    <header className={header}>
      <div className={navbar}>
        <Logo />
        <nav className={links}>
          {linksItems.map((item) => (
            <Link key={item.id} to={item.path} className={link}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Button as="a" className={actionBtn} href="/badge">
          Solicitar Orçamento
        </Button>
        <GiHamburgerMenu
          className={toggleBtn}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        />
      </div>

      <div className={clsx(dropdownMenu, isOpen && open)}>
        <nav className={menu}>
          {linksItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={clsx(
                link,
                navigator.pathname === item.path ? linkActive : ""
              )}
            >
              {item.label}
            </Link>
          ))}

          <Button as="a" href="/badge">
            Solicitar Orçamento
          </Button>
        </nav>
      </div>
    </header>
  );
}
