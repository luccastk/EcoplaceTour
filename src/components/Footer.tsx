import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { container } from "../styles/container";
import { Logo } from "./Logo";
import { NewsLetter } from "./NewsLetter";
import { Typography } from "./ui";

export function Footer() {
  return (
    <footer className="bg-background">
      <NewsLetter />
      <div className={container}>
        <div className="flex justify-between">
          <div className="max-w-[40ch] space-y-4">
            <Logo />
            <Typography size="md">
              Conectando educação e indústria através de experiências
              transformadoras que preparam os estudantes para o futuro.
            </Typography>
          </div>
          <div className="flex space-x-10">
            <FaInstagram className="cursor-pointer h-10 w-10 text-text/70 transition-all hover:scale-95" />
            <FaFacebook className="cursor-pointer h-10 w-10 text-text/70 transition-all hover:scale-95" />
            <FaLinkedin className="cursor-pointer h-10 w-10 text-text/70 transition-all hover:scale-95" />
          </div>
        </div>
        <hr className="my-8 text-text/20" />
        <Typography size="xs" className="text-center">
          © 2024 EcoPlace. Todos os direitos reservados.
        </Typography>
      </div>
    </footer>
  );
}
