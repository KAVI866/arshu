import { team } from "@/data/team";
import { Section, Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TeamCard } from "@/components/cards/TeamCard";
import { Reveal, RevealItem } from "@/components/animations/Reveal";

export function TeamSection() {
  return (
    <Section id="careers">
      <Container>
        <SectionHeading
          eyebrow="Meet the team"
          title="The humans behind Gradia"
          description="A small, senior team obsessed with making school life calmer and simpler."
          className="mb-14"
        />
        <Reveal stagger={0.08}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <RevealItem key={member.id} className="h-full">
                <TeamCard member={member} />
              </RevealItem>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
