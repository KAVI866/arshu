"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { pricingPlans } from "@/data/pricing";
import { PricingToggle, type Billing } from "@/components/pricing/PricingToggle";
import { PricingCard } from "@/components/pricing/PricingCard";

export function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("annual");

  return (
    <div>
      <div className="mb-12 flex justify-center">
        <PricingToggle billing={billing} onChange={setBilling} />
      </div>

      <motion.div layout className="grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.id}
            layout
            transition={{ layout: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
            className="h-full"
          >
            <PricingCard plan={plan} billing={billing} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
