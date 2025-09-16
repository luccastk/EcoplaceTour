import { ChevronRight } from "lucide-react";
import {
  ANIMATION_DELAY_1000,
  ANIMATION_DELAY_1200,
  ANIMATION_DELAY_1400,
  ANIMATION_DELAY_1600,
  ANIMATION_DELAY_200,
  ANIMATION_DELAY_400,
  ANIMATION_DELAY_600,
  ANIMATION_DELAY_800,
} from "../../../constants";
import { useCarousel } from "../../../hooks/use-carousel.hook";
import { HeroItems } from "../../../lib/constants";
import { cn } from "../../../lib/utils";
import UiStateStore from "../../../stores/ui-state.store";
import { AnimatedDiv, Button } from "../../ui";
const carouselId = "hero-carousel-mobile";

export function HeroMobile() {
  const { isLoadingPage } = UiStateStore();
  const { emblaRef, emblaApi, selectedIndex } = useCarousel();

  return (
    <div className="relative h-svh">
      <div
        id={carouselId}
        className="absolute inset-0 overflow-hidden"
        ref={emblaRef}
        aria-live="polite"
      >
        <div className="flex">
          {HeroItems.map((item) => (
            <div
              key={item.title}
              className="flex-[0_0_100%] min-w-0 h-dvh relative"
            >
              <item.children />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-between px-6 pt-32 pb-8 h-svh">
        <div className="flex flex-col gap-12">
          <div className="space-y-10">
            <div className="space-y-8">
              <AnimatedDiv delay={ANIMATION_DELAY_200}>
                <h1
                  id="hero-title"
                  className={cn(
                    "max-w-[24ch] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white",
                    isLoadingPage && "blur-sm opacity-0"
                  )}
                >
                  Viagens e Visitas Técnicas que Levam Seu Conhecimento Mais
                  Longe
                </h1>
              </AnimatedDiv>

              <AnimatedDiv delay={ANIMATION_DELAY_400}>
                <p
                  className={cn(
                    "max-w-[45ch] text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed",
                    isLoadingPage && "blur-sm translate-y-10"
                  )}
                >
                  Entre nos bastidores de empresas e instituições, conectando
                  teoria à prática com experiências imersivas.
                </p>
              </AnimatedDiv>
            </div>

            <div className="space-y-5">
              <AnimatedDiv
                delay={ANIMATION_DELAY_600}
                animationType="fade-right"
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-white/90 text-base md:text-lg lg:text-xl">
                    Aprenda com especialistas
                  </span>
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                delay={ANIMATION_DELAY_800}
                animationType="fade-right"
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-white/90 text-base md:text-lg lg:text-xl">
                    Viaje com grupo selecionado
                  </span>
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                delay={ANIMATION_DELAY_1000}
                animationType="fade-right"
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-white/90 text-base md:text-lg lg:text-xl">
                    Networking real e estratégico
                  </span>
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <AnimatedDiv delay={ANIMATION_DELAY_1200}>
              <Button
                className="w-full py-5 text-lg font-semibold"
                aria-controls={carouselId}
              >
                Garantir Minha Vaga <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </AnimatedDiv>

            <AnimatedDiv delay={ANIMATION_DELAY_1400}>
              <Button
                variant="outline"
                className="w-full py-5 text-lg font-semibold"
              >
                Ver Próximas Datas
              </Button>
            </AnimatedDiv>
          </div>

          <AnimatedDiv delay={ANIMATION_DELAY_1600} animationType="fade-down">
            <div className="flex justify-center gap-4">
              {HeroItems.map((item, idx) => (
                <button
                  key={item.title}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    selectedIndex === idx
                      ? "bg-white w-12"
                      : "bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`Ir para slide ${idx + 1}`}
                />
              ))}
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </div>
  );
}
