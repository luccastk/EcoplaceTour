import { title, type CardTitleVariants } from "./title.css";

type TitleProps = CardTitleVariants & React.PropsWithChildren;

export function Title({ color, children }: TitleProps) {
  return <h3 className={title({ color })}>{children}</h3>;
}
