import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { RequestDemoForm } from "@/components/forms/RequestDemoForm";
import { CTASection } from "@/components/sections/CTASection";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Request a personalized demo of Gradia for your school. No account needed — tell us about your institution and we'll be in touch.",
};

export default function GetStartedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get started"
        crumb="Request a Demo"
        title={
          <>
            Request a <span className="text-gradient">guided demo</span>
          </>
        }
        description="No account creation required. Tell us about your school and our team will reach out within one business day."
      />

      <section className="relative pb-20 pt-6 lg:pb-24">
        <Container>
          <RequestDemoForm />
        </Container>
      </section>

      <CTASection
        title="Prefer to talk to someone today?"
        description="Our school success team is happy to answer questions over a quick call — no demo required."
        primaryLabel="Contact us instead"
        secondaryLabel="Browse features"
      />
    </>
  );
}
