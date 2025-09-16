import { AboutSection } from "./about-section";
import { ContactSection } from "./contact-section";
import { Hero } from "./hero";
import { Services } from "./services";
import { Travels } from "./travels";

export function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <Travels />
      <ContactSection />
    </>
  );
}
