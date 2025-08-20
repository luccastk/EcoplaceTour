import { services } from "../types/services";
import { Typography } from "./Typography";

export function Service() {
  return (
    <section className="bg-background">
      <div className="max-w-5xl mx-auto p-5 md:py-14">
        <div className="max-w-3xl mx-auto">
          <Typography
            element="h2"
            size="title2"
            weight="bold"
            className="text-center mb-4"
          >
            Nossos Serviços
          </Typography>
          <Typography
            element="p"
            variant="tertiary"
            size="xl"
            className="text-center"
          >
            Oferecemos experiências educacionais completas que conectam teoria e
            prática, proporcionando aos estudantes uma visão real do mercado de
            trabalho.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-8">
          {services.map((item) => (
            <div className="py-5 px-6 rounded-md bg-gradient-to-tr from-white/30 to-secundary/30 transition-all hover:shadow-elegant hover:-translate-y-2.5">
              <div
                key={item.id}
                className="h-full flex flex-col items-center gap-3"
              >
                <item.icon className="shrink h-16 w-16 text-primary" />
                <Typography
                  element="h3"
                  size="title3"
                  weight="bold"
                  className="text-center"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="tertiary"
                  size="md"
                  className="text-center"
                >
                  {item.description}
                </Typography>
                <div className="flex flex-col items-center space-y-3.5 mt-auto">
                  {item.tags.map((tag) => (
                    <div key={tag.id} className="flex items-center gap-2.5 ">
                      <tag.icon className="shrink-0" />
                      <Typography variant="primary" className="text-center">
                        {tag.label}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
