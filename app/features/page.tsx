import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ModulesExplorer } from "@/components/sections/ModulesExplorer";
import { Section, Container } from "@/components/common/Container";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore 25+ modules — admissions, attendance, fees, examinations, transport, HR, analytics and more — unified in one school ERP.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        crumb="Features"
        title={
          <>
            One platform. <span className="text-gradient">25+ deep modules.</span>
          </>
        }
        description="Every part of your school — academics, finance, operations, and people — runs on a single, beautifully connected system. No more patching together five tools."
      />
      <Section className="pt-4">
        <Container>
          <ModulesExplorer />
        </Container>
      </Section>
      <CTASection
        title="See the modules in action"
        description="Book a guided tour and we'll walk you through the modules built for your school's size and goals."
      />
    </>
  );
}
