import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui";

interface TechnicalVisitsTitleProps {
  scrollPrev: () => void;
  scrollNext: () => void;
}

export function TechnicalVisitsTitle({
  scrollPrev,
  scrollNext,
}: Readonly<TechnicalVisitsTitleProps>) {
  return (
    <div className="flex flex-row items-center justify-between gap-4 mb-12">
      <div className="hidden md:flex flex-row items-end gap-2 mt-auto ml-6 xl:ml-20">
        <Button variant="secondary" size="icon" onClick={scrollPrev}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button variant="secondary" size="icon" onClick={scrollNext}>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <div className="flex flex-col gap-2 ml-auto pl-20 pr-6 xl:pr-20">
        <h2 className="relative pb-4 text-3xl font-bold text-gray-900 before:content-[''] before:absolute before:right-0 before:bottom-0 before:w-1/4 before:h-[2px] before:bg-primary text-right">
          Visitas Técnicas
        </h2>
        <p className="text-gray-600 text-lg mt-2 text-right">
          Descubra as visitas técnicas mais populares e garanta sua participação
          em uma das melhores experiências de aprendizado prático.
        </p>
      </div>
    </div>
  );
}
