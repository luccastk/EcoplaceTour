import {
  BookOpen,
  MessageSquareQuote,
  Plane,
  Star,
  Target,
  Users,
} from "lucide-react";
import { useScreenDetector } from "../../hooks/use-screen-detector";

const AboutItems = [
  {
    id: 1,
    title: "Visitas Técnicas",
    description: [
      "Aprenda na prática com experiências exclusivas.",
      "Conecte teoria e mercado em um só lugar.",
    ],
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Viagens",
    description: [
      "Transforme conhecimento em experiências reais.",
      "Explore novos destinos e oportunidades.",
    ],
    icon: Plane,
  },
  {
    id: 3,
    title: "Objetivos",
    description: [
      "Objetivos claros, resultados reais.",
      "Vivências desenhadas para acelerar sua carreira.",
    ],
    icon: Target,
  },
  {
    id: 4,
    title: "Comunidade",
    description: [
      "Faça parte de uma rede de estudantes e escolas.",
      "Construa conexões que abrem portas no futuro.",
    ],
    icon: Users,
  },
];

export function About() {
  const { isTablet, isDesktop } = useScreenDetector();

  return (
    <section className="pt-8 pb-16 md:py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sky/6 via-sage/8 to-primary/6"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-earth/3 to-transparent"></div>

      <div className="relative flex flex-col gap-8 items-center justify-center">
        <span className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-center">
          {!isTablet && <Star />}
          {isDesktop
            ? "Estudantes de todo o país já transformaram suas carreiras conosco."
            : "Estudantes de todo o país confiam em nós."}
        </span>

        <div className="flex flex-col gap-3 items-center justify-center">
          <h2 className="text-center font-semibold font-serif relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:w-28 after:-translate-x-1/2 after:h-[2px] after:bg-primary mb-6">
            Transforme o futuro dos seus estudantes
          </h2>
          <p className="w-[40ch] text-center text-muted-foreground">
            Seja a próxima escola a desbloquear o poder das experiências
            práticas. Resultados reais começam desde a primeira vivência.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mt-12">
        {AboutItems.map((item, index) => (
          <div
            key={item.id}
            className="bg-white py-12 px-8 rounded-lg shadow-xl min-h-[340px]"
          >
            <div className="flex flex-col gap-4 items-center justify-center">
              <div
                className={`relative rounded-full p-10 ${
                  index % 2 === 0
                    ? "bg-gradient-to-tl from-secundary/30 from-50% to-background/10 to-50%"
                    : "bg-gradient-to-tl from-background/10 from-50% to-secundary/30 to-50%"
                }`}
              >
                <item.icon className="w-10 h-10 text-primary" />
              </div>

              <span className="top-0 left-0 w-full h-full bg-primary/10 rounded-lg" />

              <h3>{item.title}</h3>
              <p className="text-muted-foreground text-center">
                {item.description[0]}
              </p>
              <p className="text-muted-foreground text-center">
                {item.description[1]}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex items-center justify-center">
        <MessageSquareQuote className="left-0 top-0 w-20 h-20 text-primary" />
        <h4 className="text-2xl relative pl-8 font-serif italic text-gray-700">
          Depois da visita técnica, finalmente entendi como{" "}
          <span className="font-semibold not-italic underline underline-offset-4 cursor-pointer">
            a teoria funciona na prática.
          </span>
        </h4>
      </div>
    </section>
  );
}
