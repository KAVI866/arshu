"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Tag, UserRound } from "lucide-react";
import type { Achievement } from "@/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/common/Badge";
import { GradientBlob } from "@/components/animations/GradientBlob";

export interface AchievementCardProps {
  achievement: Achievement;
  compact?: boolean;
}

const heightClass = {
  short: "h-72",
  medium: "h-96",
  tall: "h-[30rem]",
};

export function AchievementCard({ achievement, compact }: AchievementCardProps) {
  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-card)]",
        !compact && heightClass[achievement.height]
      )}
    >
      <div
        className={cn(
          "relative flex-1 overflow-hidden bg-gradient-to-br",
          achievement.gradient
        )}
      >
        <GradientBlob className="left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-noise opacity-60" aria-hidden="true" />

        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex items-start justify-between gap-3">
            <Badge variant="glass" className="bg-white/15 text-white border-white/25 backdrop-blur-md">
              {achievement.category}
            </Badge>
            <span className="grid size-8 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md">
              <Tag className="size-3.5" aria-hidden="true" />
            </span>
          </div>

          <div>
            <h3 className="mb-2 font-heading text-lg font-semibold leading-snug text-white drop-shadow-sm">
              {achievement.title}
            </h3>
            <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-white/85">
              {achievement.description}
            </p>

            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-lg bg-white/15 text-xs font-bold text-white backdrop-blur-md">
                  {achievement.schoolLogo}
                </span>
                <div>
                  <p className="flex items-center gap-1 text-xs font-semibold text-white">
                    <UserRound className="size-3" aria-hidden="true" />
                    {achievement.studentName}
                  </p>
                  <p className="text-[11px] text-white/75">{achievement.school}</p>
                </div>
              </div>
              <span className="flex items-center gap-1 text-[11px] text-white/75">
                <CalendarDays className="size-3" aria-hidden="true" />
                {achievement.date}
              </span>
            </div>
          </div>
        </div>

        <span
          className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-1.5 bg-[var(--dark)]/80 py-3 text-sm font-semibold text-white backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0"
        >
          Read more
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </motion.article>
  );
}
