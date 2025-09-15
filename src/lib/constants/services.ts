import {
  BookOpen,
  Briefcase,
  Calendar,
  GraduationCap,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  category: string;
  popular?: boolean;
  icon: LucideIcon;
}

export const ServiceItems: Service[] = [
  {
    id: 1,
    title: "Experiências Educacionais",
    description:
      "Visitas técnicas planejadas por especialistas em educação para maximizar o aprendizado prático dos estudantes.",
    features: [
      "Roteiros personalizados",
      "Material didático",
      "Guias especializados",
      "Certificado de participação",
      "Networking com profissionais",
    ],
    price: "A partir de R$ 280",
    duration: "3-6 horas",
    category: "Educacional",
    popular: true,
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Visita Pedagógica",
    description:
      "Experiência educativa guiada, conectando teoria e prática de forma dinâmica e organizada.",
    features: [
      "Temas adaptados",
      "Experiências práticas e interativas",
      "Acompanhamento de educadores",
      "Material de apoio",
      "Grupo reduzido",
    ],
    price: "A partir de R$ 890",
    duration: "2-5 dias",
    category: "Imersão",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Segurança Garantida",
    description:
      "Todos os procedimentos de segurança são rigorosamente seguidos, com equipamentos de proteção e acompanhamento profissional.",
    features: [
      "EPIs fornecidos",
      "Seguro total",
      "Protocolos de segurança",
      "Mentoria contínua",
      "Relatórios detalhados",
    ],
    price: "A partir de R$ 1.500",
    duration: "1-3 meses",
    category: "Consultoria",
    icon: Shield,
  },
  {
    id: 4,
    title: "Workshops Corporativos",
    description:
      "Treinamentos práticos e workshops para equipes, focados em inovação e desenvolvimento profissional.",
    features: [
      "Conteúdo personalizado",
      "Instrutores especializados",
      "Material prático",
      "Certificação",
      "Follow-up pós-evento",
    ],
    price: "A partir de R$ 450",
    duration: "4-8 horas",
    category: "Treinamento",
    icon: Briefcase,
  },
  {
    id: 5,
    title: "Programas de Intercâmbio",
    description:
      "Programas de intercâmbio acadêmico e profissional para estudantes e educadores.",
    features: [
      "Parcerias internacionais",
      "Suporte completo",
      "Documentação inclusa",
      "Orientação cultural",
      "Acompanhamento 24/7",
    ],
    price: "A partir de R$ 2.500",
    duration: "1-6 meses",
    category: "Internacional",
    icon: Users,
  },
  {
    id: 6,
    title: "Eventos e Conferências",
    description:
      "Organização de eventos educacionais, conferências e seminários para networking e aprendizado.",
    features: [
      "Planejamento completo",
      "Palestrantes renomados",
      "Estrutura profissional",
      "Networking estruturado",
      "Gravação e materiais",
    ],
    price: "A partir de R$ 3.200",
    duration: "1-3 dias",
    category: "Eventos",
    icon: Calendar,
  },
];
