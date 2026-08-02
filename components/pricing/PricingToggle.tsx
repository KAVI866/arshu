"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type Billing = "monthly" | "annual";

export interface PricingToggleProps {
  billing: Billing;
  onChange: (billing: Billing) => void;
}

export function PricingToggle({ billing, onChange }: PricingToggleProps) {
  return (
    <div
      role="tablist"
      aria-label="Billing period"
      className="relative inline-flex items-center rounded-full border border-border bg-surface p-1 shadow-[var(--shadow-soft)]"
    >
      {(["monthly", "annual"] as const).map((period) => {
        const active = billing === period;
        return (
          <button
            key={period}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(period)}
            className={cn(
              "relative z-10 rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors duration-300",
              active ? "text-white" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {active ? (
              <motion.span
                layoutId="billing-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--hero-gradient-1)] to-[var(--hero-gradient-2)] shadow-[var(--shadow-card)]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            ) : null}
            {period}
            {period === "annual" ? (
              <span className={cn("ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-bold", active ? "bg-white/20 text-white" : "bg-success/10 text-success")}>
                -20%
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
