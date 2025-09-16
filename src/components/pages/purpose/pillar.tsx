import { Heart } from "lucide-react";
import {
  ANIMATION_DELAY_0,
  ANIMATION_DELAY_200,
  ANIMATION_DELAY_400,
  ANIMATION_DELAY_600,
} from "../../../constants";
import { BooksIcon, PeopleIcon } from "../../icons";
import { AnimatedDiv } from "../../ui/animations";

export function PurposePillar() {
  return (
    <div className="max-w-6xl mx-auto">
      <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_0}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text mb-6">
            Cada experiência que criamos é guiada por{" "}
            <span className="text-primary">três pilares</span>
          </h2>
        </div>
      </AnimatedDiv>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_200}>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 text-center">
            <div className="w-20 h-20 bg-florest/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-florest" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">
              Sustentabilidade
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Porque cuidar do mundo é cuidar do futuro.
            </p>
          </div>
        </AnimatedDiv>

        <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_400}>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 text-center">
            <div className="w-20 h-20 bg-sky/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BooksIcon className="w-10 h-10 text-sky" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">Educação</h3>
            <p className="text-muted-foreground leading-relaxed">
              Porque conhecimento é a base de toda mudança.
            </p>
          </div>
        </AnimatedDiv>

        <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_600}>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 text-center">
            <div className="w-20 h-20 bg-earth/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <PeopleIcon />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">Conexão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Porque juntos vamos sempre mais longe.
            </p>
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
}
