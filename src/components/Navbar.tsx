import type { MenuItem } from "../types/menu-item";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import Button from "./Button";

const links: MenuItem[] = [
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
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full bg-background/95 shadow-md z-50">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? "text-primary after:w-full"
                    : ""
                } font-primary relative hover:text-primary transition-all duration-300
         after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:w-0 hover:after:w-full`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button link href="/badge">
              Solicitar Orçamento
            </Button>
          </div>
          <div className="md:hidden">
            <GiHamburgerMenu
              className="h-8 w-8"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 p4 rounded-lg">
            <nav className="flex flex-col space-y-6">
              {links.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className={`px-4 py-2 rounded-md ${
                    location.pathname === link.path
                      ? "bg-primary text-white"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
