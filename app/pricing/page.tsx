import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, Container } from "@/components/common/Container";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for schools of every size. Start with Basic, grow with Professional, scale with Enterprise.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        crumb="Pricing"
        title={
          <>
            Pricing that grows <span className="text-gradient">with your school</span>
          </>
        }
        description="Start small, scale far. No hidden fees, no lock-in, and every plan includes onboarding, training, and support."
      />

      <Section className="pt-4">
        <Container>
          <PricingPlans />
        </Container>
      </Section>

      <Section muted>
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-heading text-3xl font-semibold tracking-tight text-foreground">
              Compare plans side by side
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              See exactly what&apos;s included across Basic, Professional, and Enterprise.
            </p>
          </div>
          <ComparisonTable />
        </Container>
      </Section>

      <FAQ />

      <CTASection
        title="Not sure which plan fits?"
        description="Tell us about your school and we'll recommend the right plan — with a tailored quote and a guided demo."
      />
    </>
  );
}
