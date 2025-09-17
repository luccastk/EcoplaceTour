import { Book, MapPin, SearchIcon, Star, X } from "lucide-react";
import { useState } from "react";
import { useScreenDetector } from "../../../hooks";
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui";
import { Chip } from "../../ui/chip";

export function TravelsActions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedSort, setSelectedSort] = useState("all");
  const { isDesktop } = useScreenDetector();

  const categories = [
    { value: "all", label: "Categorias" },
    { value: "educational", label: "Educacional" },
    { value: "immersive", label: "Imersão" },
    { value: "consulting", label: "Consultoria" },
    { value: "workshop", label: "Workshop" },
  ];

  const locations = [
    { value: "all", label: "Localizações" },
    { value: "sp", label: "São Paulo" },
    { value: "rj", label: "Rio de Janeiro" },
    { value: "mg", label: "Minas Gerais" },
    { value: "rs", label: "Rio Grande do Sul" },
    { value: "online", label: "Online" },
  ];

  const popularity = [
    { value: "all", label: "Ordenar" },
    { value: "popular", label: "Mais populares" },
    { value: "recent", label: "Mais recentes" },
    { value: "rating", label: "Melhor avaliados" },
  ];

  const removeFilter = (filterToRemove: string) => {
    setActiveFilters((prev) =>
      prev.filter((filter) => filter !== filterToRemove)
    );
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
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="h-12 min-w-[180px]">
              <div className="flex items-center gap-2">
                <Book className="w-4 h-4 text-primary" />
                <SelectValue placeholder="Categorias" />
              </div>
            </SelectTrigger>
            <SelectContent
              position="popper"
              sideOffset={4}
              className="min-w-[180px]"
            >
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="h-12 min-w-[180px]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <SelectValue placeholder="Localização" />
              </div>
            </SelectTrigger>
            <SelectContent
              position="popper"
              sideOffset={4}
              className="min-w-[180px]"
            >
              {locations.map((location) => (
                <SelectItem key={location.value} value={location.value}>
                  {location.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger className="h-12 min-w-[180px]">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <SelectValue placeholder="Ordenar" />
              </div>
            </SelectTrigger>
            <SelectContent
              position="popper"
              sideOffset={4}
              className="min-w-[180px]"
            >
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
      {(activeFilters.length > 0 ||
        searchTerm ||
        selectedCategory !== "all" ||
        selectedLocation !== "all" ||
        selectedSort !== "all") && (
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {searchTerm && (
              <Chip
                label={`Pesquisa: "${searchTerm}"`}
                icon={X}
                className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                onClick={() => setSearchTerm("")}
              />
            )}
            {selectedCategory !== "all" && (
              <Chip
                label={`Categoria: ${
                  categories.find((c) => c.value === selectedCategory)?.label
                }`}
                icon={X}
                className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                onClick={() => setSelectedCategory("all")}
              />
            )}
            {selectedLocation !== "all" && (
              <Chip
                label={`Local: ${
                  locations.find((l) => l.value === selectedLocation)?.label
                }`}
                icon={X}
                className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                onClick={() => setSelectedLocation("all")}
              />
            )}
            {selectedSort !== "all" && (
              <Chip
                label={`Ordenar: ${
                  popularity.find((p) => p.value === selectedSort)?.label
                }`}
                icon={X}
                className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                onClick={() => setSelectedSort("all")}
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
