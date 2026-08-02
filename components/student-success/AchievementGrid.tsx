"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, LoaderCircle } from "lucide-react";
import { studentAchievements, achievementCategories } from "@/data/studentAchievements";
import { AchievementCard } from "@/components/student-success/AchievementCard";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 8;

export function AchievementGrid() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    return studentAchievements.filter((achievement) => {
      const matchesCategory = category === "All" || achievement.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        achievement.title.toLowerCase().includes(q) ||
        achievement.description.toLowerCase().includes(q) ||
        achievement.studentName.toLowerCase().includes(q) ||
        achievement.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const shown = filtered.slice(0, visible);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset pagination on filter change
    setVisible(PAGE_SIZE);
  }, [category, query]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visible < filtered.length && !loading) {
          setLoading(true);
          setTimeout(() => {
            setVisible((v) => v + PAGE_SIZE);
            setLoading(false);
          }, 700);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [visible, filtered.length, loading]);

  return (
    <div>
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {achievementCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                category === cat
                  ? "border-transparent bg-gradient-to-r from-[var(--hero-gradient-1)] to-[var(--hero-gradient-2)] text-white shadow-[var(--shadow-card)]"
                  : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
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
            placeholder="Search students, tags..."
            className="w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30"
            aria-label="Search achievements"
          />
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground" aria-live="polite">
        <span>
          Showing <span className="font-semibold text-foreground">{shown.length}</span> of{" "}
          {filtered.length} achievements
        </span>
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5">
        <AnimatePresence mode="popLayout">
          {shown.map((achievement) => (
            <motion.div
              key={achievement.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid"
            >
              <AchievementCard achievement={achievement} compact />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div ref={sentinelRef} className="flex items-center justify-center py-10" aria-hidden="true">
        {loading ? (
          <LoaderCircle className="size-6 animate-spin text-primary" aria-hidden="true" />
        ) : (
          <span className="text-sm text-muted-foreground">
            {visible < filtered.length ? "Scroll for more achievements" : "You've reached the end"}
          </span>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-20 text-center">
          <Search className="size-8 text-muted-foreground" aria-hidden="true" />
          <p className="font-medium text-foreground">No achievements found</p>
          <p className="text-sm text-muted-foreground">Try a different category or search term.</p>
        </div>
      ) : null}
    </div>
  );
}
