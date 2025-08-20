import Button from "../Button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-l from-primary to-secundary">
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-between">
          <Button>Solicitar Orçamento</Button>
          <Button variant="tertiary">Ver Empresas</Button>
        </div>
      </div>
    </footer>
  );
}
