import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../ui";
import { cn } from "../../lib/utils";
import { HeroItems } from "../../lib/constants";

export function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedSubheadline, setSelectedSubheadline] = useState(0);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const plugins = useMemo(
    () =>
      prefersReducedMotion
        ? [Fade({})]
        : [
            Autoplay({
              delay: 5000,
            }),
            Fade({}),
          ],
    [prefersReducedMotion]
  );

  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel(
    { loop: true },
    plugins
  );
  const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel(
    { loop: true },
    plugins
  );

  const scrollPrev = useCallback(() => {
    emblaApiMobile?.scrollPrev();
    emblaApiDesktop?.scrollPrev();
  }, [emblaApiMobile, emblaApiDesktop]);

  const scrollNext = useCallback(() => {
    emblaApiMobile?.scrollNext();
    emblaApiDesktop?.scrollNext();
  }, [emblaApiMobile, emblaApiDesktop]);

  const onSelectMobile = useCallback(() => {
    if (!emblaApiMobile) return;
    setSelectedIndex(emblaApiMobile.selectedScrollSnap());
  }, [emblaApiMobile]);

  const onSelectDesktop = useCallback(() => {
    if (!emblaApiDesktop) return;
    setSelectedIndex(emblaApiDesktop.selectedScrollSnap());
  }, [emblaApiDesktop]);

  useEffect(() => {
    if (!emblaApiMobile) return;
    onSelectMobile();
    emblaApiMobile.on("select", onSelectMobile);
    return () => {
      emblaApiMobile.off("select", onSelectMobile);
    };
  }, [emblaApiMobile, onSelectMobile]);

  useEffect(() => {
    if (!emblaApiDesktop) return;
    onSelectDesktop();
    emblaApiDesktop.on("select", onSelectDesktop);
    return () => {
      emblaApiDesktop.off("select", onSelectDesktop);
    };
  }, [emblaApiDesktop, onSelectDesktop]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scrollPrev, scrollNext]);

  const carouselId = "hero-carousel";

  return (
    <section
      className="relative"
      aria-roledescription="carousel"
      aria-label="Destaques: visitas técnicas e viagens"
    >
      <div className="xl:hidden min-h-[100vh] relative">
        <div
          id={carouselId}
          className="absolute inset-0 overflow-hidden"
          ref={emblaRefMobile}
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

        <div className="relative z-10 flex flex-col justify-between min-h-[90vh] px-6">
          <div className="flex justify-center pt-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white font-medium text-sm">
                Ecoplace Tour
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-8 pb-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1
                  id="hero-title"
                  className="text-4xl font-bold leading-tight text-white"
                >
                  Viagens e Visitas Técnicas que Levam Seu Conhecimento Mais
                  Longe
                </h1>

                <p className="text-white/90 text-lg leading-relaxed">
                  Entre nos bastidores de empresas e instituições, conectando
                  teoria à prática com experiências imersivas.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80">
                    Aprenda com especialistas
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80">
                    Viaje com grupo selecionado
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/80">
                    Networking real e estratégico
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button aria-controls={carouselId}>
                Garantir Minha Vaga <ChevronRight className="w-5 h-5 ml-2" />
              </Button>

              <Button variant="outline">Ver Próximas Datas</Button>
            </div>

            <div className="flex justify-center gap-2">
              {HeroItems.map((item, idx) => (
                <button
                  key={item.title}
                  onClick={() => emblaApiMobile?.scrollTo(idx)}
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

      <div className="hidden xl:grid xl:grid-cols-2 min-h-[100vh]">
        <div className="flex items-start pt-46 pb-16 px-20 justify-center">
          <div className="flex flex-col gap-6 w-full">
            <div className="space-y-4">
              <h1
                id="hero-title"
                className="text-3xl md:text-5xl font-semibold leading-tight text-text"
              >
                Viagens e Visitas Técnicas que Levam Seu Conhecimento Mais Longe
              </h1>

              <p className="text-base md:text-lg text-muted-foreground">
                Entre nos bastidores de empresas e instituições, conectando
                teoria à prática com experiências imersivas.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                Aprenda com especialistas, viaje com um grupo selecionado e
                acelere sua carreira com networking real.
              </p>
            </div>

            <div className="flex items-center gap-3 my-3">
              <Button
                className="px-6 py-6 text-base"
                aria-controls={carouselId}
              >
                Garantir Minha Vaga <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="outline" className="px-6 py-6 text-base">
                Ver Próximas Datas
              </Button>
            </div>

            <div className="bottom-0 left-0 right-0 w-full h-[4px] bg-border relative overflow-hidden">
              <span
                className="absolute top-0 h-full bg-primary transition-all duration-500 ease-in-out"
                style={{
                  width: `${100 / HeroItems.length}%`,
                  left: `${(selectedSubheadline / HeroItems.length) * 100}%`,
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
                      aria-current={selectedIndex === idx ? "true" : "false"}
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
                      className="text-sm text-muted-foreground"
                    >
                      {subheadline}
                    </p>
                  )
                )}
              </div>
            </nav>
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
    </section>
  );
}
