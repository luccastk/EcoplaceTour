import { ANIMATION_DELAY_0, ANIMATION_DELAY_200 } from "../../../lib/constants";
import { AnimatedDiv } from "../../ui/animations";

export function BudgetTitle() {
  return (
    <div className="max-w-6xl mx-auto">
      <AnimatedDiv animationType="fade-down" delay={ANIMATION_DELAY_0}>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif md:text-6xl font-bold text-text mb-6">
            Solicite seu orçamento{" "}
            <span className="text-primary">personalizado</span>
          </h1>

          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </AnimatedDiv>

      <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_200}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            Receba um planejamento exclusivo de visita ou viagem que conecta
            aprendizado, prática e experiência real.
          </p>
        </div>
      </AnimatedDiv>
    </div>
  );
}
