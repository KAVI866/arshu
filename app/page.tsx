import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Stats } from "@/components/sections/Stats";
import { FeaturesOverview } from "@/components/sections/FeaturesOverview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Stats />
      <FeaturesOverview />
      <HowItWorks />
      <Testimonials />
      <FAQ compact />
      <CTASection />
    </>
  );
}
