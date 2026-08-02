"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { DynamicIcon } from "@/components/common/DynamicIcon";

export interface DashboardCardProps {
  icon?: string;
  title: string;
  value: ReactNode;
  meta?: string;
  className?: string;
  delay?: number;
  iconClassName?: string;
}

export function DashboardCard({
  icon,
  title,
  value,
  meta,
  className,
  delay = 0,
  iconClassName,
}: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "glass-strong rounded-2xl p-4 shadow-[var(--shadow-card)]",
        className
      )}
    >
      <div className="flex items-start gap-3">
        {icon ? (
          <div
            className={cn(
              "grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
              iconClassName
            )}
          >
            <DynamicIcon name={icon} size={18} />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {title}
          </p>
          <p className="mt-0.5 font-number text-lg font-bold text-foreground">{value}</p>
          {meta ? <p className="text-[11px] text-muted-foreground">{meta}</p> : null}
        </div>
      </div>
    </motion.div>
  );
}
