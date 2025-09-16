import { Book, MapPin, SearchIcon, Star, X, Filter } from "lucide-react";
import { useState } from "react";
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../../ui";
import { Chip } from "../../ui/chip";
import { useScreenDetector } from "../../../hooks";

export function EducaActions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const { isDesktop } = useScreenDetector();

  const categories = [
    { value: "all", label: "Todas as categorias" },
    { value: "educational", label: "Educacional" },
    { value: "immersive", label: "Imersão" },
    { value: "consulting", label: "Consultoria" },
    { value: "workshop", label: "Workshop" },
  ];

  const locations = [
    { value: "all", label: "Todas as localizações" },
    { value: "sp", label: "São Paulo" },
    { value: "rj", label: "Rio de Janeiro" },
    { value: "mg", label: "Minas Gerais" },
    { value: "rs", label: "Rio Grande do Sul" },
    { value: "online", label: "Online" },
  ];

  const popularity = [
    { value: "all", label: "Todas" },
    { value: "popular", label: "Mais populares" },
    { value: "recent", label: "Mais recentes" },
    { value: "rating", label: "Melhor avaliados" },
  ];

  const removeFilter = (filterToRemove: string) => {
    setActiveFilters((prev) =>
      prev.filter((filter) => filter !== filterToRemove)
    );
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setSearchTerm("");
  };

  return (
    <div className="space-y-6">
      {/* Barra de pesquisa e filtros principais */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="search"
            icon={<SearchIcon className="w-4 h-4 text-primary" />}
            placeholder={
              isDesktop
                ? "Pesquisar por nome, localização ou categoria..."
                : "Pesquisar..."
            }
            className="h-12"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Select>
            <SelectTrigger className="h-12 min-w-[180px]">
              <div className="flex items-center gap-2">
                <Book className="w-4 h-4 text-primary" />
                <span>Categorias</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-12 min-w-[180px]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Localização</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.value} value={location.value}>
                  {location.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-12 min-w-[160px]">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span>Ordenar</span>
              </div>
            </SelectTrigger>
            <SelectContent>
              {popularity.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Filtros ativos */}
      {(activeFilters.length > 0 || searchTerm) && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Filtros ativos ({activeFilters.length + (searchTerm ? 1 : 0)})
              </span>
            </div>
            <button
              onClick={clearAllFilters}
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Limpar todos
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {searchTerm && (
              <Chip
                label={`Pesquisa: "${searchTerm}"`}
                icon={X}
                className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                onClick={() => setSearchTerm("")}
              />
            )}
            {activeFilters.map((filter) => (
              <Chip
                key={filter}
                label={filter}
                icon={X}
                className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                onClick={() => removeFilter(filter)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
