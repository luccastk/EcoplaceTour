import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  ANIMATION_DELAY_0,
  ANIMATION_DELAY_200,
  ANIMATION_DELAY_400,
  TechnicalVisitItems,
} from "../../../lib/constants";
import { Button, EducaCard } from "../../ui";
import { AnimatedDiv } from "../../ui/animations";

export function EducaVisits() {
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
        {" "}
        <div className="flex flex-row items-center justify-between gap-4 mb-12">
          <AnimatedDiv
            animationType="fade-left"
            delay={ANIMATION_DELAY_0}
            className="hidden md:flex flex-row items-end gap-2 mt-auto xl:ml-20"
          >
            <Button variant="secondary" size="icon" onClick={scrollPrev}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="icon" onClick={scrollNext}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </AnimatedDiv>

          <div className="flex flex-col gap-2 ml-auto pl-20">
            <AnimatedDiv animationType="fade-down" delay={ANIMATION_DELAY_0}>
              <h2 className="relative font-serif pb-4 text-3xl font-bold text-gray-900 before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-1/4 before:h-[2px] before:bg-primary text-right">
                Visitas Técnicas
              </h2>
            </AnimatedDiv>
            <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_200}>
              <p className="text-gray-600 text-lg mt-2 text-right">
                Descubra as visitas técnicas mais populares e garanta sua
                participação em uma das melhores experiências de aprendizado
                prático.
              </p>
            </AnimatedDiv>
          </div>
        </div>
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
                  <EducaCard
                    image={visit.image}
                    imageAlt={visit.title}
                    title={visit.title}
                    company={visit.company}
                    location={visit.location}
                    duration={visit.duration}
                    description={visit.description}
                    availableSpots={visit.availableSpots}
                    date={visit.date}
                  />
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
