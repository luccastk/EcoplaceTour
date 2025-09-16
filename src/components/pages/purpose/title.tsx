import { ANIMATION_DELAY_0, ANIMATION_DELAY_200 } from "../../../constants";
import { AnimatedDiv } from "../../ui/animations";

export function PurposeTitle() {
  return (
    <div className="max-w-6xl mx-auto">
      <AnimatedDiv animationType="fade-down" delay={ANIMATION_DELAY_0}>
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-text mb-6">
            Let's <span className="text-primary italic">Grow</span> Together
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
        </div>
      </AnimatedDiv>

      <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_200}>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          Na{" "}
          <span className="font-semibold text-primary italic">
            EcoPlaceTour
          </span>
          {""}, acreditamos que crescer sozinho é pouco, mas crescer junto é
          transformador. Nosso propósito vai além de organizar visitas técnicas
          ou viagens: queremos gerar impacto positivo em cada pessoa, em cada
          comunidade e no planeta que compartilhamos.
        </p>
      </AnimatedDiv>
    </div>
  );
}
