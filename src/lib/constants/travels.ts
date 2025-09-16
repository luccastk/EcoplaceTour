import Placeholder from "../../assets/images/placeholder.svg";

export interface Travel {
  id: number;
  title: string;
  destination: string;
  duration: string;
  price: string;
  date: string;
  image: string;
  description: string;
  spots: number;
  availableSpots: number;
}

export const TravelItems: Travel[] = [
  {
    id: 1,
    title: "Visita Técnica - Indústria 4.0",
    destination: "São Paulo, SP",
    duration: "3 dias",
    price: "R$ 890",
    date: "15-17 Mar",
    image: Placeholder,
    description:
      "Explore as tecnologias mais avançadas da Indústria 4.0 em empresas líderes do setor.",
    spots: 25,
    availableSpots: 8,
  },
  {
    id: 2,
    title: "Viagem de Estudo - Sustentabilidade",
    destination: "Curitiba, PR",
    duration: "4 dias",
    price: "R$ 1.250",
    date: "22-25 Mar",
    image: Placeholder,
    description:
      "Conheça projetos inovadores de sustentabilidade urbana e economia verde.",
    spots: 20,
    availableSpots: 12,
  },
  {
    id: 3,
    title: "Expedição Tecnológica",
    destination: "Florianópolis, SC",
    duration: "5 dias",
    price: "R$ 1.650",
    date: "5-9 Abr",
    image: Placeholder,
    description:
      "Imersão completa no ecossistema de inovação e tecnologia de Santa Catarina.",
    spots: 15,
    availableSpots: 3,
  },
];
