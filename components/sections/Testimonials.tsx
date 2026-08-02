"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Section, Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- embla requires initial snap sync
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <Section>
      <Container>
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Loved by schools"
            title="School leaders talk about Gradia"
            description="From principals to CFOs, here's what happens after schools switch."
            className="max-w-2xl"
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              className="grid size-11 place-items-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:border-primary/40 hover:text-primary disabled:opacity-40"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="grid size-11 place-items-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:border-primary/40 hover:text-primary disabled:opacity-40"
              aria-label="Next testimonials"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y gap-5">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-0 shrink-0 grow-0 basis-[100%] sm:basis-[calc(50%-10px)] lg:basis-[calc(33.333%-14px)]"
              >
                <TestimonialCard testimonial={testimonial} className="h-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Testimonial slides">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "w-8 bg-gradient-to-r from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)]"
                  : "w-2 bg-border hover:bg-muted-foreground/40"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === selectedIndex}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
