import { Contact } from "../../components/Contact/Contact";
import { Enterprise } from "../../components/Enterprise/Enterprise";
import { Hero } from "../../components/Hero/Hero";
import { Service } from "../../components/Service/Service";

export function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Enterprise />
      <Contact />
    </>
  );
}
