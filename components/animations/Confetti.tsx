"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface ConfettiPiece {
  x: number;
  y: number;
  rotate: number;
  color: string;
  shape: "rect" | "circle";
  delay: number;
  duration: number;
  size: number;
}

const colors = [
  "var(--hero-gradient-1)",
  "var(--hero-gradient-2)",
  "var(--hero-gradient-3)",
  "var(--success)",
  "var(--warning)",
];

function makePieces(count: number): ConfettiPiece[] {
  return Array.from({ length: count }).map((_, i) => ({
    x: (Math.random() - 0.5) * 2,
    y: Math.random() * 0.6 + 0.2,
    rotate: (Math.random() - 0.5) * 720,
    color: colors[i % colors.length],
    shape: i % 3 === 0 ? "circle" : "rect",
    delay: Math.random() * 0.35,
    duration: 2.4 + Math.random() * 1.6,
    size: 6 + Math.random() * 8,
  }));
}

export function Confetti({ count = 90 }: { count?: number }) {
  const pieces = useMemo(() => makePieces(count), [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {pieces.map((piece, index) => (
        <motion.span
          key={index}
          className="absolute left-1/2 top-1/2"
          style={{
            width: piece.size,
            height: piece.shape === "circle" ? piece.size : piece.size * 1.6,
            background: piece.color,
            borderRadius: piece.shape === "circle" ? "9999px" : "3px",
          }}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
          animate={{
            x: piece.x * 500,
            y: piece.y * 600 + 80,
            rotate: piece.rotate,
            opacity: [1, 1, 0],
            scale: [1, 0.8, 0.4],
          }}
          transition={{ duration: piece.duration, delay: piece.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
