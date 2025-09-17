import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  ANIMATION_DELAY_0,
  ANIMATION_DELAY_200,
  ANIMATION_DELAY_400,
  TravelItems,
} from "../../../lib/constants";
import { Button } from "../../ui";
import { AnimatedDiv } from "../../ui/animations";

export function Travels() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

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
      <div className="absolute inset-0 bg-gradient-to-tr from-sky/8 via-sage/10 to-moss/8"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-earth/3 to-transparent"></div>

      <div className="relative pl-6 xl:pl-20">
        <div className="flex flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-col gap-2">
            <AnimatedDiv animationType="fade-right" delay={ANIMATION_DELAY_0}>
              <h1 className="relative font-serif pb-4 text-3xl font-bold text-gray-900 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-1/4 before:h-[2px] before:bg-primary">
                Serviços de Viagens
              </h1>
            </AnimatedDiv>
            <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_200}>
              <p className="text-gray-600 text-lg mt-2 pr-20 ">
                Além das visitas técnicas, organizamos viagens completas para
                levar você e sua família se conectarem com experiências únicas.
              </p>
            </AnimatedDiv>
          </div>

          <AnimatedDiv
            animationType="fade-left"
            delay={ANIMATION_DELAY_0}
            className="hidden md:flex flex-row gap-2 items-end mt-auto mr-6 xl:mr-20"
          >
            <Button variant="secondary" size="icon" onClick={scrollPrev}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="icon" onClick={scrollNext}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </AnimatedDiv>
        </div>

        <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_200}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex flex-row gap-6 py-4">
              {TravelItems.map((travel, index) => (
                <AnimatedDiv
                  key={travel.id}
                  animationType="fade-up"
                  delay={ANIMATION_DELAY_400 + index * 100}
                  className="flex-none w-72 md:w-80 group cursor-pointer"
                >
                  <div className="w-full h-[450px] overflow-hidden relative rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <img
                      src={travel.image}
                      alt={travel.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-black/50 transition-all duration-300 group-hover:bg-black/40" />

                    <div className="absolute z-40 bottom-4 left-4 right-4">
                      <h3 className="font-semibold text-lg text-white z-40">
                        {travel.title}
                      </h3>
                      <p className="text-white text-sm mt-1">
                        {travel.destination}
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </AnimatedDiv>

        {/* Dots Indicator */}
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
          <div className="text-center mt-6">
            <Button variant="outline" size="lg">
              Ver Todas as Viagens
            </Button>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
