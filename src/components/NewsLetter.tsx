import { Button, Input, Typography } from "./ui";

export const NewsLetter = () => {
  return (
    <div className="w-full flex flex-col bg-gradient-to-b from-primary to-background items-center space-y-5 p-16">
      <Typography variant="white" size="title2" weight="semibold">
        Quer ficar por dentro de novidades?
      </Typography>
      <Typography>
        Deixe o seu nome e o seu melhor e-mail nos campos abaixo e nós vamos lhe
        informar sobre as melhores negócios e todos os lançamentos!
      </Typography>
      <form action="" className="w-100 space-y-3">
        <Input placeholder="Digite seu nome" />
        <Input placeholder="Digite seu melhor e-mail" />
        <Button className="w-full">Me Avise!</Button>
      </form>
    </div>
  );
};
