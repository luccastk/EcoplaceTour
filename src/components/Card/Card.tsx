import type React from "react";
import { card, type CardVariants } from "./card.css";
import { Description } from "./Description/Description";
import { Tag } from "./Tag/Tag";
import { Tags } from "./Tags/Tags";
import { Title } from "./Title/Title";

type CardProps = React.PropsWithChildren & CardVariants;

export function Card({ variant, children }: CardProps) {
  return <div className={card({ variant })}>{children}</div>;
}

Card.Description = Description;
Card.Title = Title;
Card.Tag = Tag;
Card.Tags = Tags;
