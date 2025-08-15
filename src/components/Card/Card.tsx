import type React from "react";
import { card } from "./card.css";

type CardProps = React.PropsWithChildren;

export function Card({ children }: CardProps) {
  return <div className={card}>{children}</div>;
}
