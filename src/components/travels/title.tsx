import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui";

interface TrevelsTitleProps {
  scrollPrev: () => void;
  scrollNext: () => void;
}

export function TrevelsTitle({
  scrollPrev,
  scrollNext,
}: Readonly<TrevelsTitleProps>) {
  return (
    <div className="flex flex-row items-center justify-between gap-4 mb-12">
      <div className="flex flex-col gap-2">
        <h1 className="relative font-serif pb-4 text-3xl font-bold text-gray-900 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-1/4 before:h-[2px] before:bg-primary">
          Serviços de Viagens
        </h1>
        <p className="text-gray-600 text-lg mt-2 pr-20 ">
          Além das visitas técnicas, organizamos viagens completas para levar
          você e sua família se conectarem com .
        </p>
      </div>

      <div className="hidden md:flex flex-row gap-2 items-end mt-auto mr-6 xl:mr-20">
        <Button variant="secondary" size="icon" onClick={scrollPrev}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button variant="secondary" size="icon" onClick={scrollNext}>
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
