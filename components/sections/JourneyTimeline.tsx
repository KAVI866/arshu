import { journeyTimeline } from "@/data/statistics";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { Reveal, RevealItem } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export function JourneyTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-[var(--hero-gradient-1)] via-[var(--hero-gradient-2)] to-transparent sm:left-1/2"
      />
      <Reveal stagger={0.12} className="space-y-10">
        {journeyTimeline.map((item, index) => (
          <RevealItem key={item.id}>
            <div
              className={cn(
                "relative flex items-start gap-6 sm:w-1/2",
                index % 2 === 0
                  ? "sm:pr-12 sm:text-right sm:flex-row-reverse"
                  : "sm:ml-auto sm:pl-12"
              )}
            >
              <div
                className={cn(
                  "absolute left-6 top-1 z-10 grid size-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] text-white shadow-[var(--shadow-card)] sm:left-auto",
                  index % 2 === 0 ? "sm:-right-4 sm:translate-x-1/2" : "sm:-left-4 sm:-translate-x-1/2"
                )}
              >
                <DynamicIcon name={item.icon} size={14} />
              </div>
              <div className="flex-1 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-card)]">
                <span className="font-number text-sm font-bold text-primary">{item.year}</span>
                <h3 className="mb-1.5 mt-1 font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </Reveal>
    </div>
  );
}
