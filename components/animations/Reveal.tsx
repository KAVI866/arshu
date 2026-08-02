"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
}

export function Reveal({ children, className, stagger = 0.12, delayChildren = 0.1, amount = 0.15 }: RevealProps) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export interface RevealItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
}

export function RevealItem({ children, className, direction = "up" }: RevealItemProps) {
  const hidden = {
    up: { opacity: 0, y: 24 },
    left: { opacity: 0, x: 28 },
    right: { opacity: 0, x: -28 },
    scale: { opacity: 0, scale: 0.92 },
  }[direction];

  const item: Variants = {
    hidden,
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={item} className={cn(className)}>
      {children}
    </motion.div>
  );
}
