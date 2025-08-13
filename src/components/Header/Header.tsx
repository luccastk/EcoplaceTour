import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import { container, header, menubar, menuicon, menuitem } from "./header.css";

export function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={header}>
      <div className={container}>
        <div className={menubar}>
          <Logo />

          <nav className={menuitem}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>Sobre</Link>
            <Link to={"/enterprises"}>Empresas</Link>
            <Link to={"/contact"}>Contato</Link>
            <Link to={"/partnership"}>Parceria</Link>
          </nav>

          <GiHamburgerMenu
            size={"30px"}
            className={menuicon}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
      </div>
      {!isOpen && <Menu />}
    </header>
  );
}
