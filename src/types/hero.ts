import type { IconType } from "react-icons";
import { FiArrowDownRight } from "react-icons/fi";
import { IoBookOutline, IoPeopleSharp } from "react-icons/io5";

export interface CardHero {
  id: number;
  icon: IconType;
  title: string;
  description: string;
}

export const hero: CardHero[] = [
  {
    id: 0,
    icon: IoBookOutline,
    title: "Educação Prática",
    description: "Aprendizado real dentro das empresas",
  },
  {
    id: 1,
    icon: IoPeopleSharp,
    title: "Networking",
    description: "Conexões valiosas para o futuro",
  },
  {
    id: 2,
    icon: FiArrowDownRight,
    title: "Inspiração",
    description: "Motivação para carreiras futuras",
  },
];
