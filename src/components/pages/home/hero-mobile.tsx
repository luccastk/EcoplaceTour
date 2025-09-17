import { ChevronRight } from "lucide-react";
import { useCarousel } from "../../../hooks/use-carousel.hook";
import {
  ANIMATION_DELAY_200,
  ANIMATION_DELAY_400,
  HeroItems,
} from "../../../lib/constants";
import { AnimatedDiv, Button } from "../../ui";
const carouselId = "hero-carousel-mobile";

export function HeroMobile() {
  const { emblaRef } = useCarousel();

  return (
    <div className="relative min-h-svh">
      <div className="relative z-10 flex flex-col gap-6 px-6 pt-30 pb-8 h-svh">
        <div className="flex flex-col gap-12">
          <div className="space-y-6">
            <AnimatedDiv delay={ANIMATION_DELAY_200}>
              <h1 className="text-center text-4xl md:text-4xl lg:text-6xl font-bold font-serif lg:leading-tight text-text">
                Conecte teoria e prática com a EcoPlaceTour.
              </h1>
            </AnimatedDiv>

            <AnimatedDiv delay={ANIMATION_DELAY_400}>
              <p className="text-center mx-auto md:text-lg lg:text-2xl leading-relaxed text-muted-foreground">
                Com a Ecoplace, você conecta teoria e prática em experiências
                imersivas que aceleram sua jornada.
              </p>
            </AnimatedDiv>
          </div>
        </div>

        <div className="relative min-h-0 md:max-h-[60vh]">
          <div
            id={carouselId}
            className="overflow-hidden h-full rounded-lg md:max-h-[50vh]"
            ref={emblaRef}
            aria-live="polite"
          >
            <div className="flex">
              {HeroItems.map((item) => (
                <div
                  key={item.title}
                  className="flex-[0_0_100%] min-w-0 relative"
                >
                  <img
                    src={item.image}
                    alt={`Imagem representativa para ${item.title}`}
                    className="w-full h-full object-cover md:object-center"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 p-1.5 bg-background rounded-xl">
              <Button
                variant="solid"
                className="w-full py-5 text-lg font-semibold"
                aria-controls={carouselId}
              >
                Agendar Visita <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
