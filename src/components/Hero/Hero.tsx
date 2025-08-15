import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { IoBookOutline, IoPeopleSharp } from "react-icons/io5";
import ImgHero from "../../assets/imgs/hero-image.jpg";
import { container } from "../../theme/global.css";
import { palette } from "../../theme/palettes";
import { radii } from "../../theme/radii";
import { gap, space } from "../../theme/spaces";
import type { CardHero } from "../../types/card-hero";
import { Button, ButtonIcon } from "../Button/Button";
import { Stack } from "../Stack/Stack";
import { Typography } from "../Typography/Typography";

const cards: CardHero[] = [
  {
    id: 0,
    icon: <IoBookOutline color={palette.warning} size={"70px"} />,
    title: "Educação Prática",
    subtitle: "Aprendizado real dentro das empresas",
  },
  {
    id: 1,
    icon: <IoPeopleSharp color={palette.warning} size={"70px"} />,
    title: "Networking",
    subtitle: "Conexões valiosas para o futuro",
  },
  {
    id: 2,
    icon: <FiArrowDownRight color={palette.warning} size={"70px"} />,
    title: "Inspiração",
    subtitle: "Motivação para carreiras futuras",
  },
];

export function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${ImgHero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className={container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: gap.sm,
          }}
        >
          <Typography
            tag="h1"
            variant="h1"
            w="bold"
            align="center"
            color="white"
          >
            Visitas Técnicas que{" "}
            <span style={{ color: palette.warning }}>Transformam</span>
          </Typography>
          <Typography tag="h2" variant="h4" align="center" color="white">
            Conectamos escolas às melhores empresas do país para experiências
            educacionais únicas e inspiradoras
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: gap.xs,
            marginTop: space.md,
          }}
        >
          <ButtonIcon
            as="a"
            icon={<BsArrowRightShort />}
            direction="right"
            href="/badge"
          >
            Agendar Visita
          </ButtonIcon>
          <Button as="a" variant="outline" href="/enterprises">
            Ver Empresas
          </Button>
        </div>
        <Stack>
          {cards.map((card) => (
            <div
              key={card.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: gap.sm,
                padding: space.sm,
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: radii.md,
              }}
            >
              {card.icon}
              <Typography tag="h3" variant="h3" w="bold" color="white">
                {card.title}
              </Typography>
              <Typography tag="p" variant="h4" color="white" align="center">
                {card.subtitle}
              </Typography>
            </div>
          ))}
        </Stack>
      </div>
    </section>
  );
}
