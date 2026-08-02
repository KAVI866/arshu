import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { featureHighlights } from "@/data/features";
import { Section, Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { Reveal, RevealItem } from "@/components/animations/Reveal";
import { TiltCard } from "@/components/animations/TiltCard";
import { cn } from "@/lib/utils";

const spans = [
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-3",
];

export function FeaturesOverview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Platform"
          title="Everything your school runs on. One platform."
          description="Twenty-five deep modules that work together, so data flows from admission to alumni — automatically."
          className="mb-14"
        />

        <Reveal stagger={0.08} className="grid gap-5 lg:grid-cols-5">
          {featureHighlights.map((feature, index) => (
            <RevealItem key={feature.id} className={cn("h-full", spans[index % spans.length])}>
              <TiltCard intensity={5} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-7 shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-card)] sm:p-8">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-gradient-to-br opacity-[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-[0.14]"
                    style={{ background: `linear-gradient(135deg, var(--hero-gradient-1), var(--hero-gradient-3))` }}
                  />
                  <div className="relative z-10">
                    <div
                      className={cn(
                        "mb-5 grid size-12 place-items-center rounded-xl bg-gradient-to-br text-white shadow-[var(--shadow-soft)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",
                        feature.color
                      )}
                    >
                      <DynamicIcon name={feature.icon} size={22} />
                    </div>
                    <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {feature.features.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-muted/50 px-3 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </RevealItem>
          ))}

          <RevealItem className="h-full lg:col-span-2">
            <Link
              href="/features"
              className="group relative flex h-full min-h-56 flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--hero-gradient-1)] via-[var(--hero-gradient-2)] to-[var(--hero-gradient-3)] p-7 text-white shadow-[var(--shadow-card)] transition-transform duration-500 hover:-translate-y-1 sm:p-8"
            >
              <div aria-hidden="true" className="absolute inset-0 bg-noise opacity-30" />
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  25+ modules
                </div>
                <h3 className="font-heading text-2xl font-bold leading-snug">
                  Explore every module powering modern schools
                </h3>
                <p className="mt-3 max-w-xs text-sm text-white/80">
                  Admissions, HR, transport, hostels, analytics — and everything in between.
                </p>
              </div>
              <span className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Browse all features
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </RevealItem>
        </Reveal>
      </Container>
    </Section>
  );
}
