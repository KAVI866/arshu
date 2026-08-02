import { cn } from "@/lib/utils";

export interface FloatingShapeProps {
  className?: string;
  color?: string;
  shape?: "circle" | "square" | "ring" | "triangle" | "diamond";
  size?: number;
  delay?: string;
}

export function FloatingShape({
  className,
  color = "var(--hero-gradient-2)",
  shape = "circle",
  size = 40,
  delay = "0s",
}: FloatingShapeProps) {
  const base = "pointer-events-none absolute animate-float";
  const shapeClass = {
    circle: "rounded-full",
    square: "rounded-[6px] rotate-12",
    ring: "rounded-full border-[3px]",
    triangle: "",
    diamond: "rotate-45 rounded-[4px]",
  }[shape];

  return (
    <div
      aria-hidden="true"
      className={cn(base, shapeClass, className)}
      style={{
        width: size,
        height: size,
        borderColor: shape === "ring" ? color : undefined,
        backgroundColor: shape === "ring" ? "transparent" : color,
        opacity: 0.5,
        animationDelay: delay,
        boxShadow: `0 0 ${size}px ${color}33`,
      }}
    />
  );
}
