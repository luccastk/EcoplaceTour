import { layout } from "./inputs.css";

export function Inputs({ children }: React.PropsWithChildren) {
  return <div className={layout}>{children}</div>;
}
