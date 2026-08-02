"use client";

import { Check, Sparkles } from "lucide-react";
import type { PricingPlan } from "@/types";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { FadeIn } from "@/components/animations/FadeIn";

export interface PricingCardProps {
  plan: PricingPlan;
  billing: "monthly" | "annual";
  featured?: boolean;
}

export function PricingCard({ plan, billing }: PricingCardProps) {
  const price = plan.custom
    ? null
    : billing === "monthly"
      ? plan.monthly
      : plan.annual;

  return (
    <FadeIn direction="up" className="h-full">
      <div
        className={cn(
          "relative flex h-full flex-col rounded-3xl border bg-surface p-7 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5",
          plan.popular
            ? "border-transparent shadow-[var(--shadow-glow)]"
            : "border-border hover:border-[color-mix(in_oklch,var(--primary)_35%,var(--border))] hover:shadow-[var(--shadow-float)]"
        )}
      >
        {plan.popular ? (
          <>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-[color-mix(in_oklch,var(--primary)_8%,transparent)] to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-[var(--hero-gradient-1)] via-[var(--hero-gradient-2)] to-[var(--hero-gradient-3)] opacity-60 blur-[2px]"
            />
          </>
        ) : null}

        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-heading text-lg font-semibold text-foreground">{plan.name}</h3>
          {plan.popular ? (
            <Badge variant="gradient" className="gap-1">
              <Sparkles className="size-3" aria-hidden="true" />
              Popular
            </Badge>
          ) : null}
        </div>

        <p className="mb-6 text-sm text-muted-foreground">{plan.tagline}</p>

        <div className="mb-6">
          {plan.custom ? (
            <div className="font-number text-4xl font-bold tracking-tight text-foreground">
              Custom
              <span className="ml-2 text-base font-normal text-muted-foreground">/ per year</span>
            </div>
          ) : (
            <div className="flex items-end gap-1.5">
              <span className="font-number text-4xl font-bold tracking-tight text-foreground">
                ${price?.toLocaleString()}
              </span>
              <span className="mb-1 text-sm text-muted-foreground">
                / school / month
              </span>
            </div>
          )}
          {!plan.custom && billing === "annual" ? (
            <p className="mt-1.5 text-xs font-medium text-success">
              Billed annually — save 20%
            </p>
          ) : null}
          {!plan.custom && billing === "monthly" ? (
            <p className="mt-1.5 text-xs text-muted-foreground">
              Switch to annual and save 20%
            </p>
          ) : null}
        </div>

        <LinkButton
          href="/get-started"
          variant={plan.popular ? "gradient" : "outline"}
          size="lg"
          className="mb-6 w-full"
        >
          {plan.cta}
        </LinkButton>

        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/85">
              <span
                className={cn(
                  "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                  plan.popular ? "bg-primary/15 text-primary" : "bg-success/10 text-success"
                )}
              >
                <Check className="size-3" strokeWidth={3} aria-hidden="true" />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}
