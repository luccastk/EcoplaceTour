import type { IconType } from "react-icons";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export interface ContactItem {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const contactItens: ContactItem[] = [
  {
    id: 0,
    icon: FaPhoneAlt,
    title: "Telefone",
    text: "(11) 9 3288-5101",
  },
  {
    id: 1,
    icon: MdEmail,
    title: "Email",
    text: "contato@gmail.com",
  },
  {
    id: 2,
    icon: FaLocationDot,
    title: "Endereço",
    text: "Av. Paulista 1234, São Paulo, SP - 09520-320",
  },
];
