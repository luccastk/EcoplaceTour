import { ServiceItems } from "../../lib/constants/services";
import { Button } from "../ui";
import { ServiceTitle } from "./title";

export function Service() {
  const mainServices = ServiceItems.slice(0, 3);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sage/8 via-primary/6 to-moss/8"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-earth/5 to-transparent"></div>

      <div className="relative px-6 md:px-20">
        <ServiceTitle />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {mainServices.map((service, index) => (
            <div key={service.id} className="w-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 h-full">
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

                  {service.popular && (
                    <div className="mb-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Mais Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
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
                    <h4 className="font-semibold text-sm text-text mb-3">
                      Inclui:
                    </h4>
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

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-semibold transition-colors duration-200">
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
}

