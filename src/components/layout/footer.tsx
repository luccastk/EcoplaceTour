import Logo from "../../assets/logo.png";
import { Button, Input } from "../ui";

const CTAForm = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/20 to-secundary/5">
      <div className="max-w-4xl mx-auto px-6 xl:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-text mb-6 relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:w-28 after:-translate-x-1/2 after:h-[2px] after:bg-primary">
            🌱 Fique por dentro das novidades sustentáveis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Receba dicas exclusivas, ofertas especiais e as últimas notícias
            sobre turismo ecológico diretamente no seu e-mail.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50">
          <form className="max-w-md mx-auto space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-text">
                Nome completo
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                className="h-12 text-base"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-text">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="h-12 text-base"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-secundary hover:from-primary/90 hover:to-secundary/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              🚀 Quero receber as novidades
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              🔒 Seus dados estão seguros conosco • ✉️ Sem spam, apenas conteúdo
              relevante
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export function Footer() {
  return (
    <>
      <CTAForm />

      <footer className="space-y-8 py-20 bg-gradient-to-br from-primary/20 to-secundary/5 px-6 xl:px-20">
        <h1 className="font-semibold text-center mb-12 relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:w-28 after:-translate-x-1/2 after:h-[2px] after:bg-primary">
          EcoplaceTour - Experiências que Conectam Teoria e Prática!
        </h1>

        <div className="space-y-4">
          <h2 className="relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-[2px] after:bg-primary">
            Conheça nossa{" "}
            <span className="text-primary font-bold">proposta!</span>
          </h2>
          <p>
            Nossa maior satisfação é levar você aos bastidores de empresas e
            instituições, transformando conhecimento em experiência real.
          </p>
        </div>

        <div className="space-y-4 mb-24">
          <h2 className="relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-[2px] after:bg-primary">
            Quer acelerar sua{" "}
            <span className="text-primary font-bold"> carreira?</span>
          </h2>
          <p>
            Fale com nossa equipe e receba as próximas datas, roteiros e vagas
            disponíveis para visitas técnicas e viagens imersivas.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 lg:w-2xl mx-auto border-t border-gray-500/50 pt-12">
          <img src={Logo} alt="Logo" className="w-20 h-20 shrink-0" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EcoplaceTour. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
