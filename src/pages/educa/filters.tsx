import { ArrowDownUp, ChevronDown } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

const sortOptions = [
  {
    label: "Mais recentes",
    value: "newest",
  },
  {
    label: "Mais antigas",
    value: "oldest",
  },
  {
    label: "Mais populares",
    value: "popular",
  },
];

const viewOptions = [
  {
    label: "Lista",
    value: "list",
  },
  {
    label: "Grupo",
    value: "grid",
  },
];

export function EducaFilters() {
  return (
    <div className="flex justify-between py-6">
      <span>384 resultados encontrados</span>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="solid">
            <ArrowDownUp className="w-4 h-4" />
            <span>Organizar & Visualizar</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <div className="px-3 py-2">
            <h4 className="text-sm font-semibold text-text/80">Organizar</h4>
          </div>
          {sortOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              className="cursor-pointer"
              onClick={() => console.log("Sort:", option.value)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />

          <div className="px-3 py-2">
            <h4 className="text-sm font-semibold text-text/80">Visualizar</h4>
          </div>
          {viewOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              className="cursor-pointer"
              onClick={() => console.log("View:", option.value)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
