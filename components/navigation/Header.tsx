"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import { navItems } from "@/data/navigation";
import type { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/common/Logo";
import { LinkButton } from "@/components/common/Button";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MobileNav } from "@/components/navigation/MobileNav";

function DesktopItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const hasChildren = Boolean(item.children?.length);

  const active = item.href && pathname === item.href;

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => hasChildren && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href ?? "#"}
        className={cn(
          "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
          active && "text-foreground"
        )}
        aria-expanded={hasChildren ? open : undefined}
        aria-haspopup={hasChildren ? "menu" : undefined}
      >
        {item.label}
        {hasChildren ? (
          <ChevronDown
            className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")}
            aria-hidden="true"
          />
        ) : null}
      </Link>

      <AnimatePresence>
        {hasChildren && open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-3"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-surface/95 p-2 shadow-[var(--shadow-float)] backdrop-blur-xl">
              {item.children?.map((child) => (
                <Link
                  key={child.label}
                  href={child.href ?? "#"}
                  className="group/item flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <span>{child.label}</span>
                  <span className="flex items-center gap-2">
                    {child.badge ? (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                        {child.badge}
                      </span>
                    ) : null}
                    <ArrowRight
                      className="size-3.5 opacity-0 transition-all duration-300 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Header() {
  const { scrolled } = useScrollPosition();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-strong border-b border-border shadow-[var(--shadow-soft)]"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Logo />

          {isDesktop ? (
            <>
              <nav aria-label="Primary" className="hidden lg:block">
                <ul className="flex items-center gap-0.5">
                  {navItems.map((item) => (
                    <DesktopItem key={item.label} item={item} />
                  ))}
                </ul>
              </nav>

              <div className="hidden items-center gap-2 lg:flex">
                <Link
                  href="/get-started"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sign in
                </Link>
                <ThemeToggle />
                <LinkButton href="/get-started" variant="gradient" size="sm">
                  Request a demo
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" aria-hidden="true" />
                </LinkButton>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="grid size-11 place-items-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:bg-muted"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="size-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </header>

      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
}
