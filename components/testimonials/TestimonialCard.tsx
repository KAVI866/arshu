"use client";

import { Quote, Star, StarHalf } from "lucide-react";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const initials = testimonial.initials || `${testimonial.name.split(" ")[0]?.[0] ?? ""}${testimonial.name.split(" ")[1]?.[0] ?? ""}`;

  return (
    <figure
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
        className
      )}
    >
      <Quote
        className="absolute right-6 top-6 size-8 text-primary/10 transition-colors duration-500 group-hover:text-primary/20"
        aria-hidden="true"
      />

      <div className="mb-4 flex items-center gap-0.5 text-warning" aria-label={`Rated ${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) =>
          i < Math.floor(testimonial.rating) ? (
            <Star key={i} className="size-4 fill-current" aria-hidden="true" />
          ) : testimonial.rating % 1 >= 0.5 && i === Math.floor(testimonial.rating) ? (
            <StarHalf key={i} className="size-4 fill-current" aria-hidden="true" />
          ) : (
            <Star key={i} className="size-4 text-muted" aria-hidden="true" />
          )
        )}
      </div>

      <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-foreground/90">
        “{testimonial.quote}”
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-5">
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] text-sm font-bold text-white">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{testimonial.name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {testimonial.role} · {testimonial.school}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
