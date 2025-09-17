import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { Hero } from "./hero";
import { EducaVisits } from "./educa-visits";
import { Services } from "./services";
import { Travels } from "./travels";

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <EducaVisits />
      <Services />
      <Travels />
      <ContactSection />
    </>
  );
}
