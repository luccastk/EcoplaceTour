import { Typography } from "../components/ui";
import { container } from "../styles/container";

export function About() {
  return (
    <>
      <section className="pt-[86px] bg-primary">
        <div className={`${container}`}>
          <div className="space-y-3">
            <Typography
              variant="white"
              size="title2"
              weight="bold"
              className="text-center"
            >
              Sobre a EcoPlace
            </Typography>
            <Typography variant="white" className="text-center">
              Conectando estudantes ao mundo corporativo através de experiências
              educacionais únicas e transformadoras.
            </Typography>
          </div>
        </div>
        <div></div>
      </section>
      <section className="bg-background">
        <div className={container}>
          <div className="space-y-3">
            <Typography size="title2" className="text-center">
              Nossa Missão
            </Typography>
            <Typography>
              A EcoPlace nasceu com o propósito de revolucionar a educação
              através de experiências práticas e imersivas. Acreditamos que o
              aprendizado verdadeiro acontece quando os estudantes podem
              vivenciar na prática aquilo que estudam em sala de aula. Nossa
              plataforma conecta escolas a empresas líderes de mercado,
              proporcionando visitas técnicas que inspiram, educam e transformam
              a perspectiva dos estudantes sobre o futuro profissional.
            </Typography>
          </div>
        </div>
      </section>
    </>
  );
}
