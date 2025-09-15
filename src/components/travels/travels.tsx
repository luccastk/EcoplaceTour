import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { TravelItems } from "../../lib/constants";
import { Button } from "../ui";
import { TrevelsTitle } from "./title";

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
        <TrevelsTitle scrollPrev={scrollPrev} scrollNext={scrollNext} />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex flex-row gap-6 py-4">
            {TravelItems.map((travel) => (
              <div
                key={travel.id}
                className="flex-none w-80 group cursor-pointer"
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
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex flex-col items-center gap-4 mt-6">
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

        <div className="text-center mt-6">
          <Button variant="outline" size="lg">
            Ver Todas as Viagens
          </Button>
        </div>
      </div>
    </section>
  );
}
