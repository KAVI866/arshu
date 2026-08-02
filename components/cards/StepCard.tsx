"use client";

import type { Step } from "@/types";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { FadeIn } from "@/components/animations/FadeIn";

export interface StepCardProps {
  step: Step;
  index: number;
}

export function StepCard({ step, index }: StepCardProps) {
  return (
    <FadeIn direction="up" delay={index * 0.1} className="h-full">
      <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
        <div className="mb-5 flex items-center justify-between">
          <div className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] text-white shadow-[var(--shadow-soft)] transition-transform duration-500 group-hover:scale-110">
            <DynamicIcon name={step.icon} size={20} />
          </div>
          <span className="font-number text-4xl font-extrabold text-muted/70 transition-colors duration-500 group-hover:text-primary/15">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{step.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
      </div>
    </FadeIn>
  );
}
