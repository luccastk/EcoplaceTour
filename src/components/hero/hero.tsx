import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  ANIMATION_DELAY_200,
  ANIMATION_DELAY_400,
  ANIMATION_DELAY_600,
  ANIMATION_DELAY_800,
} from "../../constants";
import { useScreenDetector } from "../../hooks/use-screen-detector.hook";
import { HeroItems } from "../../lib/constants";
import { cn } from "../../lib/utils";
import { AnimatedDiv, Button } from "../ui";
import { HeroMobile } from "./hero-mobile";

const carouselId = "hero-carousel";

export function Hero() {
  const [selectedSubheadline, setSelectedSubheadline] = useState(0);
  const { isDesktop } = useScreenDetector();

  const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({
      delay: 5000,
    }),
  ]);

  const scrollPrev = useCallback(() => {
    emblaApiDesktop?.scrollPrev();
  }, [emblaApiDesktop]);

  const scrollNext = useCallback(() => {
    emblaApiDesktop?.scrollNext();
  }, [emblaApiDesktop]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scrollPrev, scrollNext]);

  return (
    <section
      className="relative"
      aria-roledescription="carousel"
      aria-label="Destaques: visitas técnicas e viagens"
    >
      {isDesktop ? (
        <div className="grid grid-cols-2 min-h-[100vh]">
          <div className="flex items-start pt-30 px-20 justify-center">
            <div className="flex flex-col h-full gap-16 w-full">
              <div>
                <div className="space-y-4">
                  <AnimatedDiv delay={ANIMATION_DELAY_200}>
                    <h1
                      id="hero-title"
                      className="text-3xl md:text-5xl font-semibold font-serif leading-tight text-text"
                    >
                      Viagens e Visitas Técnicas que Levam Seu Conhecimento Mais
                      Longe
                    </h1>
                  </AnimatedDiv>

                  <AnimatedDiv delay={ANIMATION_DELAY_400}>
                    <p className="w-[40ch] text-base md:text-lg text-muted-foreground">
                      Entre nos bastidores de empresas e instituições,
                      conectando teoria à prática com experiências imersivas.{" "}
                      <br /> Aprenda com especialistas, viaje com um grupo
                      selecionado e acelere sua carreira com networking real.
                    </p>
                  </AnimatedDiv>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <AnimatedDiv
                  delay={ANIMATION_DELAY_600}
                  animationType="fade-left"
                >
                  <Button
                    className="px-6 py-6 text-base"
                    aria-controls={carouselId}
                  >
                    Garantir Minha Vaga{" "}
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </AnimatedDiv>
                <AnimatedDiv
                  delay={ANIMATION_DELAY_600}
                  animationType="fade-right"
                >
                  <Button variant="outline" className="px-6 py-6 text-base">
                    Ver Próximas Datas
                  </Button>
                </AnimatedDiv>
              </div>

              <AnimatedDiv delay={ANIMATION_DELAY_800} animationType="fade-up">
                <div className="space-y-7">
                  <div className="bottom-0 left-0 right-0 w-full h-[4px] bg-border relative overflow-hidden">
                    <span
                      className="absolute top-0 h-full bg-primary transition-all duration-500 ease-in-out"
                      style={{
                        width: `${100 / HeroItems.length}%`,
                        left: `${
                          (selectedSubheadline / HeroItems.length) * 100
                        }%`,
                      }}
                    />
                  </div>

                  <nav
                    aria-label="Selecionar destaque do hero"
                    className="flex flex-col gap-7"
                  >
                    <ul className="grid grid-cols-3 gap-4">
                      {HeroItems.map((item, idx) => (
                        <li key={item.title}>
                          <button
                            onClick={() => {
                              emblaApiDesktop?.scrollTo(idx);
                              setSelectedSubheadline(idx);
                            }}
                            className={cn(
                              "hero-nav-button text-sm md:text-base underline-offset-4 focus:outline-none focus:text-primary cursor-pointer text-muted-foreground",
                              selectedSubheadline === idx && "text-primary"
                            )}
                            aria-controls={carouselId}
                            aria-current={
                              selectedSubheadline === idx ? "true" : "false"
                            }
                          >
                            {item.title}
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-1">
                      {HeroItems[selectedSubheadline]?.subheadlines.map(
                        (subheadline) => (
                          <p
                            key={subheadline}
                            className="text-muted-foreground"
                          >
                            {subheadline}
                          </p>
                        )
                      )}
                    </div>
                  </nav>
                </div>
              </AnimatedDiv>
            </div>
          </div>

          <div
            id={carouselId}
            className="overflow-hidden relative"
            ref={emblaRefDesktop}
            aria-live="polite"
          >
            <div className="flex">
              {HeroItems.map((item) => (
                <div
                  key={item.title}
                  className="flex-[0_0_100%] min-w-0 h-[100vh] relative"
                >
                  <item.children />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <HeroMobile />
      )}
    </section>
  );
}
