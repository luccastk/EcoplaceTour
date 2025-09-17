import { MapPin } from "lucide-react";
import { ANIMATION_DELAY_200 } from "../../../lib/constants";
import { AnimatedDiv } from "../../ui/animations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../../ui/select";
import { Textarea } from "../../ui/textarea";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  interestType: string;
  specificLocation?: string;
  additionalInfo?: string;
}

interface BudgetActionsProps {
  readonly formData: FormData;
  readonly onFormDataChange: (data: FormData) => void;
}

export function BudgetActions({
  formData,
  onFormDataChange,
}: BudgetActionsProps) {
  const handleInterestTypeChange = (type: string) => {
    onFormDataChange({
      ...formData,
      interestType: type,
      specificLocation: "", // Reset location when changing type
      additionalInfo: "", // Reset additional info when changing type
    });
  };

  const handleLocationChange = (location: string) => {
    onFormDataChange({
      ...formData,
      specificLocation: location,
    });
  };

  const handleAdditionalInfoChange = (info: string) => {
    onFormDataChange({
      ...formData,
      additionalInfo: info,
    });
  };

  // Opções para Visita Técnica
  const technicalVisitLocations = [
    { value: "fazenda-sustentavel", label: "Fazenda Sustentável" },
    { value: "usina-solar", label: "Usina Solar" },
    { value: "cooperativa-agricola", label: "Cooperativa Agrícola" },
    { value: "centro-reciclagem", label: "Centro de Reciclagem" },
    { value: "parque-ecologico", label: "Parque Ecológico" },
    { value: "outro-tecnico", label: "Outro (especifique)" },
  ];

  // Opções para Viagem Turística
  const travelLocations = [
    { value: "costa-verde", label: "Costa Verde - RJ" },
    { value: "chapada-diamantina", label: "Chapada Diamantina - BA" },
    { value: "bonito-ms", label: "Bonito - MS" },
    { value: "fernando-noronha", label: "Fernando de Noronha - PE" },
    { value: "lencois-maranhenses", label: "Lençóis Maranhenses - MA" },
    { value: "outro-turismo", label: "Outro destino" },
  ];

  return (
    <AnimatedDiv
      animationType="fade-up"
      delay={ANIMATION_DELAY_200}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-background/50 rounded-2xl p-8 border border-border/50">
        <h3 className="text-2xl font-semibold text-text mb-6 flex items-center gap-3">
          <MapPin className="w-6 h-6 text-primary" />
          Tipo de Interesse
        </h3>

        <div className="space-y-6">
          <p className="text-sm font-medium text-text">
            Selecione o tipo de experiência que mais te interessa *
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => handleInterestTypeChange("visita-tecnica")}
              className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                formData.interestType === "visita-tecnica"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border hover:border-primary/50 hover:bg-background/80"
              }`}
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text">Visita Técnica</h4>
                  <p className="text-sm text-muted-foreground">Ecoplace Edu</p>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleInterestTypeChange("viagem-turistica")}
              className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                formData.interestType === "viagem-turistica"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border hover:border-primary/50 hover:bg-background/80"
              }`}
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text">Viagem Turística</h4>
                  <p className="text-sm text-muted-foreground">
                    Ecoplace Travel
                  </p>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleInterestTypeChange("outro")}
              className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                formData.interestType === "outro"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border hover:border-primary/50 hover:bg-background/80"
              }`}
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-text">Outro</h4>
                  <p className="text-sm text-muted-foreground">
                    Especifique abaixo
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Opções dinâmicas baseadas na seleção */}
          {formData.interestType === "visita-tecnica" && (
            <div className="mt-6 space-y-4">
              <h4 className="text-lg font-semibold text-text">
                Selecione o local de interesse para visita técnica:
              </h4>
              <Select
                value={formData.specificLocation || ""}
                onValueChange={handleLocationChange}
              >
                <SelectTrigger className="h-12">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Escolha o local</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {technicalVisitLocations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {formData.interestType === "viagem-turistica" && (
            <div className="mt-6 space-y-4">
              <h4 className="text-lg font-semibold text-text">
                Selecione o destino de interesse:
              </h4>
              <Select
                value={formData.specificLocation || ""}
                onValueChange={handleLocationChange}
              >
                <SelectTrigger className="h-12">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Escolha o destino</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {travelLocations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {formData.interestType === "outro" && (
            <div className="mt-6 space-y-4">
              <h4 className="text-lg font-semibold text-text">
                Conte-nos mais sobre sua necessidade:
              </h4>
              <Textarea
                placeholder="Descreva o tipo de experiência ou serviço que você está procurando..."
                value={formData.additionalInfo || ""}
                onChange={(e) => handleAdditionalInfoChange(e.target.value)}
                className="min-h-[120px] resize-none"
              />
            </div>
          )}

          {/* Campo adicional para especificações */}
          {(formData.specificLocation?.includes("outro") ||
            formData.interestType === "outro") && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-text">
                Especificações adicionais:
              </p>
              <Textarea
                placeholder="Forneça mais detalhes sobre sua solicitação..."
                value={formData.additionalInfo || ""}
                onChange={(e) => handleAdditionalInfoChange(e.target.value)}
                className="min-h-[100px] resize-none"
              />
            </div>
          )}
        </div>
      </div>
    </AnimatedDiv>
  );
}
