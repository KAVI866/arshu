import Link from "next/link";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

export interface LogoProps {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, href = "/", size = "md" }: LogoProps) {
  const markSize = size === "lg" ? 44 : size === "md" ? 38 : 32;
  const textSize = size === "lg" ? "text-2xl" : size === "md" ? "text-xl" : "text-lg";

  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="Gradia home"
    >
      <span
        className="relative grid place-items-center rounded-xl bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] text-white shadow-[var(--shadow-card)] transition-transform duration-300 group-hover:scale-105"
        style={{ width: markSize, height: markSize }}
      >
        <GraduationCap size={markSize * 0.55} strokeWidth={2.2} aria-hidden="true" />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/25"
        />
      </span>
      <span className={cn("font-heading font-bold tracking-tight text-foreground", textSize)}>
        Gradia
      </span>
    </Link>
  );
}
