"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ListFilter, Check } from "lucide-react";
import { modules } from "@/data/features";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { cn } from "@/lib/utils";

const categoryByModule: Record<string, string> = {
  admissions: "Admissions",
  attendance: "Academics",
  academic_planning: "Academics",
  examinations: "Academics",
  homework: "Academics",
  assignments: "Academics",
  certificates: "Academics",
  fees: "Finance",
  fees_finance: "Finance",
  payroll: "Finance",
  transport: "Operations",
  library: "Operations",
  hostel: "Operations",
  hr: "Operations",
  inventory: "Operations",
  visitor_management: "Operations",
  digital_id: "Operations",
  leave_management: "Operations",
  communication: "Academics",
  student_portal: "Portals",
  faculty_portal: "Portals",
  parent_portal: "Portals",
  reports: "Analytics",
  analytics: "Analytics",
  achievements: "Portals",
  notifications: "Portals",
};

export const featureCategories = [
  "All Modules",
  "Admissions",
  "Academics",
  "Finance",
  "Operations",
  "Portals",
  "Analytics",
];

export function ModulesExplorer() {
  const [category, setCategory] = useState("All Modules");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return modules.filter((module) => {
      const matchesCategory =
        category === "All Modules" || categoryByModule[module.id] === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        module.title.toLowerCase().includes(q) ||
        module.description.toLowerCase().includes(q) ||
        module.features.some((f) => f.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
          {featureCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={category === cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                category === cat
                  ? "border-transparent bg-gradient-to-r from-[var(--hero-gradient-1)] to-[var(--hero-gradient-2)] text-white shadow-[var(--shadow-card)]"
                  : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {cat === "All Modules" ? <ListFilter className="size-4" aria-hidden="true" /> : null}
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 25+ modules..."
            className="w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
            aria-label="Search modules"
          />
        </div>
      </div>

      <p className="mb-6 text-sm text-muted-foreground" aria-live="polite">
        Showing <span className="font-semibold text-foreground">{filtered.length}</span> of {modules.length} modules
      </p>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((module) => (
            <motion.div
              key={module.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <FeatureCard module={module} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-20 text-center">
          <Search className="size-8 text-muted-foreground" aria-hidden="true" />
          <p className="font-medium text-foreground">No modules match your search</p>
          <p className="text-sm text-muted-foreground">Try a different keyword or category.</p>
        </div>
      ) : null}

      <div className="mt-12 rounded-2xl border border-border bg-surface p-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <p className="text-sm font-semibold text-foreground">Every module ships with:</p>
          {[
            "Role-based access",
            "Real-time sync",
            "Exportable reports",
            "Mobile-ready",
            "API access",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Check className="size-3.5 text-success" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
