import type { IconType } from "react-icons";
import { FaSchool } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";

export interface CardService {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  tags: CardTag[];
}

export interface CardTag {
  id: number;
  icon: IconType;
  label: string;
}

export const services: CardService[] = [
  {
    id: 0,
    icon: IoSchoolOutline,
    title: "Experiências Educacionais",
    description:
      "Visitas técnicas planejadas por especialistas em educação para maximizar o aprendizado prático dos estudantes.",
    tags: [
      {
        id: 0,
        icon: IoMdCheckmarkCircleOutline,
        label: "Roteiros personalizados",
      },
      { id: 1, icon: IoMdCheckmarkCircleOutline, label: "Material didático" },
      {
        id: 2,
        icon: IoMdCheckmarkCircleOutline,
        label: "Guias especializados",
      },
    ],
  },
  {
    id: 1,
    icon: FaSchool,
    title: "Visita Pedagógica",
    description:
      "Experiência educativa guiada, conectando teoria e prática de forma dinâmica e organizada.",
    tags: [
      { id: 0, icon: IoMdCheckmarkCircleOutline, label: "Temas adaptados" },
      {
        id: 1,
        icon: IoMdCheckmarkCircleOutline,
        label: "Experiências práticas e interativas",
      },
      {
        id: 2,
        icon: IoMdCheckmarkCircleOutline,
        label: "Acompanhamento de educadores",
      },
    ],
  },
  {
    id: 2,
    icon: FiShield,
    title: "Segurança Garantida",
    description:
      "Todos os procedimentos de segurança são rigorosamente seguidos, com equipamentos de proteção e acompanhamento profissional.",
    tags: [
      { id: 0, icon: IoMdCheckmarkCircleOutline, label: "EPIs fornecidos" },
      { id: 1, icon: IoMdCheckmarkCircleOutline, label: "Seguro total" },
      {
        id: 2,
        icon: IoMdCheckmarkCircleOutline,
        label: "Protocolos de segurança",
      },
    ],
  },
];
