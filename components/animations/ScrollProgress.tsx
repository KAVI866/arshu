"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      ref={ref}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[var(--hero-gradient-1)] via-[var(--hero-gradient-2)] to-[var(--hero-gradient-3)]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Marquee({ children, className, speed = 40 }: MarqueeProps) {
  return (
    <div className={cn("group overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee gap-0 group-hover:[animation-play-state:paused]"
        style={{ ["--marquee-duration" as string]: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  );
}
