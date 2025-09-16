import { ChevronRight } from "lucide-react";
import { useVisibleAnimation } from "../../hooks";
import { useCarousel } from "../../hooks/use-carousel.hook";
import { HeroItems } from "../../lib/constants";
import { cn } from "../../lib/utils";
import UiStateStore from "../../stores/ui-state.store";
import { Button } from "../ui";
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
              <h1
                id="hero-title"
                className={cn(
                  "max-w-[20ch] lg:w-full text-4xl font-bold leading-tight text-white transition-all duration-1000 ease-out",
                  isLoadingPage && "blur-sm opacity-0",
                  !isVisible && "opacity-0 translate-y-8",
                  isVisible && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: `${ANIMATION_DELAY_200}ms` }}
              >
                Viagens e Visitas Técnicas que Levam Seu Conhecimento Mais Longe
              </h1>

              <p
                className={cn(
                  "max-w-[40ch] lg:w-full text-white/90 text-lg leading-relaxed transition-all duration-1000 ease-out",
                  isLoadingPage && "blur-sm translate-y-10",
                  !isVisible && "opacity-0 translate-y-6",
                  isVisible && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: `${ANIMATION_DELAY_400}ms` }}
              >
                Entre nos bastidores de empresas e instituições, conectando
                teoria à prática com experiências imersivas.
              </p>
            </div>

            <div className="space-y-3">
              <div
                className={cn(
                  "flex items-center gap-3 transition-all duration-1000 ease-out",
                  !isVisible && "opacity-0 translate-x-4",
                  isVisible && "opacity-100 translate-x-0"
                )}
                style={{ transitionDelay: `${ANIMATION_DELAY_600}ms` }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/80">Aprenda com especialistas</span>
              </div>
              <div
                className={cn(
                  "flex items-center gap-3 transition-all duration-1000 ease-out",
                  !isVisible && "opacity-0 translate-x-4",
                  isVisible && "opacity-100 translate-x-0"
                )}
                style={{ transitionDelay: `${ANIMATION_DELAY_800}ms` }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/80">
                  Viaje com grupo selecionado
                </span>
              </div>
              <div
                className={cn(
                  "flex items-center gap-3 transition-all duration-1000 ease-out",
                  !isVisible && "opacity-0 translate-x-4",
                  isVisible && "opacity-100 translate-x-0"
                )}
                style={{ transitionDelay: `${ANIMATION_DELAY_1000}ms` }}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/80">
                  Networking real e estratégico
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-8">
          <div className="flex flex-col gap-4">
            <div
              className={cn(
                "transition-all duration-1000 ease-out",
                !isVisible && "opacity-0 translate-y-6",
                isVisible && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${ANIMATION_DELAY_1200}ms` }}
            >
              <Button aria-controls={carouselId}>
                Garantir Minha Vaga <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div
              className={cn(
                "transition-all duration-1000 ease-out",
                !isVisible && "opacity-0 translate-y-6",
                isVisible && "opacity-100 translate-y-0"
              )}
              style={{ transitionDelay: `${ANIMATION_DELAY_1400}ms` }}
            >
              <Button variant="outline">Ver Próximas Datas</Button>
            </div>
          </div>

          <div
            className={cn(
              "flex justify-center gap-2 transition-all duration-1000 ease-out",
              !isVisible && "opacity-0 translate-y-4",
              isVisible && "opacity-100 translate-y-0"
            )}
            style={{ transitionDelay: `${ANIMATION_DELAY_1600}ms` }}
          >
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
        </div>
      </div>
    </div>
  );
}
