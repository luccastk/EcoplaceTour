import { BsArrowRightShort } from "react-icons/bs";
import { FiArrowDownRight } from "react-icons/fi";
import { IoBookOutline, IoPeopleSharp } from "react-icons/io5";
import { palette } from "../theme/palettes";
import type { CardHero } from "../types/card-hero";
import { Link } from "./Link/Link";
import { Typography } from "./Typography/Typography";

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
    <section className="pt-[86px] bg-[url(./images/hero-image.jpg)] bg-cover bg-no-repeat bg-center">
      <div className="max-w-5xl mx-auto p-5 md:py-14">
        <Typography element="h1" variant="white" size="title1" weight="bold">
          Visitas Técnicas que <span className="text-warning">Transformam</span>
        </Typography>
        <Typography element="h2" variant="white" size="xl" weight="bold">
          Conectamos escolas às melhores empresas do país para experiências
          educacionais únicas e inspiradoras
        </Typography>
        <div className="flex flex-col items-center space-y-2 my-4">
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
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center space-y-3 bg-background/20 rounded-md p-6"
            >
              {card.icon}
              <Typography
                element="h3"
                variant="white"
                size="title3"
                weight="bold"
              >
                {card.title}
              </Typography>
              <Typography
                element="p"
                variant="white"
                size="md"
                className="text-center"
              >
                {card.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
