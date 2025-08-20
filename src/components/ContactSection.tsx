import { container } from "../styles/container";
import { contactItens } from "../types/contact";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { Typography } from "./ui/Typography";

export function ContactSection() {
  return (
    <section className="bg-gradient-to-b from-background to-primary">
      <div className={container}>
        <div className="max-w-3xl mx-auto">
          <Typography
            element="h2"
            size="title2"
            weight="bold"
            className="text-center"
          >
            Entre em Contato
          </Typography>
          <Typography
            element="p"
            size="xl"
            variant="primary"
            className="text-center mt-4"
          >
            Pronto para proporcionar uma experiência educacional única para seus
            estudantes? Entre em contato conosco e vamos planejar a visita
            técnica perfeita.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
          <div className="flex flex-col space-y-5">
            <Typography element="h4" size="xl" weight="bold">
              Fale Conosco
            </Typography>
            <Typography element="p">
              Nossa equipe está pronta para atender você e criar uma experiência
              personalizada que atenda às necessidades específicas da sua
              escola.
            </Typography>
            {contactItens.map((item) => (
              <ContactInfo
                key={item.id}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
            <div className="bg-florest p-6 rounded-lg">
              <Typography variant="white" weight="bold">
                Horário de Atendimento
              </Typography>
              <div>
                <Typography variant="white">
                  Segunda a Sexta: 8h às 18h
                </Typography>
                <Typography variant="white">Sábado: 9h às 13h</Typography>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
