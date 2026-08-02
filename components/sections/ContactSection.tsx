import Link from "next/link";
import { Clock, MapPin, ArrowRight, CircleAlert } from "lucide-react";
import { contactInfo } from "@/data/statistics";
import { siteConfig } from "@/constants/site";
import { Section, Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ContactForm } from "@/components/forms/ContactForm";
import { SocialIcon } from "@/components/common/SocialIcon";
import { Reveal } from "@/components/animations/Reveal";
import { FadeIn } from "@/components/animations/FadeIn";

export function ContactSection() {
  return (
    <Section className="pt-4">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            {contactInfo.map((info) => (
              <Reveal key={info.title}>
                <a
                  href={info.href}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <DynamicIcon name={info.icon} size={20} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{info.title}</p>
                    <p className="mt-0.5 text-sm text-primary">{info.value}</p>
                    <p className="text-xs text-muted-foreground">{info.sub}</p>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal>
              <div className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)]">
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-warning/10 text-warning">
                    <Clock className="size-5" aria-hidden="true" />
                  </span>
                  <p className="text-sm font-semibold text-foreground">Business hours</p>
                </div>
                <ul className="space-y-1.5">
                  {siteConfig.officeHours.map((hours) => (
                    <li key={hours.day} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{hours.day}</span>
                      <span className="font-medium text-foreground">{hours.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-center justify-between rounded-2xl border border-border bg-muted/50 p-5">
                <div className="flex items-center gap-2">
                  <CircleAlert className="size-5 text-primary" aria-hidden="true" />
                  <p className="text-sm font-medium text-foreground">Have a quick question?</p>
                </div>
                <Link
                  href="/contact#faq"
                  className="flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Browse FAQ
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium text-muted-foreground">Follow us</p>
                <div className="flex items-center gap-2">
                  {siteConfig.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                      aria-label={social.label}
                    >
                      <SocialIcon name={social.icon} size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <FadeIn direction="right" className="h-full">
            <ContactForm />
          </FadeIn>
        </div>

        {/* Map placeholder */}
        <Reveal className="mt-12">
          <div id="map" className="relative overflow-hidden rounded-3xl border border-border bg-muted/40 shadow-[var(--shadow-soft)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-dots opacity-40"
            />
            <div className="relative z-10 flex min-h-[380px] flex-col items-center justify-center gap-4 p-10 text-center">
              <span className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] text-white shadow-[var(--shadow-card)]">
                <MapPin className="size-8" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">Our office</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {siteConfig.address}
                  <br />
                  {siteConfig.city}
                </p>
              </div>
              <span className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted-foreground shadow-[var(--shadow-soft)]">
                Interactive map placeholder · {siteConfig.name} HQ
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export function ContactHero() {
  return (
    <SectionHeading
      eyebrow="Contact"
      title={
        <>
          We&apos;d love to <span className="text-gradient">hear from you</span>
        </>
      }
      description="Questions, partnerships, or press — the Gradia team is one message away."
      className="mb-2"
    />
  );
}
