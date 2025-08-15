import { GiHamburgerMenu } from "react-icons/gi";
import { container } from "../../theme/global.css";
import type { MenuItem } from "../../types/menu-item";
import { Link } from "../Link/Link";
import { Logo } from "../Logo/Logo";
import { actionBtn, content, header, toggleBtn } from "./header.css";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { HeaderNav } from "./HeaderNav/HeaderNav";
import { useState } from "react";

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

export function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={header}>
      <div className={container}>
        <div className={content}>
          <Logo />
          <HeaderNav>
            {linksItems.map((item) => (
              <Link key={item.id} path={item.path} variant="link" showActive>
                {item.label}
              </Link>
            ))}
          </HeaderNav>
          <Link path="/badge" variant="gradient" classNames={actionBtn}>
            Solicitar Orçamento
          </Link>
          <GiHamburgerMenu
            size={"26px"}
            className={toggleBtn}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <HeaderMenu isOpen={isOpen}>
          {linksItems.map((item) => (
            <Link key={item.id} path={item.path} variant="link" showActive>
              {item.label}
            </Link>
          ))}
          <Link path="/badge" variant="gradient">
            Solicitar Orçamento
          </Link>
        </HeaderMenu>
      </div>
    </header>
  );
}
