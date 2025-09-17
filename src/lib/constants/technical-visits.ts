import Map from "../../assets/images/map.webp";

export interface TechnicalVisit {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  price: string;
  date: string;
  image: string;
  description: string;
  spots: number;
  availableSpots: number;
  category: string;
}

export const TechnicalVisitItems: TechnicalVisit[] = [
  {
    id: 1,
    title: "Indústria 4.0",
    company: "Bosch Brasil",
    location: "São Paulo, SP",
    duration: "4 horas",
    price: "R$ 350",
    date: "20 Mar",
    image: Map,
    description:
      "Visite a fábrica mais avançada do Brasil em automação industrial e IoT.",
    spots: 20,
    availableSpots: 5,
    category: "Tecnologia",
  },
  {
    id: 2,
    title: "Sustentabilidade Empresarial",
    company: "Natura",
    location: "Cajamar, SP",
    duration: "3 horas",
    price: "R$ 280",
    date: "25 Mar",
    image: Map,
    description: "Conheça práticas sustentáveis e economia circular.",
    spots: 25,
    availableSpots: 12,
    category: "Sustentabilidade",
  },
  {
    id: 3,
    title: "Inovação em Agronegócio",
    company: "Embrapa",
    location: "Brasília, DF",
    duration: "6 horas",
    price: "R$ 420",
    date: "2 Abr",
    image: Map,
    description:
      "Explore laboratórios de pesquisa e inovação em agricultura de precisão.",
    spots: 15,
    availableSpots: 8,
    category: "Agronegócio",
  },
];
