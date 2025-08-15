import { palette } from "../../../theme/palettes";
import { Typography } from "../../Typography/Typography";
import { title } from "./heroTitle.css";

export function HeroTitle() {
  return (
    <div className={title}>
      <Typography tag="h1" variant="h1" w="bold" align="center" color="white">
        Visitas Técnicas que{" "}
        <span style={{ color: palette.warning }}>Transformam</span>
      </Typography>
      <div>
        <Typography
          tag="h2"
          variant="h4"
          w="semiBold"
          align="center"
          color="white"
        >
          Conectamos escolas às melhores empresas do país para experiências
          educacionais únicas e inspiradoras
        </Typography>
      </div>
    </div>
  );
}
