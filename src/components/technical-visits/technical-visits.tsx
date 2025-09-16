import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ANIMATION_DELAY_200, ANIMATION_DELAY_400 } from "../../constants";
import { TechnicalVisitItems } from "../../lib/constants";
import { Button } from "../ui";
import { AnimatedDiv } from "../ui/animations";
import { TechnicalVisitsTitle } from "./title";

export function TechnicalVisits() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-moss/12 via-florest/10 to-sage/8"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-earth/4 to-transparent"></div>

      <div className="relative pr-6 xl:px-20 pl-6 xl:pl-0">
        <TechnicalVisitsTitle scrollPrev={scrollPrev} scrollNext={scrollNext} />

        <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_200}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 py-4">
              {TechnicalVisitItems.map((visit, index) => (
                <AnimatedDiv
                  key={visit.id}
                  animationType="fade-up"
                  delay={ANIMATION_DELAY_400 + index * 100}
                  className="flex-none w-full md:w-80 lg:w-96"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={visit.image}
                        alt={visit.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="font-bold text-xl text-gray-900 mb-2">
                          {visit.title}
                        </h3>
                        <p className="text-primary font-semibold text-sm mb-1">
                          {visit.company}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          {visit.location} • {visit.duration}
                        </p>
                      </div>

                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                        {visit.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">
                            {visit.availableSpots} vagas disponíveis
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-primary">
                          {visit.date}
                        </span>
                      </div>

                      <button className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200">
                        Inscrever-se
                      </button>
                    </div>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </AnimatedDiv>

        <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_400}>
          <div className="flex flex-col items-center gap-4 mt-2">
            <div className="flex justify-center gap-2">
              {scrollSnaps.map((snap, index) => (
                <button
                  key={snap}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-primary w-8"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedDiv>

        <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_400}>
          <div className="text-center mt-6 ">
            <Button variant="outline" size="lg">
              Ver Todas as Visitas Técnicas
            </Button>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
