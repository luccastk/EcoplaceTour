import { Book, MapPin, SearchIcon, Star, X } from "lucide-react";
import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../../components/ui";
import { Chip } from "../../components/ui/chip";

export function EducaActions() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Input
          type="search"
          icon={<SearchIcon className="w-4 h-4 text-primary" />}
          placeholder="Pesquisar"
          className="w-2xl h-11.5"
        />
        <Select>
          <SelectTrigger className="flex items-center gap-2">
            <Book className="w-4 h-4 text-primary" />
            Categorias
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="educational">Educacional</SelectItem>
            <SelectItem value="immersive">Imersão</SelectItem>
            <SelectItem value="consulting">Consultoria</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Localização
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="educational">Educacional</SelectItem>
            <SelectItem value="immersive">Imersão</SelectItem>
            <SelectItem value="consulting">Consultoria</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />
            Popular
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="educational">Educacional</SelectItem>
            <SelectItem value="immersive">Imersão</SelectItem>
            <SelectItem value="consulting">Consultoria</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Chip
          label="Todas"
          icon={X}
          className="bg-primary/20 rounded-full text-sm"
        />
        <Chip
          label="Todas"
          icon={X}
          className="bg-primary/20 rounded-full text-sm"
        />
        <Chip
          label="Todas"
          icon={X}
          className="bg-primary/20 rounded-full text-sm"
        />
      </div>
    </div>
  );
}
