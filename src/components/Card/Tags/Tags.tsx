import type React from "react";
import { tags } from "./tags.css";

type TagsProps = React.PropsWithChildren;

export function Tags({ children }: TagsProps) {
  return <div className={tags}>{children}</div>;
}
