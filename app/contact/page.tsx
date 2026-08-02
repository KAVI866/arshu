import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Gradia team — sales, support, partnerships, and press. We reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        crumb="Contact"
        title={
          <>
            We&apos;d love to <span className="text-gradient">hear from you</span>
          </>
        }
        description="Questions, partnerships, or press — the Gradia team is one message away. We reply within one business day."
      />
      <ContactSection />
      <div id="faq">
        <FAQ />
      </div>
    </>
  );
}
