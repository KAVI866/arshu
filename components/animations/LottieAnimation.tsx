"use client";

import { Component, type ReactNode } from "react";
import dynamic from "next/dynamic";
import successAnimation from "@/assets/lottie/success.json";
import { SuccessCheckmark } from "@/components/animations/SuccessCheckmark";

const Lottie = dynamic(() => import("lottie-react").then((mod) => mod.default), {
  ssr: false,
  loading: () => <Fallback />,
});

function Fallback() {
  return <SuccessCheckmark size={120} />;
}

class LottieBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // Lottie JSON is validated at runtime; fall back to the motion checkmark on any error.
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export function SuccessAnimation() {
  return (
    <LottieBoundary fallback={<Fallback />}>
      <Lottie
        animationData={successAnimation}
        loop={false}
        className="h-[160px] w-[160px]"
        aria-hidden="true"
        role="presentation"
      />
    </LottieBoundary>
  );
}
