import { cn } from "@/lib/utils";

export interface GradientBlobProps {
  className?: string;
  colors?: [string, string];
}

export function GradientBlob({ className, colors = ["var(--hero-gradient-1)", "var(--hero-gradient-3)"] }: GradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full blur-3xl animate-blob", className)}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${colors[0]} 0%, transparent 70%)`,
        backgroundImage: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
        filter: "blur(80px)",
        opacity: 0.35,
      }}
    />
  );
}
