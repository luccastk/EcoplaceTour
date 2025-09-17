import { ANIMATION_DELAY_0, ANIMATION_DELAY_200 } from "../../../lib/constants";
import { AnimatedDiv } from "../../ui/animations";

export function TravelsTitle() {
  return (
    <div className="text-center mb-16">
      <AnimatedDiv animationType="fade-left" delay={ANIMATION_DELAY_0}>
        <h1 className="text-4xl font-serif md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Serviços de <span className="text-primary">Viagens</span>
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
      </AnimatedDiv>

      <AnimatedDiv animationType="fade-down" delay={ANIMATION_DELAY_200}>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Além das visitas técnicas, organizamos viagens completas para levar
          você e sua família se conectarem com experiências únicas.
        </p>
      </AnimatedDiv>
    </div>
  );
}
