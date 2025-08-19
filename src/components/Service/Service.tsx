import { FaSchool } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { palette } from "../../theme/palettes";
import type { CardService } from "../../types/card-service";
import { Card } from "../Card/Card";
import { Typography } from "../Typography/Typography";

const cards: CardService[] = [
  {
    id: 0,
    icon: <IoSchoolOutline size={"70px"} color={palette.primary} />,
    title: "Experiências Educacionais",
    description:
      "Visitas técnicas planejadas por especialistas em educação para maximizar o aprendizado prático dos estudantes.",
    tags: [
      {
        id: 0,
        icon: <IoMdCheckmarkCircleOutline color={palette.primary} />,
        label: "Roteiros personalizados",
      },
      {
        id: 1,
        icon: <IoMdCheckmarkCircleOutline color={palette.primary} />,
        label: "Material didático",
      },
      {
        id: 2,
        icon: <IoMdCheckmarkCircleOutline color={palette.primary} />,
        label: "Guias especializados",
      },
    ],
  },
  {
    id: 1,
    icon: <FaSchool size={"70px"} color={palette.primary} />,
    title: "Visita Pedagógica",
    description:
      "Experiência educativa guiada, conectando teoria e prática de forma dinâmica e organizada.",
    tags: [
      {
        id: 0,
        icon: <IoMdCheckmarkCircleOutline color={palette.primary} />,
        label: "Temas adaptados",
      },
      {
        id: 1,
        icon: <IoMdCheckmarkCircleOutline color={palette.primary} />,
        label: "Experiências práticas",
      },
      {
        id: 2,
        icon: <IoMdCheckmarkCircleOutline color={palette.primary} />,
        label: "Acompanhamento",
      },
    ],
  },
  {
    id: 2,
    icon: <FiShield size={"70px"} color={palette.primary} />,
    title: "Segurança Garantida",
    description:
      "Todos os procedimentos de segurança são rigorosamente seguidos, com equipamentos de proteção e acompanhamento profissional.",
    tags: [
      {
        id: 0,
        icon: <IoMdCheckmarkCircleOutline color={palette.primary} />,
        label: "EPIs fornecidos",
      },
      {
        id: 1,
        icon: <IoMdCheckmarkCircleOutline color={palette.primary} />,
        label: "Seguro total",
      },
      {
        id: 2,
        icon: <IoMdCheckmarkCircleOutline color={palette.primary} />,
        label: "Protocolos de segurança",
      },
    ],
  },
];

export function Service() {
  return (
    <section className="bg-background">
      <div className="max-w-5xl mx-auto p-5 md:py-14">
        <div className="max-w-3xl mx-auto">
          <Typography
            element="h2"
            size="title2"
            weight="bold"
            className="text-center mb-4"
          >
            Nossos Serviços
          </Typography>
          <Typography
            element="p"
            variant="tertiary"
            size="xl"
            className="text-center"
          >
            Oferecemos experiências educacionais completas que conectam teoria e
            prática, proporcionando aos estudantes uma visão real do mercado de
            trabalho.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-8">
          {cards.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center space-y-4 py-5 px-6 rounded-md bg-gradient-to-tl from-primary/30 to-secundary"
            >
              {item.icon}
              <Typography
                element="h3"
                size="title3"
                weight="bold"
                className="text-center"
              >
                {item.title}
              </Typography>
              <Typography className="text-justify my-auto">
                {item.description}
              </Typography>
              <div className="flex flex-col ">
                {item.tags.map((tag) => (
                  <Card.Tag key={tag.id} icon={tag.icon} text={tag.label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
