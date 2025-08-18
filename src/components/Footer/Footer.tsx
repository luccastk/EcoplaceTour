import { FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaSquareFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { container } from "../../theme/global.css";
import { gap } from "../../theme/spaces";
import { Logo } from "../Logo/Logo";
import { Typography } from "../Typography/Typography";
import { footer } from "./footer.css";

export function Footer() {
  return (
    <footer className={footer}>
      <div className={container}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: gap.xs }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: gap.xs }}>
              <Logo />
              <Typography tag="span" variant="h3" w="bold" color="white">
                EcoPlaceTour
              </Typography>
            </div>
            <Typography color="white">
              Conectando educação e indústria através de experiências
              transformadoras que preparam os estudantes para o futuro.
            </Typography>
            <div style={{ display: "flex", alignItems: "center", gap: gap.sm }}>
              <FaInstagram color="white" />
              <FaSquareFacebook color="white" />
              <FaLinkedinIn color="white" />
            </div>
          </div>
          <div className="">
            <Typography>Serviços</Typography>
            <div
              style={{
                marginTop: gap.sm,
                display: "flex",
                flexDirection: "column",
                gap: gap.xs,
              }}
            >
              <Typography>Visitas Técnicas</Typography>
              <Typography>Consultoria Educacional</Typography>
              <Typography>Eventos Corporativos</Typography>
              <Typography>Workshops</Typography>
            </div>
          </div>
          <div>
            <Typography>Empresas</Typography>
            <div
              style={{
                marginTop: gap.sm,
                display: "flex",
                flexDirection: "column",
                gap: gap.xs,
              }}
            >
              <Typography>Todas as Empresas</Typography>
              <Typography>Indústria</Typography>
              <Typography>Tecnologia</Typography>
              <Typography>Sustentabilidade</Typography>
            </div>
          </div>
          <div>
            <Typography>Contato</Typography>
            <div
              style={{
                marginTop: gap.sm,
                display: "flex",
                flexDirection: "column",
                gap: gap.xs,
              }}
            >
              <div>
                <FaPhoneAlt />
                <Typography>Visitas Técnicas</Typography>
              </div>
              <div>
                <MdEmail />
                <Typography>Visitas Técnicas</Typography>
              </div>
              <div>
                <FaLocationDot />
                <Typography>Visitas Técnicas</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
