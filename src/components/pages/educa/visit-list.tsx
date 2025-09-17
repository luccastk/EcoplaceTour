import { TechnicalVisitItems } from "../../../lib/constants/technical-visits";
import { EducaCard } from "../../ui/educa-card";
import { AnimatedDiv } from "../../ui/animations";
import { ANIMATION_DELAY_400 } from "../../../lib/constants";
import useUiStateStore from "../../../stores/ui-state.store";

const images = TechnicalVisitItems.map((visit) => visit.image);

export function EducaVisitsList() {
  const { viewEduca } = useUiStateStore();

  return (
    <>
      {TechnicalVisitItems.map((visit, index) => (
        <AnimatedDiv
          key={visit.id}
          animationType="fade-up"
          delay={ANIMATION_DELAY_400 + index * 100}
          className="h-full"
        >
          <EducaCard
            image={visit.image}
            images={images}
            imageAlt={visit.title}
            title={visit.title}
            company={visit.company}
            location={visit.location}
            duration={visit.duration}
            description={visit.description}
            availableSpots={visit.availableSpots}
            date={visit.date}
            view={viewEduca}
          />
        </AnimatedDiv>
      ))}
    </>
  );
}
