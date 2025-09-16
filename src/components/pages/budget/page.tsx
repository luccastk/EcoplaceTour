import { useState } from "react";
import { BudgetForm } from "./form";
import { BudgetActions } from "./actions";
import { BudgetTitle } from "./title";
import { Send } from "lucide-react";
import { AnimatedDiv } from "../../ui/animations";
import { Button } from "../../ui/button";
import { ANIMATION_DELAY_400 } from "../../../constants";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  interestType: string;
  specificLocation?: string;
  additionalInfo?: string;
}

export function BudgetPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    interestType: "",
    specificLocation: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormDataChange = (newData: FormData) => {
    setFormData(newData);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simula envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);

    // Log dos dados para debug
    console.log("Dados do formulário:", formData);

    // Aqui você pode implementar a lógica de envio real
    alert(
      "Orçamento solicitado com sucesso! Entraremos em contato em até 24 horas."
    );

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      interestType: "",
      specificLocation: "",
      additionalInfo: "",
    });
  };

  const isFormValid =
    formData.fullName &&
    formData.email &&
    formData.phone &&
    formData.interestType &&
    (formData.interestType === "outro"
      ? formData.additionalInfo
      : formData.specificLocation);

  return (
    <>
      <section className="pt-46 pb-20 px-6 xl:px-20 ">
        <BudgetTitle />
      </section>

      <section className="px-6 py-12 xl:px-20 space-y-8 bg-gradient-to-b from-background to-secundary/25">
        <BudgetForm
          formData={formData}
          onFormDataChange={handleFormDataChange}
        />

        <BudgetActions
          formData={formData}
          onFormDataChange={handleFormDataChange}
        />

        <AnimatedDiv animationType="fade-up" delay={ANIMATION_DELAY_400}>
          <div className="text-center">
            <Button
              onClick={handleSubmit}
              disabled={!isFormValid || isSubmitting}
              className="h-14 px-12 text-lg font-semibold"
              variant="solid"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-3" />
                  Solicitar Orçamento
                </>
              )}
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              * Campos obrigatórios. Seus dados estão seguros conosco.
            </p>
          </div>
        </AnimatedDiv>
      </section>
    </>
  );
}
