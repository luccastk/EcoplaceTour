import tourismLearning from "../../assets/images/tourism-learning.jpg";
import tourismPassport from "../../assets/images/tourism-passport.jpg";
import tourismTrip from "../../assets/images/tourism-trip.jpg";

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
    image: tourismLearning,
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
    image: tourismPassport,
    description:
      "Conheça práticas sustentáveis e economia circular.",
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
    image: tourismTrip,
    description:
      "Explore laboratórios de pesquisa e inovação em agricultura de precisão.",
    spots: 15,
    availableSpots: 8,
    category: "Agronegócio",
  },
  {
    id: 4,
    title: "Fintech e Digital Banking",
    company: "Nubank",
    location: "São Paulo, SP",
    duration: "3 horas",
    price: "R$ 320",
    date: "8 Abr",
    image: tourismLearning,
    description:
      "Visite o centro de inovação da maior fintech da América Latina.",
    spots: 18,
    availableSpots: 3,
    category: "Fintech",
  },
  {
    id: 5,
    title: "E-commerce e Logística",
    company: "Mercado Livre",
    location: "Osasco, SP",
    duration: "4 horas",
    price: "R$ 380",
    date: "15 Abr",
    image: tourismPassport,
    description:
      "Conheça o centro de distribuição automatizado e tecnologias de última milha.",
    spots: 22,
    availableSpots: 15,
    category: "E-commerce",
  },
  {
    id: 6,
    title: "Telecomunicações 5G",
    company: "Vivo",
    location: "Rio de Janeiro, RJ",
    duration: "5 horas",
    price: "R$ 450",
    date: "22 Abr",
    image: tourismTrip,
    description:
      "Explore laboratórios de 5G e infraestrutura de telecomunicações de nova geração.",
    spots: 16,
    availableSpots: 6,
    category: "Telecomunicações",
  },
];
