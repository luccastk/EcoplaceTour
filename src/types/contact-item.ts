import type { ReactNode } from "react";

export interface ContactItem {
  id: number;
  icon: ReactNode;
  title: string;
  text: string;
}
