import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroItems } from "../../lib/constants";
import { cn } from "../../lib/utils";
import { Button } from "../ui";

const carouselId = "hero-carousel-mobile";

export function HeroMobile() {
  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 5000,
    }),
    Fade(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApiMobile) return;

    const onSelect = () => {
      setSelectedIndex(emblaApiMobile.selectedScrollSnap());
    };

    emblaApiMobile.on("select", onSelect);
    onSelect();

    return () => {
      emblaApiMobile.off("select", onSelect);
    };
  }, [emblaApiMobile]);

  return (
    <div className="min-h-[100vh] relative">
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
                Viagens e Visitas Técnicas que Levam Seu Conhecimento Mais Longe
              </h1>

              <p className="text-white/90 text-lg leading-relaxed">
                Entre nos bastidores de empresas e instituições, conectando
                teoria à prática com experiências imersivas.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/80">Aprenda com especialistas</span>
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
  );
}
