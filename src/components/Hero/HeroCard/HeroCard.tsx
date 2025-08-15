import type { ReactNode } from "react";
import { Typography } from "../../Typography/Typography";
import { card } from "./heroCard.css";

type HeroCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function HeroCard({ icon, title, description }: HeroCardProps) {
  return (
    <div className={card}>
      <i>{icon}</i>
      <Typography tag="h3" variant="h3" w="bold" color="white">
        {title}
      </Typography>
      <Typography tag="p" variant="h4" color="white" align="center">
        {description}
      </Typography>
    </div>
  );
}
