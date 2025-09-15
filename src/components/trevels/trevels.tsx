import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { TravelItems } from "../../lib/constants";
import { Button } from "../ui";
import { TrevelsTitle } from "./title";

export function Trevels() {
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
      <div className="pl-6 xl:pl-20">
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

      <div className="text-center mt-3 mr-6 md:mr-20">
          <Button variant="outline" size="lg">
            Ver Todas as Viagens
          </Button>
        </div>
      </div>
    </section>
  );
}
