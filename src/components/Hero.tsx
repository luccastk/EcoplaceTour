import { BsArrowRightShort } from "react-icons/bs";
import { hero } from "../types/hero";
import Button from "./Button";
import { Typography } from "./Typography";

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
        <div className="flex flex-col items-center space-y-2 my-6">
          <Button link href="/badge">
            <div className="flex items-center gap-3">
              Agendar Visita
              <BsArrowRightShort size="1.5rem" />
            </div>
          </Button>
          <Button link href="/enterprises" variant="tertiary">Ver Empresas</Button>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          {hero.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center space-y-3 bg-background/20 rounded-md p-6"
            >
              <card.icon className="h-20 w-20 text-warning" />
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
