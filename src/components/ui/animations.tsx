import { cn } from "../../lib/utils";

interface AnimatedDivProps {
  children: React.ReactNode;
  delay: number;
  isVisible: boolean;
  className?: string;
  animationType?: "fade-up" | "fade-right" | "fade-down";
}

export function AnimatedDiv({
  children,
  delay,
  isVisible,
  className = "",
  animationType = "fade-up",
}: Readonly<AnimatedDivProps>) {
  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";

    switch (animationType) {
      case "fade-up":
        return cn(
          baseClasses,
          !isVisible && "opacity-0 translate-y-6",
          isVisible && "opacity-100 translate-y-0"
        );
      case "fade-right":
        return cn(
          baseClasses,
          !isVisible && "opacity-0 translate-x-4",
          isVisible && "opacity-100 translate-x-0"
        );
      case "fade-down":
        return cn(
          baseClasses,
          !isVisible && "opacity-0 translate-y-4",
          isVisible && "opacity-100 translate-y-0"
        );
      default:
        return baseClasses;
    }
  };

  return (
    <div
      className={cn(getAnimationClasses(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
