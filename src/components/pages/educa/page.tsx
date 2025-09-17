import { EducaActions } from "./actions";
import { EducaFilters } from "./filters";
import { EducaGridSection } from "./grid-section";
import { EducaTitle } from "./title";
import { EducaVisitsList } from "./visit-list";

export function EducaPage() {
  return (
    <section className="pt-46 px-6 xl:px-20">
      <EducaTitle />

      <div className="mb-12">
        <EducaActions />
      </div>

      <div className="mb-8">
        <EducaFilters />
      </div>

      <div id="visits-section">
        <EducaGridSection>
          <EducaVisitsList />
        </EducaGridSection>
      </div>
    </section>
  );
}
