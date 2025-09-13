import { MenuIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Empresas", to: "/empresas" },
  { label: "Contato", to: "/contato" },
  { label: "Parcerias", to: "/parcerias" },
];

function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 mx-auto flex items-center justify-between py-4 px-8 transition-all duration-200",
        isScrolled && "bg-florest/10"
      )}
    >
      <img src={logo} alt="Logo" className="w-15 h-15" />

      <nav aria-label="Navbar" className="hidden md:block">
        <ul className="flex items-center justify-center gap-8 min-h-[2.5rem]">
          {links.map((link) => {
            const isActive = location.pathname === link.to;

            return (
              <li key={link.label}>
                <Link
                  aria-label={link.label}
                  to={link.to}
                  className={cn(
                    "relative transition-colors duration-200 group block px-1",
                    isActive ? "text-primary" : "text-text hover:text-primary"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secundary transition-all duration-200",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="items-center gap-4 hidden md:flex">
        <Button aria-label="Contato" variant="outline">
          Contato
        </Button>
        <Button aria-label="Entrar" variant="default">
          Entrar
        </Button>
      </div>

      <Button aria-label="Menu" variant="ghost" className="md:hidden">
        <MenuIcon className="h-6 w-6" />
      </Button>
    </header>
  );
}

export { Navbar };
