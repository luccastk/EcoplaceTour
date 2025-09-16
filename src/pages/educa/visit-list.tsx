import { TechnicalVisitItems } from "../../lib/constants/technical-visits";
import { EducaCard } from "../../components/ui/educa-card";
import { AnimatedDiv } from "../../components/ui/animations";
import { ANIMATION_DELAY_400 } from "../../constants";

export function EducaVisitsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {TechnicalVisitItems.map((visit, index) => (
        <AnimatedDiv
          key={visit.id}
          animationType="fade-up"
          delay={ANIMATION_DELAY_400 + index * 100}
          className="h-full"
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
  );
}
