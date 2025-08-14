import { HiArrowNarrowRight } from "react-icons/hi";
import { palette } from "../../theme/palettes";
import { gap, space } from "../../theme/spaces";
import { Button, ButtonIcon } from "../Button/Button";
import { Typography } from "../Typography/Typography";
import { IoBook } from "react-icons/io5";
import { radii } from "../../theme/radii";
import { hero } from "./hero.css";

export function Hero() {
  return (
    <section className={hero}>
      <div>
        <Typography tag="h1" variant="h1" w="bold" align="center">
          Visitas Técnicas que
          <span style={{ color: palette.warning }}> Transformam</span>
        </Typography>
        <Typography tag="h2" variant="h4" w="bold" align="center">
          Conectamos escolas às melhores empresas do país para experiências
          educacionais únicas e inspiradoras
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: gap.xs,
          }}
        >
          <ButtonIcon icon={<HiArrowNarrowRight />} direction="right">
            Agendar Visita
          </ButtonIcon>
          <Button variant="outline">Ver Empresas</Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: gap.sm,
            background: "rgba(255,255,255,0.2)",
            marginTop: space.sm,
            borderRadius: radii.md,
            padding: space.sm,
          }}
        >
          <IoBook size={"70px"} color={palette.warning} />
          <Typography variant="h4" tag="h3" w="bold">
            Educação Prática
          </Typography>
          <Typography variant="h4" tag="h3">
            Aprendizado real dentro das empresas
          </Typography>
        </div>{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: gap.sm,
            background: "rgba(255,255,255,0.2)",
            marginTop: space.sm,
            borderRadius: radii.md,
            padding: space.sm,
          }}
        >
          <IoBook size={"70px"} color={palette.warning} />
          <Typography variant="h4" tag="h3" w="bold">
            Educação Prática
          </Typography>
          <Typography variant="h4" tag="h3">
            Aprendizado real dentro das empresas
          </Typography>
        </div>{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: gap.sm,
            background: "rgba(255,255,255,0.2)",
            marginTop: space.sm,
            borderRadius: radii.md,
            padding: space.sm,
          }}
        >
          <IoBook size={"70px"} color={palette.warning} />
          <Typography variant="h4" tag="h3" w="bold">
            Educação Prática
          </Typography>
          <Typography variant="h4" tag="h3">
            Aprendizado real dentro das empresas
          </Typography>
        </div>
      </div>
    </section>
  );
}
