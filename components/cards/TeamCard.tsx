"use client";

import { motion } from "framer-motion";
import type { TeamMember } from "@/types";
import { SocialIcon } from "@/components/common/SocialIcon";
import { cn } from "@/lib/utils";

export interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-card)]"
    >
      <div className="mb-4 flex items-center justify-between">
        <div
          className={cn(
            "relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br font-heading text-lg font-bold text-white shadow-[var(--shadow-soft)]",
            member.gradient
          )}
        >
          {member.initials}
          <span aria-hidden="true" className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/25" />
        </div>
        <div className="flex items-center gap-1.5">
          {member.linkedin ? (
            <a
              href={member.linkedin}
              aria-label={`${member.name} on LinkedIn`}
              className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <SocialIcon name="Linkedin" size={15} />
            </a>
          ) : null}
          {member.twitter ? (
            <a
              href={member.twitter}
              aria-label={`${member.name} on X`}
              className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <SocialIcon name="Twitter" size={15} />
            </a>
          ) : null}
          {member.github ? (
            <a
              href={member.github}
              aria-label={`${member.name} on GitHub`}
              className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <SocialIcon name="Github" size={15} />
            </a>
          ) : null}
        </div>
      </div>

      <h3 className="font-heading text-base font-semibold text-foreground">{member.name}</h3>
      <p className="mb-3 text-sm font-medium text-primary">{member.role}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
    </motion.div>
  );
}
