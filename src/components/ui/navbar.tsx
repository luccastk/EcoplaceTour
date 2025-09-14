import { MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { cn } from "../../lib/utils";
import { Button } from "./button";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 0);
    });
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest("header")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 mx-auto flex items-center justify-between py-4 px-8 transition-all duration-200",
        isScrolled && "bg-florest"
      )}
    >
      <nav
        aria-label="Navbar"
        className="w-full flex flex-row items-center justify-between relative"
      >
        <div className="flex flex-row gap-24 items-center">
          <img src={logo} alt="Logo" className="w-20 h-20 shrink-0" />

          <ul className="hidden xl:flex items-center justify-center gap-4 min-h-[2.5rem]">
            {links.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <li key={link.label}>
                  <Link
                    aria-label={link.label}
                    to={link.to}
                    className={cn(
                      "relative transition-colors duration-200 group block px-1",
                      isScrolled ? "text-white" : "text-text"
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
        </div>

        <div className="items-center gap-4 hidden xl:flex">
          <Button aria-label="Contato" variant="outline">
            Viagens
          </Button>
          <Button aria-label="Entrar" variant="default">
            Solicitar Contato
          </Button>
        </div>

        <Button
          aria-label="Menu"
          variant="ghost"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden hover:bg-transparent"
        >
          {isMobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <MenuIcon className="size-6" />
          )}
        </Button>
      </nav>

      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[112px] bg-background z-40">
          <div className="h-full flex flex-col">
            <nav className="flex-1 px-8 py-6">
              <ul className="space-y-4">
                {links.map((link) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className={cn(
                          "block px-4 py-4 text-lg font-medium rounded-lg transition-colors duration-200",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-text hover:bg-background/80 hover:text-primary"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-4 px-8 py-6">
              <Button
                variant="outline"
                className="w-full justify-center py-4 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Viagens
              </Button>
              <Button
                variant="default"
                className="w-full justify-center py-4 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solicitar Contato
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export { Navbar };
