import { ANIMATION_DELAY_0 } from "../../../constants";
import { ThunderIcon } from "../../icons";
import { AnimatedDiv } from "../../ui/animations";

export function PurposeJourney() {
  return (
    <div className="max-w-6xl mx-auto">
      <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_0}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold font-serif text-text mb-6">
              Nossa <span className="text-primary">Jornada</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Aqui, cada viagem é um convite para você aprender, se conectar e
              deixar uma marca positiva. Mais do que destinos, criamos jornadas
              que unem propósito e realização.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Experiências que transformam vidas e perspectivas
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-secundary rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Conexões genuínas com pessoas e lugares
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-florest rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  Impacto positivo no meio ambiente e comunidades
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secundary/10 rounded-3xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThunderIcon />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  Transformação
                </h3>
                <p className="text-muted-foreground">
                  Através de experiências únicas
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}
