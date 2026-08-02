"use client";

import { GraduationCap, BookOpen, Globe, Landmark, Shield, HeartPulse, Palette, Microscope } from "lucide-react";
import { Marquee } from "@/components/animations/ScrollProgress";

const schools = [
  { name: "Greenfield International", icon: Globe },
  { name: "Westbridge Academy", icon: GraduationCap },
  { name: "Harborview High", icon: BookOpen },
  { name: "Lakeside Montessori", icon: Palette },
  { name: "Sunrise International", icon: Landmark },
  { name: "Shining Star Group", icon: Shield },
  { name: "Nordic STEM Institute", icon: Microscope },
  { name: "Athena College", icon: HeartPulse },
];

export function TrustedBy() {
  return (
    <section className="relative border-y border-border bg-surface py-14">
      <div className="container-page">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by forward-thinking institutions
        </p>
        <Marquee speed={34} className="[--marquee-duration:34s]">
          <div className="flex shrink-0 items-center">
            {[...schools, ...schools].map((school, index) => (
              <span
                key={`${school.name}-${index}`}
                className="mx-7 flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <school.icon className="size-6 opacity-60" aria-hidden="true" />
                <span className="whitespace-nowrap font-heading text-lg font-semibold tracking-tight">
                  {school.name}
                </span>
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
