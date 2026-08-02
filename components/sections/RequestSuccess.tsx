"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Home,
  Mail,
  CalendarClock,
  UserRound,
  Rocket,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/constants/site";
import { LinkButton } from "@/components/common/Button";
import { Confetti } from "@/components/animations/Confetti";
import { SuccessAnimation } from "@/components/animations/LottieAnimation";
import { FadeIn } from "@/components/animations/FadeIn";

const nextSteps = [
  {
    icon: Mail,
    title: "Confirmation email",
    description: "You'll receive a confirmation with your reference number within minutes.",
    delay: 0,
  },
  {
    icon: UserRound,
    title: "Sales call",
    description: "A product specialist calls you within one business day to understand your needs.",
    delay: 0.1,
  },
  {
    icon: CalendarClock,
    title: "Demo scheduled",
    description: "We book a 30-minute guided walkthrough with your leadership team.",
    delay: 0.2,
  },
  {
    icon: Rocket,
    title: "Onboarding plan",
    description: "You'll get a tailored rollout plan with timelines, migration, and training.",
    delay: 0.3,
  },
];

export function RequestSuccess() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 lg:pt-40">
      <Confetti />

      <div className="container-page">
        <div className="relative mx-auto max-w-2xl">
          <FadeIn direction="scale" className="flex justify-center">
            <SuccessAnimation />
          </FadeIn>

          <FadeIn direction="up" delay={0.15} className="mt-8 text-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-success/10 px-4 py-1.5 text-xs font-semibold text-success">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Request received
            </span>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              You&apos;re all set, Principal!
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Your demo request has been received. Here&apos;s your reference number to track your request:
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.25}>
            <div className="mt-8 flex justify-center">
              <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-8 py-5 text-center">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Reference number
                </p>
                <p className="mt-1 font-number text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
                  {siteConfig.reference}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.35} className="mt-10">
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8">
              <h2 className="mb-6 text-center font-heading text-lg font-semibold text-foreground">
                What happens next
              </h2>
              <ol className="space-y-0">
                {nextSteps.map((step, index) => (
                  <motion.li
                    key={step.title}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + step.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex gap-4 pb-6 last:pb-0"
                  >
                    {index < nextSteps.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute left-5 top-12 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary/30 to-transparent"
                      />
                    ) : null}
                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] text-white shadow-[var(--shadow-soft)]">
                      <step.icon className="size-4" aria-hidden="true" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.5} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="/" variant="gradient" size="lg">
              <Home className="size-4" aria-hidden="true" />
              Back to home
            </LinkButton>
            <LinkButton href="/contact" variant="outline" size="lg">
              Contact sales
              <ArrowRight className="size-4" aria-hidden="true" />
            </LinkButton>
          </FadeIn>

          <FadeIn direction="up" delay={0.6} className="mt-8">
            <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
              <Check className="size-3.5 text-success" aria-hidden="true" />
              No account created. No payment required. This is a static demo confirmation.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
