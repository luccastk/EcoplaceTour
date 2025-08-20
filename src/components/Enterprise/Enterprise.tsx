import { MdArrowForwardIos } from "react-icons/md";
import { container, sectionHeader } from "../../theme/global.css";
import { Link } from "../Link/Link";
import { Typography } from "../Typography";
import { background } from "./enterprise.css";

export function Enterprise() {
  return (
    <section className={background}>
      <div className={container}>
        <div className={sectionHeader}>
          <Typography
            tag="h2"
            variant="h2"
            w="bold"
            align="center"
            color="white"
          >
            Empresas Parceiras
          </Typography>
          <Typography tag="h3" variant="h4" color="white" align="center">
            Explore as oportunidades de visitas técnicas nas maiores e mais
            inovadoras empresas do Brasil. Cada experiência é cuidadosamente
            planejada para maximizar o aprendizado.
          </Typography>
        </div>
        <Link
          icon={<MdArrowForwardIos />}
          variant="green"
          path={"/enterprises"}
        >
          VER TODOS
        </Link>
      </div>
    </section>
  );
}
