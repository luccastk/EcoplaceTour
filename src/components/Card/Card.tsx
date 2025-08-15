import type { ReactNode } from "react";
import { Typography } from "../Typography/Typography";
import { card } from "./card.css";

type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  tags?: [
    {
      tagIcon: ReactNode;
      text: string;
    }
  ];
};

export function Card({ icon, title, description, tags }: CardProps) {
  return (
    <div className={card}>
      <i>{icon}</i>
      <Typography tag="h3" variant="h3" w="bold" color="white">
        {title}
      </Typography>
      <Typography tag="p" variant="h4" color="white" align="center">
        {description}
      </Typography>
      <div>
        {tags?.map((tag) => (
          <div>
            <i>{tag.tagIcon}</i>
            <Typography>{tag.text}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
