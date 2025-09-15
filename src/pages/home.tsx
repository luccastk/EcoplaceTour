import { About } from "../components/about";
import { ContactForm } from "../components/contact";
import { Hero } from "../components/hero";
import { Service } from "../components/service";
import { TechnicalVisits } from "../components/technical-visits";
import { Trevels } from "../components/travels";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechnicalVisits />
      <Service />
      <Trevels />
      <ContactForm />
    </>
  );
}
