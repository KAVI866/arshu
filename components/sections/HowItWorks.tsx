import { howItWorks } from "@/data/statistics";
import { Section, Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StepCard } from "@/components/cards/StepCard";

export function HowItWorks() {
  return (
    <Section muted id="how-it-works">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From sign-up to go-live in weeks"
          description="A guided journey designed to get your whole school running on Gradia without disrupting a single class."
          className="mb-14"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
