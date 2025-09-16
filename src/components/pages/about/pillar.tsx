import { ChevronRight, MapPin } from "lucide-react";
import {
  ANIMATION_DELAY_0,
  ANIMATION_DELAY_200,
  ANIMATION_DELAY_400,
} from "../../../constants";
import { BooksIcon } from "../../icons";
import { AnimatedDiv } from "../../ui/animations";
import { Link } from "react-router-dom";

export function AboutPillar() {
  return (
    <div className="max-w-6xl mx-auto">
      <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_0}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-text mb-4">
            Nossos <span className="text-primary">Pilares</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dois braços complementares que trabalham juntos para criar
            experiências únicas
          </p>
        </div>
      </AnimatedDiv>

      <div className="grid md:grid-cols-2 gap-8">
        <AnimatedDiv animationType="fade-right" delay={ANIMATION_DELAY_200}>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                <BooksIcon />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text">Ecoplace Edu</h3>
                <p className="text-primary font-medium">
                  Educação & Aprendizado
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Visitas técnicas e experiências educativas que aproximam teoria e
              prática, ampliando horizontes de estudantes e profissionais.
            </p>
            <Link
              to="/edu"
              className="mt-6 flex items-center text-primary font-medium"
            >
              <span>Saiba mais</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </AnimatedDiv>

        <AnimatedDiv animationType="fade-left" delay={ANIMATION_DELAY_400}>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-secundary/10 rounded-2xl flex items-center justify-center mr-4">
                <MapPin className="w-8 h-8 text-secundary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text">
                  Ecoplace Travel
                </h3>
                <p className="text-secundary font-medium">
                  Viagens & Experiências
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Pacotes de viagem e experiências culturais que encantam, inspiram
              e criam memórias inesquecíveis.
            </p>
            <Link
              to="/travel"
              className="mt-6 flex items-center text-secundary font-medium"
            >
              <span>Saiba mais</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
}
