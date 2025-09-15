import { About } from "../components/about";
import { Hero } from "../components/hero";
import { TechnicalVisits } from "../components/technical-visits";
import { Trevels } from "../components/trevels";

export function Home() {
  return (
    <div>
      <Hero />
      <About /> 
      <Trevels />
      <TechnicalVisits />
    </div>
  );
}
