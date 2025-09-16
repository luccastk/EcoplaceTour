import { ChevronRight } from "lucide-react";
import { useVisibleAnimation } from "../../hooks";
import { useCarousel } from "../../hooks/use-carousel.hook";
import { HeroItems } from "../../lib/constants";
import { cn } from "../../lib/utils";
import UiStateStore from "../../stores/ui-state.store";
import { AnimatedDiv, Button } from "../ui";
import {
  ANIMATION_DELAY_1000,
  ANIMATION_DELAY_1200,
  ANIMATION_DELAY_1400,
  ANIMATION_DELAY_1600,
  ANIMATION_DELAY_200,
  ANIMATION_DELAY_400,
  ANIMATION_DELAY_600,
  ANIMATION_DELAY_800,
} from "../../constants";
const carouselId = "hero-carousel-mobile";

export function HeroMobile() {
  const { isLoadingPage } = UiStateStore();
  const { isVisible } = useVisibleAnimation();
  const { emblaRef, emblaApi, selectedIndex } = useCarousel();

  return (
    <div className="relative min-h-[100vh]">
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
              className="flex-[0_0_100%] min-w-0 h-[100vh] relative"
            >
              <item.children />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-between px-6 pt-30 min-h-screen">
        <div className="flex flex-col gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <AnimatedDiv delay={ANIMATION_DELAY_200} isVisible={isVisible}>
                <h1
                  id="hero-title"
                  className={cn(
                    "max-w-[20ch] lg:w-full text-4xl font-bold leading-tight text-white",
                    isLoadingPage && "blur-sm opacity-0"
                  )}
                >
                  Viagens e Visitas Técnicas que Levam Seu Conhecimento Mais
                  Longe
                </h1>
              </AnimatedDiv>

              <AnimatedDiv delay={ANIMATION_DELAY_400} isVisible={isVisible}>
                <p
                  className={cn(
                    "max-w-[40ch] lg:w-full text-white/90 text-lg leading-relaxed",
                    isLoadingPage && "blur-sm translate-y-10"
                  )}
                >
                  Entre nos bastidores de empresas e instituições, conectando
                  teoria à prática com experiências imersivas.
                </p>
              </AnimatedDiv>
            </div>

            <div className="space-y-3">
              <AnimatedDiv
                delay={ANIMATION_DELAY_600}
                isVisible={isVisible}
                animationType="fade-right"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80">
                    Aprenda com especialistas
                  </span>
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                delay={ANIMATION_DELAY_800}
                isVisible={isVisible}
                animationType="fade-right"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80">
                    Viaje com grupo selecionado
                  </span>
                </div>
              </AnimatedDiv>
              <AnimatedDiv
                delay={ANIMATION_DELAY_1000}
                isVisible={isVisible}
                animationType="fade-right"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80">
                    Networking real e estratégico
                  </span>
                </div>
              </AnimatedDiv>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-8">
          <div className="flex flex-col gap-4">
            <AnimatedDiv delay={ANIMATION_DELAY_1200} isVisible={isVisible}>
              <Button aria-controls={carouselId}>
                Garantir Minha Vaga <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </AnimatedDiv>

            <AnimatedDiv delay={ANIMATION_DELAY_1400} isVisible={isVisible}>
              <Button variant="outline">Ver Próximas Datas</Button>
            </AnimatedDiv>
          </div>

          <AnimatedDiv
            delay={ANIMATION_DELAY_1600}
            isVisible={isVisible}
            animationType="fade-down"
          >
            <div className="flex justify-center gap-2">
              {HeroItems.map((item, idx) => (
                <button
                  key={item.title}
                  onClick={() => emblaApi?.scrollTo(idx)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    selectedIndex === idx
                      ? "bg-white w-8"
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
