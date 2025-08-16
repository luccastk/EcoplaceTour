import { SectionHead } from "../SectionHead/SectionHead";
import { containerService } from "../Service/service.css";
import { Typography } from "../Typography/Typography";

export function Contact() {
  return (
    <section className={containerService}>
      <SectionHead
        title={"Entre em Contato"}
        subtitle={
          "Pronto para proporcionar uma experiência educacional única para seus  estudantes? Entre em contato conosco e vamos planejar a visita técnica  perfeita."
        }
        
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <Typography tag="h3" variant="h3">
            Fale Conosco
          </Typography>
          <Typography tag="p" variant="h4">
            Nossa equipe está pronta para atender você e criar uma experiência
            personalizada que atenda às necessidades específicas da sua escola.
          </Typography>
        </div>
        <div></div>
      </div>
    </section>
  );
}
