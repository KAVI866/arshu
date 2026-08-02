import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AchievementGrid } from "@/components/student-success/AchievementGrid";
import { Section, Container } from "@/components/common/Container";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Student Success",
  description:
    "A living gallery of student achievements — sports, science, arts, olympiads, leadership and more — celebrated by schools on Gradia.",
};

export default function StudentSuccessPage() {
  return (
    <>
      <PageHero
        eyebrow="Celebrating every win"
        crumb="Student Success"
        title={
          <>
            Where student <span className="text-gradient">achievements live</span>
          </>
        }
        description="A living showcase of the wins — big and small — from schools powered by Gradia. Search, filter, and celebrate along with them."
      />
      <Section className="pt-4">
        <Container>
          <AchievementGrid />
        </Container>
      </Section>
      <CTASection
        title="Give your students a wall of fame"
        description="Gradia's Achievements module turns every student win into a shareable, celebrated moment for your whole community."
      />
    </>
  );
}
