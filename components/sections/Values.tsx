import { coreValues, whyChooseUs } from "@/data/team";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { Reveal, RevealItem } from "@/components/animations/Reveal";

export function ValuesGrid() {
  return (
    <Reveal stagger={0.08} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {coreValues.map((value) => (
        <RevealItem key={value.title} className="h-full">
          <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
            <div className="mb-4 grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
              <DynamicIcon name={value.icon} size={20} />
            </div>
            <h3 className="mb-2 font-heading text-base font-semibold text-foreground">{value.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
          </div>
        </RevealItem>
      ))}
    </Reveal>
  );
}

export function WhyChooseUs() {
  return (
    <Reveal stagger={0.08} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {whyChooseUs.map((item) => (
        <RevealItem key={item.title} className="h-full">
          <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
            <div className="mb-4 grid size-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] text-white shadow-[var(--shadow-soft)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              <DynamicIcon name={item.icon} size={20} />
            </div>
            <h3 className="mb-2 font-heading text-base font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        </RevealItem>
      ))}
    </Reveal>
  );
}
