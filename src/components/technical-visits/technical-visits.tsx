import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { TechnicalVisitItems } from "../../lib/constants";
import { Button } from "../ui";
import { TechnicalVisitsTitle } from "./title";

export function TechnicalVisits() {
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

  return (
    <section className="py-16 bg-florest/10">
      <div className="pr-6 pl-6 xl:pl-0">
        <TechnicalVisitsTitle scrollPrev={scrollPrev} scrollNext={scrollNext} />

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8 py-4">
            {TechnicalVisitItems.map((visit) => (
              <div key={visit.id} className="flex-none w-full md:w-96">
                {/* Card with modern design */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  {/* Image section */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={visit.image}
                      alt={visit.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content section */}
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

                    {/* Bottom section */}
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

                    {/* Action button */}
                    <button className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-200">
                      Inscrever-se
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-3 md:ml-20">
          <Button variant="outline" size="lg">
            Ver Todas as Visitas Técnicas
          </Button>
        </div>
      </div>
    </section>
  );
}
