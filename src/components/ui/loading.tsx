export function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        {/* Logo ou ícone da empresa */}
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse">
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>

        {/* Spinner */}
        <div className="relative">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>

        {/* Texto de loading */}
        <div className="text-center">
          <p className="text-text font-medium">Carregando...</p>
          <p className="text-muted-foreground text-sm">
            Preparando sua experiência
          </p>
        </div>
      </div>
    </div>
  );
}
