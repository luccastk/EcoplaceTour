import { MdArrowForwardIos } from "react-icons/md";
import { container } from "../../theme/global.css";
import { Link } from "../Link/Link";
import { SectionHead } from "../SectionHead/SectionHead";
import { enterpriseContainer } from "./enterprise.css";

export function Enterprise() {
  return (
    <section className={enterpriseContainer}>
      <div className={container}>
        <SectionHead
          title={"Empresas Parceiras"}
          subtitle={
            "Explore as oportunidades de visitas técnicas nas maiores e mais inovadoras empresas do Brasil. Cada experiência é cuidadosamente planejada para maximizar o aprendizado."
          }
          white
        />
      </div>
      <Link icon={<MdArrowForwardIos />} variant="green" path={"/enterprises"}>
        VER TODOS
      </Link>
    </section>
  );
}
