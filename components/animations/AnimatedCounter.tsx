"use client";

import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useMounted } from "@/hooks/use-mounted";

export interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const triggerRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(triggerRef, { once: true, margin: "-60px" });
  const mounted = useMounted();
  const startRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (inView && mounted) startRef.current?.();
  }, [inView, mounted]);

  const staticValue = `${prefix}${value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;

  if (!mounted) {
    return (
      <span ref={triggerRef} className={className}>
        {staticValue}
      </span>
    );
  }

  return (
    <CountUp
      end={value}
      startOnMount={false}
      duration={duration}
      decimals={decimals}
      prefix={prefix}
      suffix={suffix}
      separator=","
    >
      {({ countUpRef, start }) => {
        startRef.current = start;
        return (
          <span
            ref={(node) => {
              triggerRef.current = node;
              countUpRef.current = node as HTMLElement;
            }}
            className={className}
          >
            {staticValue}
          </span>
        );
      }}
    </CountUp>
  );
}
