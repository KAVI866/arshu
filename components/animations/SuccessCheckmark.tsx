"use client";

import { motion } from "framer-motion";

export function SuccessCheckmark({ size = 112 }: { size?: number }) {
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }} aria-hidden="true">
      <motion.span
        className="absolute inset-0 rounded-full bg-[color-mix(in_oklch,var(--success)_20%,transparent)]"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.15, 1] }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="absolute inset-0 animate-pulse-ring rounded-full bg-[color-mix(in_oklch,var(--success)_35%,transparent)]"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: [0.6, 1.5], opacity: [0.6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.6, ease: "easeOut" }}
      />
      <motion.svg
        viewBox="0 0 100 100"
        width={size * 0.72}
        height={size * 0.72}
        className="relative"
        fill="none"
      >
        <motion.circle
          cx="50"
          cy="50"
          r="46"
          stroke="var(--success)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <motion.path
          d="M30 51 L45 66 L72 37"
          stroke="var(--success)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
        />
      </motion.svg>
    </div>
  );
}
