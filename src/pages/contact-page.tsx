import { useState } from "react";
import { AnimatedDiv } from "../components/ui/animations";
import { Button, Input, Textarea } from "../components/ui";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    service: "",
    participants: "",
    budget: "",
    startDate: "",
    endDate: "",
    destination: "",
    objectives: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulário de orçamento enviado:", formData);
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-46 pb-20 px-6 xl:px-20 bg-gradient-to-br from-primary/5 via-background to-secundary/5">
        <div className="max-w-6xl mx-auto">
          <AnimatedDiv animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
                Solicite Seu <span className="text-primary">Orçamento</span>
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Transforme suas ideias em experiências únicas. Preencha o formulário
                e nossa equipe criará um orçamento personalizado para sua visita técnica
                ou viagem educacional.
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-6 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedDiv animationType="fade-up" delay={0}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">Telefone</h3>
                <p className="text-muted-foreground">(11) 99999-9999</p>
                <p className="text-muted-foreground">WhatsApp disponível</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secundary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secundary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">E-mail</h3>
                <p className="text-muted-foreground">contato@ecoplacetour.com</p>
                <p className="text-muted-foreground">Resposta em até 24h</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-florest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-florest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">Localização</h3>
                <p className="text-muted-foreground">São Paulo, SP</p>
                <p className="text-muted-foreground">Atendimento nacional</p>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Budget Form Section */}
      <section className="py-20 px-6 xl:px-20 bg-gradient-to-r from-primary/5 to-secundary/5">
        <div className="max-w-4xl mx-auto">
          <AnimatedDiv animationType="fade-up" delay={0}>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-text mb-4">
                  Formulário de <span className="text-primary">Orçamento</span>
                </h2>
                <p className="text-muted-foreground">
                  Preencha os dados abaixo para receber um orçamento personalizado
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dados Pessoais */}
                <div className="border-b border-border pb-6">
                  <h3 className="text-xl font-semibold text-text mb-4">Dados Pessoais</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
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
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
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

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="institution" className="block text-sm font-medium text-text mb-2">
                        Instituição/Empresa *
                      </label>
                      <Input
                        id="institution"
                        name="institution"
                        type="text"
                        required
                        value={formData.institution}
                        onChange={handleChange}
                        placeholder="Nome da sua instituição"
                        className="w-full h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Detalhes do Serviço */}
                <div className="border-b border-border pb-6">
                  <h3 className="text-xl font-semibold text-text mb-4">Detalhes do Serviço</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-text mb-2">
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
                        <option value="visitas-tecnicas">Visitas Técnicas Personalizadas</option>
                        <option value="viagens-estudo">Viagens de Estudo</option>
                        <option value="consultoria">Consultoria Educacional</option>
                        <option value="workshops">Workshops Corporativos</option>
                        <option value="intercambio">Programas de Intercâmbio</option>
                        <option value="eventos">Eventos e Conferências</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="participants" className="block text-sm font-medium text-text mb-2">
                        Número de Participantes *
                      </label>
                      <Input
                        id="participants"
                        name="participants"
                        type="number"
                        required
                        value={formData.participants}
                        onChange={handleChange}
                        placeholder="Ex: 25"
                        className="w-full h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-text mb-2">
                        Faixa de Orçamento
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full h-12 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
                      >
                        <option value="">Selecione uma faixa</option>
                        <option value="ate-5k">Até R$ 5.000</option>
                        <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                        <option value="10k-25k">R$ 10.000 - R$ 25.000</option>
                        <option value="25k-50k">R$ 25.000 - R$ 50.000</option>
                        <option value="acima-50k">Acima de R$ 50.000</option>
                        <option value="nao-definido">Não definido</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="destination" className="block text-sm font-medium text-text mb-2">
                        Destino de Interesse
                      </label>
                      <Input
                        id="destination"
                        name="destination"
                        type="text"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="Ex: São Paulo, Rio de Janeiro, etc."
                        className="w-full h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Datas */}
                <div className="border-b border-border pb-6">
                  <h3 className="text-xl font-semibold text-text mb-4">Período</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="startDate" className="block text-sm font-medium text-text mb-2">
                        Data de Início
                      </label>
                      <Input
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="endDate" className="block text-sm font-medium text-text mb-2">
                        Data de Término
                      </label>
                      <Input
                        id="endDate"
                        name="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Objetivos e Mensagem */}
                <div>
                  <h3 className="text-xl font-semibold text-text mb-4">Objetivos e Detalhes</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="objectives" className="block text-sm font-medium text-text mb-2">
                        Objetivos da Atividade
                      </label>
                      <Textarea
                        id="objectives"
                        name="objectives"
                        value={formData.objectives}
                        onChange={handleChange}
                        placeholder="Descreva os objetivos educacionais ou profissionais desta atividade..."
                        rows={3}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                        Informações Adicionais
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Conte-nos mais sobre suas necessidades específicas, restrições, preferências ou qualquer informação relevante..."
                        rows={4}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-semibold text-lg transition-colors duration-200"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </form>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Seus dados estão seguros conosco. Resposta em até 24 horas úteis.</span>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedDiv animationType="fade-up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-text mb-4">
                Por que escolher a <span className="text-primary">Ecoplace Tour</span>?
              </h2>
            </div>
          </AnimatedDiv>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedDiv animationType="fade-up" delay={200}>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">Orçamento Personalizado</h3>
                <p className="text-muted-foreground">
                  Criamos propostas únicas baseadas nas suas necessidades específicas
                </p>
              </div>
            </AnimatedDiv>

            <AnimatedDiv animationType="fade-up" delay={400}>
              <div className="text-center">
                <div className="w-20 h-20 bg-secundary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-secundary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">Resposta Rápida</h3>
                <p className="text-muted-foreground">
                  Retornamos seu orçamento em até 24 horas úteis
                </p>
              </div>
            </AnimatedDiv>

            <AnimatedDiv animationType="fade-up" delay={600}>
              <div className="text-center">
                <div className="w-20 h-20 bg-florest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-florest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">Experiência Comprovada</h3>
                <p className="text-muted-foreground">
                  Mais de 5 anos criando experiências educacionais transformadoras
                </p>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </section>
    </div>
  );
}
