"use client";

import type { Statistic } from "@/types";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { RevealItem } from "@/components/animations/Reveal";

export interface StatCardProps {
  stat: Statistic;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <RevealItem className="h-full">
      <div className="group relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-2xl border border-border bg-surface p-6 text-center shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
        <div
          className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] opacity-[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.14]"
          aria-hidden="true"
        />
        <div className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
          <DynamicIcon name={stat.icon} size={20} />
        </div>
        <div className="font-number text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          <AnimatedCounter
            value={stat.value}
            prefix={stat.prefix}
            suffix={stat.suffix}
            decimals={stat.decimals}
          />
        </div>
        <p className="text-sm text-muted-foreground">{stat.label}</p>
      </div>
    </RevealItem>
  );
}
