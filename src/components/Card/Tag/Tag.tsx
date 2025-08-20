import type { ReactNode } from "react";
import { Typography } from "../../Typography";
import { tag } from "./Tag.css";

type CardTagsProps = {
  icon: ReactNode;
  text: string;
};

export function Tag({ icon, text }: CardTagsProps) {
  return (
    <div className={tag}>
      {icon}
      <Typography align="center">{text}</Typography>
    </div>
  );
}
