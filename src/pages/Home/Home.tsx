import { Hero } from "../../components/Hero/Hero";

export function Home() {
  return (
    <div
      style={{
        minWidth: "100svw",
        position: "relative",
      }}
    >
      <Hero />
      <div style={{ height: "1400px" }}></div>
    </div>
  );
}
