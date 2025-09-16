import { cn } from "../../lib/utils";
import { useVisibleAnimation } from "../../hooks/use-visible-animation.hook";

interface AnimatedDivProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  animationType?: "fade-up" | "fade-right" | "fade-down" | "fade-left";
  threshold?: number;
}

export function AnimatedDiv({
  children,
  delay = 0,
  className = "",
  animationType = "fade-up",
  threshold = 0.2,
}: Readonly<AnimatedDivProps>) {
  const { isVisible, ref } = useVisibleAnimation(threshold);
  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";

    switch (animationType) {
      case "fade-up":
        return cn(
          baseClasses,
          !isVisible && "opacity-0 translate-y-4",
          isVisible && "opacity-100 translate-y-0"
        );

      case "fade-right":
        return cn(
          baseClasses,
          !isVisible && "opacity-0 translate-x-3",
          isVisible && "opacity-100 translate-x-0"
        );
      case "fade-down":
        return cn(
          baseClasses,
          !isVisible && "opacity-0 -translate-y-4",
          isVisible && "opacity-100 -translate-y-0"
        );
      case "fade-left":
        return cn(
          baseClasses,
          !isVisible && "opacity-0 -translate-x-3",
          isVisible && "opacity-100 translate-x-0"
        );
      default:
        return baseClasses;
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
