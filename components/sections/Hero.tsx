"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Star, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { Magnetic } from "@/components/animations/Magnetic";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { DashboardCard } from "@/components/cards/DashboardCard";
import { FloatingShape } from "@/components/animations/FloatingShape";
import { Parallax } from "@/components/animations/Parallax";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 lg:pb-24 lg:pt-40">
      {/* Backdrop */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_-10%,black,transparent)] opacity-60" />
        <motion.div
          className="absolute left-1/2 top-[-20%] h-[34rem] w-[54rem] -translate-x-1/2 animate-aurora rounded-full blur-[120px]"
          style={{
            background:
              "linear-gradient(120deg, color-mix(in oklch, var(--hero-gradient-1) 35%, transparent), color-mix(in oklch, var(--hero-gradient-2) 30%, transparent), color-mix(in oklch, var(--hero-gradient-3) 25%, transparent))",
          }}
        />
        <div className="absolute bottom-0 left-[-10%] size-96 animate-blob rounded-full bg-[color-mix(in_oklch,var(--hero-gradient-2)_18%,transparent)] blur-[100px]" />
        <div className="absolute right-[-8%] top-[30%] size-80 animate-blob rounded-full bg-[color-mix(in_oklch,var(--hero-gradient-3)_16%,transparent)] blur-[100px] [animation-delay:3s]" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <motion.div variants={container} initial="hidden" animate="visible" className="relative z-10">
            <motion.div variants={item}>
              <Badge variant="glass" className="gap-2 border-border shadow-[var(--shadow-soft)]">
                <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
                New · AI-assisted report cards in 2.0
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-heading text-[2.6rem] font-bold leading-[1.08] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.2rem]"
            >
              The school ERP that feels like the{" "}
              <span className="text-gradient-animated">future of education</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Gradia unifies admissions, academics, fees, examinations, and campus operations into
              one beautiful, real-time platform — loved by 2,400+ schools and 850,000+ students.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.3}>
                <LinkButton href="/get-started" variant="gradient" size="xl">
                  Request a free demo
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
                </LinkButton>
              </Magnetic>
              <LinkButton href="#how-it-works" variant="outline" size="xl">
                <PlayCircle className="size-5" aria-hidden="true" />
                Watch 2-min tour
              </LinkButton>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-5">
              <div className="flex -space-x-2.5">
                {["PR", "MC", "SO", "RV"].map((initials) => (
                  <span
                    key={initials}
                    className="grid size-9 place-items-center rounded-full border-2 border-surface bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] text-[10px] font-bold text-white"
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-warning">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                  <span className="ml-1.5 font-number text-sm font-bold text-foreground">4.9/5</span>
                </div>
                <p className="text-xs text-muted-foreground">from 1,200+ school leaders</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative z-10">
            <Parallax offset={26}>
              <div className="relative">
                <FloatingShape
                  className="left-4 top-6 hidden animate-float sm:block"
                  shape="diamond"
                  size={18}
                  color="var(--hero-gradient-1)"
                />
                <FloatingShape
                  className="right-8 top-40 hidden animate-float sm:block"
                  shape="ring"
                  size={34}
                  color="var(--hero-gradient-2)"
                  delay="1.5s"
                />
                <FloatingShape
                  className="bottom-24 left-2 hidden animate-float sm:block"
                  shape="square"
                  size={16}
                  color="var(--hero-gradient-3)"
                  delay="3s"
                />

                <div className="rounded-3xl border border-border bg-surface/60 p-2 shadow-[var(--shadow-float)] backdrop-blur-sm">
                  <DashboardPreview />
                </div>

                <DashboardCard
                  icon="Users"
                  title="New admissions"
                  value="+128"
                  meta="This week · 96% complete"
                  className="absolute -left-4 -top-6 w-44 sm:-left-10 sm:-top-8"
                  delay={0.4}
                />
                <DashboardCard
                  icon="CalendarCheck"
                  title="Attendance"
                  value="96.8%"
                  meta="1,204 of 1,243 present"
                  className="absolute -right-3 top-1/3 w-44 sm:-right-8"
                  delay={0.55}
                />
                <DashboardCard
                  icon="Wallet"
                  title="Fee received"
                  value="$48,200"
                  meta="Online · just now"
                  className="absolute -bottom-6 left-1/2 w-48 -translate-x-1/2"
                  delay={0.7}
                />
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
}
