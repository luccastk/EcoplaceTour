import { IoIosSend } from "react-icons/io";
import { Button, Form, Input } from "./ui";
import { Typography } from "./ui/Typography";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { name, school, email, phone, students, date, enterprises, message } =
      data;
    console.log(
      name,
      school,
      email,
      phone,
      students,
      date,
      enterprises,
      message
    );

    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Typography weight="bold" size="title3" className="text-center">
        Solicite um Orçamento
      </Typography>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Input
          name="name"
          label="Nome do Responsável"
          placeholder="Nome Completo"
        />
        <Input name="school" label="Escola" placeholder="Nome da Escola" />
        <Input name="email" label="Email" placeholder="seu@email.com" />
        <Input name="phone" label="Telefone" placeholder="(00) 00000-0000" />
        <Input
          name="students"
          label="Número de Estudantes"
          placeholder="Ex: 30"
        />
        <Input
          name="date"
          label="Data Preferencial"
          placeholder="dd/mm/aaaa"
          type="date"
        />
        <div className="md:col-span-2">
          <Input
            label="Empresa de Interesse"
            name="enterprises"
            placeholder="Ex: Coca-cola, Volkswagem"
          />
        </div>
        <div className="md:col-span-2">
          <Input
            multiline
            label="Mensagem"
            name="message"
            className="min-h-[120px]"
            placeholder="Conte-nos mais sobre suas necessidades e objetivos para a visita técnica..."
          />
        </div>
      </div>
      <Button type="submit" variant="secundary" className="w-full">
        <div className="flex items-center justify-center ">
          <IoIosSend className="mr-4" />
          Enviar Solicitação
        </div>
      </Button>
    </Form>
  );
};

export default ContactForm;
