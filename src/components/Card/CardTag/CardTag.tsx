import type { ReactNode } from "react";
import { Icon } from "../../Icon/Icon";
import { Typography } from "../../Typography/Typography";
import { content, type CardTagVariants } from "./CardTag.css";

type CardTagsProps = {
  icon: ReactNode;
  text: string;
} & CardTagVariants;

export function CardTag({ icon, text, justify }: CardTagsProps) {
  return (
    <div className={content({ justify })}>
      <Icon size="sm">{icon}</Icon>
      <Typography align="center">{text}</Typography>
    </div>
  );
}
