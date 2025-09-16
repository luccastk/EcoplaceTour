import { User } from "lucide-react";
import { ANIMATION_DELAY_0 } from "../../../constants";
import { AnimatedDiv } from "../../ui/animations";
import { Input } from "../../ui/input";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  interestType: string;
  specificLocation?: string;
  additionalInfo?: string;
}

interface BudgetFormProps {
  readonly formData: FormData;
  readonly onFormDataChange: (data: FormData) => void;
}

export function BudgetForm({ formData, onFormDataChange }: BudgetFormProps) {
  const handleInputChange = (field: keyof FormData, value: string) => {
    const newData = {
      ...formData,
      [field]: value,
    };
    onFormDataChange(newData);
  };

  const handlePhoneChange = (value: string) => {
    // Remove todos os caracteres não numéricos
    const numericValue = value.replace(/\D/g, "");

    // Aplica máscara de telefone (XX) XXXXX-XXXX
    let formattedValue = numericValue;
    if (numericValue.length >= 2) {
      formattedValue = `(${numericValue.slice(0, 2)})`;
      if (numericValue.length > 2) {
        formattedValue += ` ${numericValue.slice(2, 7)}`;
      }
      if (numericValue.length > 7) {
        formattedValue += `-${numericValue.slice(7, 11)}`;
      }
    }

    handleInputChange("phone", formattedValue);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_0}>
        {/* Informações Pessoais */}
        <div className="bg-background/50 rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-semibold text-text mb-6 flex items-center gap-3">
            <User className="w-6 h-6 text-primary" />
            Informações Pessoais
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-text"
              >
                Nome completo *
              </label>
              <Input
                id="fullName"
                type="text"
                placeholder="Digite seu nome completo"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-text">
                E-mail *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="h-12"
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-text">
                Telefone / WhatsApp *
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                required
                className="h-12"
              />
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
}
