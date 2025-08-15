import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { IoBookOutline, IoPeopleSharp } from "react-icons/io5";
import { container } from "../../theme/global.css";
import { palette } from "../../theme/palettes";
import type { CardHero } from "../../types/card-hero";
import { Link } from "../Link/Link";
import { Stack } from "../Stack/Stack";
import { groupBtn, heroContainer } from "./hero.css";
import { HeroCard } from "./HeroCard/HeroCard";
import { HeroTitle } from "./HeroTitle/HeroTitle";

const cards: CardHero[] = [
  {
    id: 0,
    icon: <IoBookOutline color={palette.warning} />,
    title: "Educação Prática",
    description: "Aprendizado real dentro das empresas",
  },
  {
    id: 1,
    icon: <IoPeopleSharp color={palette.warning} />,
    title: "Networking",
    description: "Conexões valiosas para o futuro",
  },
  {
    id: 2,
    icon: <FiArrowDownRight color={palette.warning} />,
    title: "Inspiração",
    description: "Motivação para carreiras futuras",
  },
];

export function Hero() {
  return (
    <section className={heroContainer}>
      <div className={container}>
        <HeroTitle />
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
            <HeroCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </Stack>
      </div>
    </section>
  );
}
