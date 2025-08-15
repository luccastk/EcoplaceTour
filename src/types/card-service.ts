import { type ReactNode } from "react";

export interface CardService {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
  tags: CardTag[];
}

export interface CardTag {
  id: number;
  icon: ReactNode;
  label: string;
}
