import { Link } from "react-router-dom";
import { gap } from "../../theme/spaces";
import { Button } from "../Button/Button";

const links = {
  id: 1,
  path: "/",
  label: "Home",
};

export function Menu() {
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: gap.md,
        }}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>Sobre</Link>
        <Link to={"/enterprises"}>Empresas</Link>
        <Link to={"/contact"}>Contato</Link>
        <Link to={"/partnership"}>Parceria</Link>
        <Button label={"Solicitar Orçamento"} />
      </nav>
    </div>
  );
}
