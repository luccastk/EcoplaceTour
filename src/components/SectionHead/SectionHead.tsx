import { Typography } from "../Typography/Typography";
import { container, head } from "./sectionHead.css";

type SectionHeadProps = {
  title: string;
  subtitle: string;
  white?: boolean;
};

export function SectionHead({
  title,
  subtitle,
  white = false,
}: SectionHeadProps) {
  return (
    <div className={head}>
      <Typography
        tag="h2"
        variant="h2"
        w="bold"
        align="center"
        color={white ? "white" : "text"}
      >
        {title}
      </Typography>
      <div className={container}>
        <Typography
          variant="h3"
          align="center"
          color={white ? "white" : "light-green"}
        >
          {subtitle}
        </Typography>
      </div>
    </div>
  );
}
