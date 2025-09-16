import {
  ArrowDownUp,
  Calendar,
  ChevronDown,
  LayoutGridIcon,
  List,
  Star,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { useScreenDetector } from "../../../hooks";

const sortOptions = [
  {
    label: "Mais recentes",
    value: "newest",
    icon: Calendar,
  },
  {
    label: "Mais antigas",
    value: "oldest",
    icon: Calendar,
  },
  {
    label: "Mais populares",
    value: "popular",
    icon: TrendingUp,
  },
  {
    label: "Melhor avaliados",
    value: "rating",
    icon: Star,
  },
];

const viewOptions = [
  {
    label: "Lista",
    value: "list",
    icon: List,
  },
  {
    label: "Grade",
    value: "grid",
    icon: LayoutGridIcon,
  },
];

export function TravelsFilters() {
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("list");
  const [totalResults] = useState(384);
  const { isMobile } = useScreenDetector();

  const handleSortChange = (value: string) => {
    setSortBy(value);
    console.log("Sort changed to:", value);
  };

  const handleViewChange = (value: string) => {
    setViewMode(value);
    console.log("View changed to:", value);
  };

  const getCurrentSortLabel = () => {
    return (
      sortOptions.find((option) => option.value === sortBy)?.label ||
      "Mais recentes"
    );
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6">
      {/* Resultados encontrados */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">
          {totalResults.toLocaleString()} resultados encontrados
        </span>
        {totalResults > 0 && (
          <div className="h-1 w-1 rounded-full bg-muted-foreground/50" />
        )}
        <span className="text-xs text-muted-foreground">
          Ordenado por:{" "}
          <span className="font-medium text-text">{getCurrentSortLabel()}</span>
        </span>
      </div>

      {/* Dropdown de filtros */}
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="solid"
              className="h-10 px-4 gap-2 min-w-[140px] sm:min-w-[160px]"
            >
              <ArrowDownUp className="w-4 h-4" />
              <span className="inline">Organizar</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-64 md:ml-0 md:mr-6 xl:mr-20 ml-6">
            <div className="px-3 py-2">
              <h4 className="text-sm font-semibold text-text/80">
                Ordenar por
              </h4>
            </div>
            {sortOptions.map((option) => {
              const Icon = option.icon;
              return (
                <DropdownMenuItem
                  key={option.value}
                  className="cursor-pointer flex items-center gap-3"
                  onClick={() => handleSortChange(option.value)}
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span>{option.label}</span>
                  {sortBy === option.value && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
                  )}
                </DropdownMenuItem>
              );
            })}

            <DropdownMenuSeparator />

            <div className="px-3 py-2">
              <h4 className="text-sm font-semibold text-text/80">
                Visualização
              </h4>
            </div>
            {viewOptions.map((option) => {
              const Icon = option.icon;
              return (
                <DropdownMenuItem
                  key={option.value}
                  className="cursor-pointer flex items-center gap-3"
                  onClick={() => handleViewChange(option.value)}
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span>{option.label}</span>
                  {viewMode === option.value && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
                  )}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Botão de visualização rápida (apenas mobile) */}
        {isMobile && (
          <Button
            variant="outline"
            size="sm"
            className="h-10 px-3"
            onClick={() => setViewMode(viewMode === "list" ? "grid" : "list")}
          >
            {viewMode === "list" ? (
              <LayoutGridIcon className="w-4 h-4" />
            ) : (
              <List className="w-4 h-4" />
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
