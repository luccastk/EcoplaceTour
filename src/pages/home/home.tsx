import { Service } from "../../components/service";
import { TechnicalVisits } from "../../components/technical-visits";
import { Trevels } from "../../components/travels";
import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { Hero } from "./hero";

export function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TechnicalVisits />
      <Service />
      <Trevels />
      <ContactSection />
    </>
  );
}
