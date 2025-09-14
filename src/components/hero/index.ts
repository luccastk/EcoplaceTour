import { HeroPassport } from "./hero-passport";
import { HeroPedagogy } from "./hero-pedagogy";
import { HeroTrip } from "./hero-trip";

export const HeroItems = [
  {
    id: 1,
    title: "Visitas Técnicas",
    headline: "Aprenda na Prática com Visitas Técnicas Exclusivas",
    subheadlines: [
      "Entre nos bastidores de empresas e instituições para ver como a teoria funciona no mundo real.",
      "Construa networking estratégico e leve insights aplicáveis diretamente para sua carreira.",
    ],
    cta: "Quero Participar",
    children: HeroPedagogy,
  },
  {
    id: 2,
    title: "Viagens",
    headline: "Viagens que Transformam Conhecimento em Experiência",
    subheadlines: [
      "Explore novos destinos enquanto se conecta com especialistas e profissionais do setor.",
      "Cresça pessoal e profissionalmente com experiências imersivas que unem aprendizado e cultura.",
    ],
    cta: "Ver Próximas Datas",
    children: HeroPassport,
  },
  {
    id: 3,
    title: "Objetivos",
    headline: "Objetivos Claros, Resultados Reais",
    subheadlines: [
      "Oferecemos vivências que unem teoria, prática e conexões, acelerando seu desenvolvimento.",
      "Cada viagem e visita técnica é desenhada para gerar valor direto para sua carreira.",
    ],
    cta: "Quero Alcançar Meus Objetivos",
    children: HeroTrip,
  },
];
