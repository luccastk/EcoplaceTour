import type React from "react";
import { card } from "./card.css";

export function Card({ children }: React.PropsWithChildren) {
  return <div className={card}>{children}</div>;
}
