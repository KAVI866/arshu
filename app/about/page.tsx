import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Stats } from "@/components/sections/Stats";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { ValuesGrid, WhyChooseUs } from "@/components/sections/Values";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gradia started with one school and a simple belief: school operations shouldn't be complicated. Meet the team building the ERP for modern education.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        crumb="About"
        title={
          <>
            We&apos;re building the ERP <span className="text-gradient">education deserves</span>
          </>
        }
        description="Gradia began with a single school principal and a spreadsheet problem. Today we power 2,400+ institutions across 12 countries — with the same obsession for simplicity."
      />

      {/* Story + Mission / Vision */}
      <Section className="pt-4">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="right">
              <SectionHeading
                align="left"
                eyebrow="Our story"
                title="From one principal's spreadsheet to 850,000+ students"
                className="mb-6"
              />
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  In 2020, our co-founder Arjun was running a school on eleven disconnected
                  spreadsheets. Fees lived in one, exams in another, and parent questions were
                  answered three times — differently — every single day.
                </p>
                <p>
                  So we built Gradia: one system where every part of a school talks to every other
                  part. No plugins to wire together. No training manuals. Just software that feels
                  like the internet should have had it all along.
                </p>
                <p>
                  Today, educators at 2,400+ schools rely on Gradia to run admissions, academics,
                  finance, and campus operations — and to get a little bit of their evenings back.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-5">
              <FadeIn direction="left">
                <div className="rounded-3xl border border-border bg-surface p-7 shadow-[var(--shadow-soft)]">
                  <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    Our mission
                  </span>
                  <p className="font-heading text-xl font-semibold leading-snug text-foreground">
                    To give every school the operational clarity of a modern SaaS company — so
                    educators spend time on students, not spreadsheets.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="left" delay={0.1}>
                <div className="rounded-3xl border border-border bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] p-7 text-white shadow-[var(--shadow-card)]">
                  <span className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                    Our vision
                  </span>
                  <p className="font-heading text-xl font-semibold leading-snug">
                    A world where every student&apos;s progress is visible, celebrated, and effortless to
                    share — from first day to graduation.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      <Stats />

      {/* Core values */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Core values"
            title="The principles we won't compromise on"
            description="Four beliefs guide every product decision, every hire, and every conversation with a school."
            className="mb-14"
          />
          <ValuesGrid />
        </Container>
      </Section>

      {/* Timeline */}
      <Section muted>
        <Container>
          <SectionHeading
            eyebrow="Milestones"
            title="Our journey so far"
            description="Five years, 2,400+ schools, and a lot of learning along the way."
            className="mb-16"
          />
          <JourneyTimeline />
        </Container>
      </Section>

      {/* Team */}
      <TeamSection />

      {/* Why choose us */}
      <Section muted>
        <Container>
          <SectionHeading
            eyebrow="Why Gradia"
            title="Why 2,400+ schools chose us"
            className="mb-14"
          />
          <WhyChooseUs />
        </Container>
      </Section>

      <CTASection
        title="Come build the future of education with us"
        description="Join a team that cares deeply about schools. We're hiring across engineering, design, and customer success."
      />
    </>
  );
}
