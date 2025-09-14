import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui";
import useEmblaCarousel from "embla-carousel-react";
import { TravelItems } from "../../lib/constants";
import { useCallback } from "react";

export function Trevels() {
  console.log("Trevels component rendering, TravelItems:", TravelItems);

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

  return (
    <section className="py-16 bg-florest/10">
      <div className="pl-20">
        <div className="flex flex-row gap-4 mb-12">
          <div className="flex flex-col gap-2">
            <h2 className="relative pb-4 text-3xl font-bold text-gray-900 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-1/4 before:h-[2px] before:bg-primary">
              Viagens Populares
            </h2>
            <p className="text-gray-600 text-lg mt-2">
              Descubra as viagens mais populares e garanta sua participação em
              uma das melhores experiências de viagem e aprendizado.
            </p>
          </div>

          <div className="flex flex-row gap-2 items-end w-full justify-end mr-20">
            <Button variant="secondary" size="icon" onClick={scrollPrev}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="icon" onClick={scrollNext}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 py-4">
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

                  {/* Main content */}
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

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Ver Todas as Viagens
          </Button>
        </div>
      </div>
    </section>
  );
}
