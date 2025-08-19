import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { IoBookOutline, IoPeopleSharp } from "react-icons/io5";
import { sectionHeader } from "../../theme/global.css";
import { palette } from "../../theme/palettes";
import type { CardHero } from "../../types/card-hero";
import { Card } from "../Card/Card";
import { Link } from "../Link/Link";
import { Stack } from "../Stack/Stack";
import { Typography } from "../Typography/Typography";
import { groupBtn } from "./hero.css";

const cards: CardHero[] = [
  {
    id: 0,
    icon: <IoBookOutline color={palette.warning} size={"70px"} />,
    title: "Educação Prática",
    description: "Aprendizado real dentro das empresas",
  },
  {
    id: 1,
    icon: <IoPeopleSharp color={palette.warning} size={"70px"} />,
    title: "Networking",
    description: "Conexões valiosas para o futuro",
  },
  {
    id: 2,
    icon: <FiArrowDownRight color={palette.warning} size={"70px"} />,
    title: "Inspiração",
    description: "Motivação para carreiras futuras",
  },
];

export function Hero() {
  return (
    <section className="bg-[url(./images/hero-image.jpg)] bg-cover bg-no-repeat bg-center">
      <div className="container mx-auto py-14">
        <div className={sectionHeader}>
          <Typography
            tag="h1"
            variant="h1"
            w="bold"
            color="white"
            align="center"
          >
            Visitas Técnicas que{" "}
            <span style={{ color: palette.warning }}>Transformam</span>
          </Typography>
          <Typography
            tag="h2"
            variant="h4"
            w="semiBold"
            color="white"
            align="center"
          >
            Conectamos escolas às melhores empresas do país para experiências
            educacionais únicas e inspiradoras
          </Typography>
        </div>
        <div className={groupBtn}>
          <Link
            icon={<BsArrowRightShort size={"1.125rem"} />}
            path="/badge"
            variant="gradient"
          >
            Agendar Visita
          </Link>
          <Link path="/enterprises" variant="outlined">
            Ver Empresas
          </Link>
        </div>
        <Stack>
          {cards.map((card) => (
            <Card key={card.id} variant="blur">
              {card.icon}
              <Card.Title color="white">{card.title}</Card.Title>
              <Card.Description color="white">
                {card.description}
              </Card.Description>
            </Card>
          ))}
        </Stack>
      </div>
    </section>
  );
}
