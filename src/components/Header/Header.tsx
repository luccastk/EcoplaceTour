import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import {
  buttonHeader,
  container,
  header,
  menubar,
  menuicon,
  menuitem,
} from "./header.css";
import { Button } from "../Button/Button";
import { links } from "../../types/menu-item";

export function Header() {
  const [isOpen, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        menuButton.current &&
        !menuButton.current.contains(event.target as Node) &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header
      className={header}
      style={{
        transform: isOpen || visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className={container}>
        <div className={menubar}>
          <Logo />

          <nav className={menuitem}>
            {links.map((item) => (
              <Link key={item.id} to={item.path}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Button ref={menuButton} className={buttonHeader}>
            Solicitar Orçamento
          </Button>

          <GiHamburgerMenu
            size={"30px"}
            className={menuicon}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
      </div>
      {isOpen && <Menu ref={menuRef} />}
    </header>
  );
}
