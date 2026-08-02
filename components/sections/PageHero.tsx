"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/common/Badge";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  crumb?: string;
}

export function PageHero({ eyebrow, title, description, children, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-12 pt-32 lg:pb-16 lg:pt-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_-10%,black,transparent)] opacity-50" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute left-1/2 top-[-24%] h-96 w-[46rem] -translate-x-1/2 rounded-full blur-[110px]"
          style={{
            background:
              "linear-gradient(120deg, color-mix(in oklch, var(--hero-gradient-1) 28%, transparent), color-mix(in oklch, var(--hero-gradient-2) 24%, transparent), color-mix(in oklch, var(--hero-gradient-3) 20%, transparent))",
          }}
        />
      </div>

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {crumb ? <Breadcrumb current={crumb} className="mb-6" /> : null}
          {eyebrow ? (
            <Badge variant="glass" className="mb-5 gap-2 shadow-[var(--shadow-soft)]">
              {eyebrow}
            </Badge>
          ) : null}
          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
