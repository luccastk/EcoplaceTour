import {
  ANIMATION_DELAY_0,
  ANIMATION_DELAY_200,
  ANIMATION_DELAY_400,
} from "../../../constants";
import { ServiceItems } from "../../../lib/constants/services";
import { cn } from "../../../lib/utils";
import { AnimatedDiv } from "../../ui/animations";

export function Services() {
  const mainServices = ServiceItems.slice(0, 3);

  return (
    <section className="py-16 px-6 xl:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sage/8 via-primary/6 to-moss/8"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-earth/5 to-transparent"></div>

      <div className="relative">
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

        <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
            {mainServices.map((service, index) => (
              <AnimatedDiv
                key={service.id}
                animationType="fade-up"
                delay={ANIMATION_DELAY_400 + index * 150}
                className={cn(
                  "w-full",
                  index === 2 && "lg:col-span-2 xl:col-span-1"
                )}
              >
                <div
                  className={cn(
                    "bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 h-full",
                    index === 2 && "col-span-2"
                  )}
                >
                  <div className="p-8 flex flex-col items-center justify-center text-center h-full">
                    <div className="mb-6">
                      <div
                        className={`relative rounded-full p-10 ${
                          index % 2 === 0
                            ? "bg-gradient-to-tl from-secundary/30 from-50% to-white to-50%"
                            : "bg-gradient-to-tl from-white from-50% to-secundary/30 to-50%"
                        }`}
                      >
                        <service.icon className="w-10 h-10 text-primary" />
                      </div>
                    </div>

                    <div className="mb-6 flex-grow">
                      <h3 className="font-bold text-xl text-text mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-6 w-full">
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedDiv>
            ))}
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
}
