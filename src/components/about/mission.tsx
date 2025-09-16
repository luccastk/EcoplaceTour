import { ANIMATION_DELAY_0 } from "../../constants";
import { AnimatedDiv } from "../ui/animations";
import { Earth } from "lucide-react";

export function AboutMission() {
  return (
    <section className="py-20 px-6 xl:px-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_0}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-text mb-6">
                Nossa <span className="text-primary">Missão</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Somos uma empresa que nasceu da paixão por unir educação,
                turismo e sustentabilidade em um só movimento. É por isso que
                trabalhamos em dois pilares complementares:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Cada roteiro é pensado para gerar impacto positivo: no
                    aprendizado de quem participa, nas comunidades que nos
                    recebem e no planeta que compartilhamos.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secundary/10 rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Earth className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">
                    Transformação
                  </h3>
                  <p className="text-muted-foreground">
                    Através do turismo sustentável
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
