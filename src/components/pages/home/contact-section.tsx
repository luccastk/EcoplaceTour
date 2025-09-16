import { useState } from "react";
import { Button, Input, Textarea } from "../../ui";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sage/8 via-primary/6 to-moss/8"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-earth/5 to-transparent"></div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-text mb-4">
            Faça Sua Reserva e{" "}
            <span className="text-primary">Transforme Seu Conhecimento</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário e nossa equipe retornará com todas as
            informações para organizar sua visita técnica ou viagem educacional.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full h-12"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text mb-2"
                >
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full h-12"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Telefone/WhatsApp
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  className="w-full h-12"
                />
              </div>

              <div>
                <label
                  htmlFor="institution"
                  className="block text-sm font-medium text-text mb-2"
                >
                  Instituição/Empresa
                </label>
                <Input
                  id="institution"
                  name="institution"
                  type="text"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="Nome da sua instituição"
                  className="w-full h-12"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-text mb-2"
              >
                Serviço de Interesse *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full h-12 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
              >
                <option value="">Selecione um serviço</option>
                <option value="visitas-tecnicas">
                  Visitas Técnicas Personalizadas
                </option>
                <option value="viagens-estudo">Viagens de Estudo</option>
                <option value="consultoria">Consultoria Educacional</option>
                <option value="workshops">Workshops Corporativos</option>
                <option value="intercambio">Programas de Intercâmbio</option>
                <option value="eventos">Eventos e Conferências</option>
                <option value="outros">Outros</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text mb-2"
              >
                Mensagem
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-nos mais sobre suas necessidades, objetivos ou dúvidas..."
                rows={4}
                className="w-full"
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-semibold text-lg transition-colors duration-200"
              >
                Enviar Solicitação
              </Button>
            </div>
          </form>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 t-6">
            <p className="text-xs text-center text-muted-foreground mt-6">
              🔒 Seus dados estão seguros conosco
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
