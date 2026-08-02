import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/common/Badge";
import { FadeIn } from "@/components/animations/FadeIn";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
  badge?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  badge,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "max-w-2xl items-start text-left",
        className
      )}
    >
      {eyebrow ? (
        <FadeIn direction="up">
          <Badge variant="primary" dot>
            {badge ?? eyebrow}
          </Badge>
        </FadeIn>
      ) : null}
      <FadeIn direction="up" delay={0.05}>
        <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-balance sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </FadeIn>
      {description ? (
        <FadeIn direction="up" delay={0.1}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </FadeIn>
      ) : null}
    </div>
  );
}
