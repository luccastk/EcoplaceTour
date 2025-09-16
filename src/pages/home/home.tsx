import { ContactForm } from "../../components/contact";
import { Hero } from "../../components/hero";
import { Service } from "../../components/service";
import { TechnicalVisits } from "../../components/technical-visits";
import { Trevels } from "../../components/travels";
import { AboutSection } from "./about-section";

export function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TechnicalVisits />
      <Service />
      <Trevels />
      <ContactForm />
    </>
  );
}
