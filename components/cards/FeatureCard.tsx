"use client";

import { ArrowUpRight } from "lucide-react";
import type { Module } from "@/types";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { TiltCard } from "@/components/animations/TiltCard";

export interface FeatureCardProps {
  module: Module;
  index?: number;
}

export function FeatureCard({ module }: FeatureCardProps) {
  return (
    <TiltCard intensity={7} className="group h-full">
      <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-shadow duration-500 group-hover:shadow-[var(--shadow-card)]">
        <div
          className={`relative mb-5 grid size-12 place-items-center rounded-xl bg-gradient-to-br ${module.color} text-white shadow-[var(--shadow-soft)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
        >
          <DynamicIcon name={module.icon} size={22} />
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/25"
          />
        </div>

        <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{module.title}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {module.description}
        </p>

        <ul className="mb-5 flex flex-wrap gap-1.5">
          {module.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {feature}
            </li>
          ))}
        </ul>

        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
          Explore module
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </TiltCard>
  );
}
