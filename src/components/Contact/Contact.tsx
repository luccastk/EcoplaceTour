import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { container, sectionHeader } from "../../theme/global.css";
import { palette } from "../../theme/palettes";
import { radii } from "../../theme/radii";
import { gap, space } from "../../theme/spaces";
import type { ContactItem } from "../../types/contact-item";
import { Box } from "../Box/Box";
import { Typography } from "../Typography/Typography";
import { background } from "./contact.css";
import { Form } from "../Form/Form";

const contactItems: ContactItem[] = [
  {
    id: 0,
    icon: <FaPhoneAlt color={palette.primary} size={"30px"} />,
    title: "Telefone",
    text: "(11) 9 3288-5101",
  },
  {
    id: 1,
    icon: <MdEmail color={palette.primary} size={"30px"} />,
    title: "Email",
    text: "contato@gmail.com",
  },
  {
    id: 2,
    icon: <FaLocationDot color={palette.primary} size={"30px"} />,
    title: "Endereço",
    text: "Av. Paulista 1234, São Paulo, SP - 09520-320",
  },
];

export function Contact() {
  return (
    <section className={background}>
      <div className={container}>
        <div className={sectionHeader}>
          <Typography tag="h2" variant="h2" w="bold" align="center">
            Entre em Contato
          </Typography>
          <Typography tag="h3" variant="h4" align="center">
            Pronto para proporcionar uma experiência educacional única para seus
            estudantes? Entre em contato conosco e vamos planejar a visita
            técnica perfeita.
          </Typography>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: gap.lg,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: gap.sm }}
          >
            <Typography tag="h3" variant="h3" w="bold">
              Fale Conosco
            </Typography>
            <Typography tag="p" variant="h4" align="justify">
              Nossa equipe está pronta para atender você e criar uma experiência
              personalizada que atenda às necessidades específicas da sua
              escola.
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: gap.sm,
              }}
            >
              {contactItems.map((item) => (
                <Box elevation="1">
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: gap.sm,
                      padding: space.xs,
                    }}
                  >
                    {item.icon}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      <Typography w="bold">{item.title}</Typography>
                      <Typography>{item.text}</Typography>
                    </div>
                  </div>
                </Box>
              ))}
            </div>
            <div
              style={{
                background: palette.florest,
                borderRadius: radii.sm,
                padding: space.sm,
                display: "flex",
                flexDirection: "column",
                gap: gap.xs,
              }}
            >
              <Typography color="white" w="bold">
                Horário de Atendimento
              </Typography>
              <div>
                <Typography color="white">
                  Segunda a Sexta: 8h às 18h
                </Typography>
                <Typography color="white">Sábado: 9h às 13h</Typography>
              </div>
            </div>
          </div>
          <Box border>
            <Form>
              <Form.Title>Solicitar um Orçamento</Form.Title>
              <Form.Inputs>
                <Form.Input label="Nome" name="name" />
                <Form.Input label="Email" name="name" />
                <Form.Input label="Escola" name="name" />
                <Form.Input label="Telefone" name="name" />
                <Form.Input label="Numero de Estudantes" name="name" />
                <Form.Input type="date" label="Data Preferencial" name="name" />
              </Form.Inputs>
              <Form.Button>Submit</Form.Button>
            </Form>
          </Box>
        </div>
      </div>
    </section>
  );
}
