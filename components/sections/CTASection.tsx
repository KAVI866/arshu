import { ArrowRight, CalendarClock } from "lucide-react";
import { LinkButton } from "@/components/common/Button";
import { Magnetic } from "@/components/animations/Magnetic";
import { FadeIn } from "@/components/animations/FadeIn";

export interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export function CTASection({
  title = "Ready to run your school on autopilot?",
  description = "Join 2,400+ institutions that switched to Gradia. Get a personalized demo with your leadership team — no strings attached.",
  primaryLabel = "Request a free demo",
  secondaryLabel = "Talk to sales",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="container-page">
        <FadeIn direction="up">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--hero-gradient-1)] via-[var(--hero-gradient-2)] to-[var(--hero-gradient-3)] px-6 py-16 text-center shadow-[var(--shadow-float)] sm:px-12 lg:py-20">
            <div aria-hidden="true" className="absolute inset-0 bg-noise opacity-25" />
            <div
              aria-hidden="true"
              className="absolute -left-20 -top-20 size-72 rounded-full bg-white/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-16 size-80 rounded-full bg-white/10 blur-3xl"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <CalendarClock className="size-3.5" aria-hidden="true" />
                Free demo · No credit card required
              </span>
              <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                {description}
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Magnetic strength={0.3}>
                  <LinkButton
                    href="/get-started"
                    variant="white"
                    size="xl"
                    className="text-slate-900"
                  >
                    {primaryLabel}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </LinkButton>
                </Magnetic>
                <LinkButton
                  href="/contact"
                  variant="glass"
                  size="xl"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  {secondaryLabel}
                </LinkButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
