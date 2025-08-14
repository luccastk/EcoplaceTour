import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { IoBookOutline, IoPeopleSharp } from "react-icons/io5";
import Hero from "../../assets/imgs/hero-image.jpg";
import { Button, ButtonIcon } from "../../components/Button/Button";
import { Typography } from "../../components/Typography/Typography";
import { palette } from "../../theme/palettes";
import { gap, space } from "../../theme/spaces";
import type { CardHero } from "../../types/card-hero";
import { Box } from "../Box/Box";

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

export function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(${Hero})`,
        backgroundPosition: "center",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div
        style={{
          padding: `${space.xl} 140px`,
        }}
      >
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
          <ButtonIcon icon={<BsArrowRightShort />} direction="right">
            Agendar Visita
          </ButtonIcon>
          <Button variant="outline">Ver Empresas</Button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: gap.sm,
            marginTop: space.md,
          }}
        >
          {cards.map((card) => (
            <Box key={card.id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: gap.sm,
                  padding: space.sm,
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
            </Box>
          ))}
        </div>
      </div>
    </section>
  );
}
