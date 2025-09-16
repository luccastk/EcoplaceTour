import { Purpose } from ".";

export function PurposePage() {
  return (
    <>
      <section className="pt-46 pb-20 px-6 xl:px-20 bg-gradient-to-br from-primary/5 via-background to-secundary/5">
        <Purpose.Title />
      </section>

      <section className="py-20 px-6 xl:px-20">
        <Purpose.Pillar />
      </section>

      <section className="py-20 px-6 xl:px-20 bg-gradient-to-r from-primary/5 to-secundary/5">
        <Purpose.Journey />
      </section>
    </>
  );
}
