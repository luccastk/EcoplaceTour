import { ServiceItems } from "../../lib/constants/services";
import { cn } from "../../lib/utils";
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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          {mainServices.map((service, index) => (
            <div
              key={service.id}
              className={cn("w-full", index === 2 && "md:col-span-2 xl:col-span-1")}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
