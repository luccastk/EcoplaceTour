import { FaSchool } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { container } from "../../theme/global.css";
import { palette } from "../../theme/palettes";
import { gap } from "../../theme/spaces";
import type { CardService } from "../../types/card-service";
import { Card } from "../Card/Card";
import { CardDescription } from "../Card/CardDescription/CardDescription";
import { CardTitle } from "../Card/CardTitle/CardTitle";
import { Stack } from "../Stack/Stack";
import { Typography } from "../Typography/Typography";
import { Icon } from "../Icon/Icon";

const cards: CardService[] = [
  {
    id: 0,
    icon: <IoSchoolOutline size={"90px"} color={palette.primary} />,
    title: "Experiências Educacionais",
    description:
      "Visitas técnicas planejadas por especialistas em educação para maximizar o aprendizado prático dos estudantes.",
    tags: [
      {
        id: 0,
        icon: (
          <IoMdCheckmarkCircleOutline size={"16px"} color={palette.primary} />
        ),
        label: "Roteiros personalizados",
      },
      {
        id: 1,
        icon: (
          <IoMdCheckmarkCircleOutline size={"16px"} color={palette.primary} />
        ),
        label: "Material didático",
      },
      {
        id: 2,
        icon: (
          <IoMdCheckmarkCircleOutline size={"16px"} color={palette.primary} />
        ),
        label: "Guias especializados",
      },
    ],
  },
  {
    id: 1,
    icon: <FaSchool size={"90px"} color={palette.primary} />,
    title: "Visita Pedagógica",
    description:
      "Experiência educativa guiada, conectando teoria e prática de forma dinâmica e organizada.",
    tags: [
      {
        id: 0,
        icon: (
          <IoMdCheckmarkCircleOutline size={"16px"} color={palette.primary} />
        ),
        label: "Temas adaptados",
      },
      {
        id: 1,
        icon: (
          <IoMdCheckmarkCircleOutline size={"16px"} color={palette.primary} />
        ),
        label: "Experiências práticas",
      },
      {
        id: 2,
        icon: (
          <IoMdCheckmarkCircleOutline size={"16px"} color={palette.primary} />
        ),
        label: "Acompanhamento",
      },
    ],
  },
  {
    id: 2,
    icon: <FiShield size={"90px"} color={palette.primary} />,
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
    <section style={{ background: palette.background }}>
      <div className={container}>
        <div style={{ display: "flex", flexDirection: "column", gap: gap.md }}>
          <Typography tag="h2" variant="h2" w="bold" align="center">
            Nossos Serviços
          </Typography>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Typography variant="h3" align="center" color="light-green">
              Oferecemos experiências educacionais completas que conectam teoria
              e prática, proporcionando aos estudantes uma visão real do mercado
              de trabalho.
            </Typography>
          </div>
        </div>
        <Stack>
          {cards.map((item) => (
            <Card key={item.id}>
              <Icon>{item.icon}</Icon>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: gap.md,
                  marginTop: "auto",
                }}
              >
                {item.tags.map((tag) => (
                  <div
                    key={tag.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: gap.xs,
                      marginTop: "auto",
                    }}
                  >
                    <div>{tag.icon}</div>
                    <Typography align="center">{tag.label}</Typography>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </Stack>
      </div>
    </section>
  );
}
