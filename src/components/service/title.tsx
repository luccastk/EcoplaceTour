import { ANIMATION_DELAY_0, ANIMATION_DELAY_200 } from "../../constants";
import { AnimatedDiv } from "../ui/animations";

export function ServiceTitle() {
  return (
    <div className="flex flex-col gap-4 text-center">
      <div className="space-y-2">
        <AnimatedDiv animationType="fade-down" delay={ANIMATION_DELAY_0}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-text">
            Soluções Completas para{" "}
            <span className="block text-primary">Educação Prática</span>
          </h2>
        </AnimatedDiv>
        <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_200}>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços educacionais para
            transformar a experiência de aprendizado dos seus estudantes.
          </p>
        </AnimatedDiv>
      </div>
    </div>
  );
}
