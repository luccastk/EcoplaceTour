import tourismLearning from "../../assets/images/tourism-learning.jpg";
import tourismPassport from "../../assets/images/tourism-passport.jpg";
import tourismTrip from "../../assets/images/tourism-trip.jpg";

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
    image: tourismLearning,
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
    image: tourismPassport,
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
    image: tourismTrip,
    description:
      "Imersão completa no ecossistema de inovação e tecnologia de Santa Catarina.",
    spots: 15,
    availableSpots: 3,
  },
  {
    id: 4,
    title: "Tour Empresarial - Agronegócio",
    destination: "Campinas, SP",
    duration: "2 dias",
    price: "R$ 650",
    date: "12-13 Abr",
    image: tourismLearning,
    description:
      "Visite fazendas tecnológicas e centros de pesquisa em agronegócio.",
    spots: 30,
    availableSpots: 18,
  },
  {
    id: 5,
    title: "Viagem de Networking - Fintech",
    destination: "Rio de Janeiro, RJ",
    duration: "3 dias",
    price: "R$ 1.100",
    date: "19-21 Abr",
    image: tourismPassport,
    description:
      "Conecte-se com líderes do setor financeiro e conheça startups inovadoras.",
    spots: 18,
    availableSpots: 7,
  },
  {
    id: 6,
    title: "Expedição Cultural e Técnica",
    destination: "Salvador, BA",
    duration: "4 dias",
    price: "R$ 980",
    date: "26-29 Abr",
    image: tourismTrip,
    description:
      "Combine cultura baiana com visitas técnicas em empresas locais.",
    spots: 22,
    availableSpots: 14,
  },
];
