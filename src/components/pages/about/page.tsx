import { About } from ".";

export function AboutPage() {
  return (
    <>
      <section className="pt-46 pb-20 px-6 xl:px-20 bg-gradient-to-br from-primary/5 via-background to-secundary/5">
        <About.Title />
      </section>

      <section className="py-20 px-6 xl:px-20 bg-gradient-to-r from-primary/5 to-secundary/5">
        <About.Mission />
      </section>

      <section className="pt-46 px-6 xl:px-20">
        <About.Pillar />
      </section>
    </>
  );
}
