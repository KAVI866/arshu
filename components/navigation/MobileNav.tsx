"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronRight, ArrowRight } from "lucide-react";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/common/Logo";
import { LinkButton } from "@/components/common/Button";
import { SocialIcon } from "@/components/common/SocialIcon";
import { siteConfig } from "@/constants/site";

export interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open)
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reset accordion on close
      setExpanded(null);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => onOpenChange(false)}
            className="absolute inset-0 bg-[var(--dark)]/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-surface shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex h-16 items-center justify-between border-b border-border px-5">
              <Logo />
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="grid size-10 place-items-center rounded-xl border border-border text-foreground transition-colors hover:bg-muted"
                aria-label="Close menu"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const hasChildren = Boolean(item.children?.length);
                  const isOpen = expanded === item.label;

                  return (
                    <li key={item.label}>
                      {hasChildren ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setExpanded(isOpen ? null : item.label)}
                            className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                            aria-expanded={isOpen}
                          >
                            {item.label}
                            <ChevronRight
                              className={cn("size-4 text-muted-foreground transition-transform duration-300", isOpen && "rotate-90")}
                              aria-hidden="true"
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                {item.children?.map((child) => (
                                  <li key={child.label}>
                                    <Link
                                      href={child.href ?? "#"}
                                      onClick={() => onOpenChange(false)}
                                      className="flex items-center justify-between rounded-xl px-4 py-2.5 pl-7 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                                    >
                                      <span className="flex items-center gap-2">
                                        {child.label}
                                        {child.badge ? (
                                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                                            {child.badge}
                                          </span>
                                        ) : null}
                                      </span>
                                      <ArrowRight className="size-3.5 text-muted-foreground" aria-hidden="true" />
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href ?? "#"}
                          onClick={() => onOpenChange(false)}
                          className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                        >
                          {item.label}
                          <ArrowRight className="size-4 text-muted-foreground" aria-hidden="true" />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="space-y-4 border-t border-border p-5">
              <LinkButton href="/get-started" variant="gradient" size="lg" className="w-full">
                Request a demo
              </LinkButton>
              <div className="flex items-center justify-center gap-3">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={social.label}
                  >
                    <SocialIcon name={social.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
