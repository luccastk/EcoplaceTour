import { ContactSection } from "../components/ContactSection";
import { EnterpriseSection } from "../components/EnterpriseSection";
import { Hero } from "../components/Hero";
import { ServiceSection } from "../components/ServiceSection";

export function Home() {
  return (
    <>
      <Hero />
      <EnterpriseSection />
      <ServiceSection />
      <ContactSection />
    </>
  );
}
