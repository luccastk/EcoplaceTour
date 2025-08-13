import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";

export function Home() {
  return (
    <div style={{ minHeight: "100svh" }}>
      <Header />
      <Hero />
    </div>
  );
}
