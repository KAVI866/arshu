import { homeStats } from "@/data/statistics";
import { Section, Container } from "@/components/common/Container";
import { StatCard } from "@/components/cards/StatCard";
import { Reveal } from "@/components/animations/Reveal";

export function Stats() {
  return (
    <Section className="bg-muted/40">
      <Container>
        <Reveal stagger={0.1}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homeStats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
