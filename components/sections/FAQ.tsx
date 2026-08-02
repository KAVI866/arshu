import { faqs } from "@/data/faq";
import { Section, Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ({ compact = false }: { compact?: boolean }) {
  const items = compact ? faqs.slice(0, 4) : faqs;

  return (
    <Section muted={!compact}>
      <Container size="tight">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything schools usually ask before making the switch."
          className="mb-12"
        />

        <Accordion type="single" collapsible className="gap-3">
          {items.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="rounded-2xl border border-border bg-surface px-5 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-card)]"
            >
              <AccordionTrigger className="py-4 text-base font-medium text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
}
