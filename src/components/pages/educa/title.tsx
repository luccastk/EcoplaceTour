import { AnimatedDiv } from "../../ui/animations";
import {
  ANIMATION_DELAY_0,
  ANIMATION_DELAY_200,
} from "../../../lib/constants";

export function EducaTitle() {
  return (
    <div className="text-center mb-16">
      <AnimatedDiv animationType="fade-right" delay={ANIMATION_DELAY_0}>
        <h1 className="text-4xl font-serif md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Visitas Técnicas{""}
          <span className="block text-primary">Educativas</span>
        </h1>

        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
      </AnimatedDiv>

      <AnimatedDiv animationType="fade-left" delay={ANIMATION_DELAY_200}>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Descubra experiências únicas de aprendizado prático em empresas
          líderes. Conecte-se com inovação, sustentabilidade e tecnologia
          através de visitas técnicas exclusivas que transformam conhecimento em
          experiência.
        </p>
      </AnimatedDiv>
    </div>
  );
}
