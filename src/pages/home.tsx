import { About } from "../components/about";
import { Hero } from "../components/hero";
import { Service } from "../components/service";
import { TechnicalVisits } from "../components/technical-visits";
import { Trevels } from "../components/travels";

export function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TechnicalVisits />
      <Service />
      <Trevels />
    </div>
  );
}
