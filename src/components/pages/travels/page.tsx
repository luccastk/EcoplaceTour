import { TravelsActions } from "./actions";
import { TravelsFilters } from "./filters";
import { TravelsTitle } from "./title";

export function TravelsPage() {
  return (
    <>
      <section className="pt-46 px-6 xl:px-20">
        <TravelsTitle />
      </section>

      <section className="px-6 xl:px-20 mb-12">
        <TravelsActions />
      </section>

      <section className="px-6 xl:px-20">
        <TravelsFilters />
      </section>

      <section className="px-6 xl:px-20 mb-12"></section>
    </>
  );
}
