"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/constants/site";
import { Logo } from "@/components/common/Logo";
import { SocialIcon } from "@/components/common/SocialIcon";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  { title: "Product", links: footerNavigation.product },
  { title: "Company", links: footerNavigation.company },
  { title: "Resources", links: footerNavigation.resources },
  { title: "Support", links: footerNavigation.support },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    toast.success("You're on the list!", {
      description: "Product updates land in your inbox — no spam, ever.",
    });
    setEmail("");
  };

  return (
    <footer className="relative border-t border-border bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklch,var(--primary)_50%,transparent)] to-transparent" />

      <div className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm space-y-6">
            <Logo size="md" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}. One beautiful cloud platform for admissions, academics, fees,
              and campus operations — built for modern institutions.
            </p>

            <form onSubmit={subscribe} className="space-y-3" aria-label="Newsletter">
              <label htmlFor="footer-newsletter" className="block text-sm font-medium text-foreground">
                Product updates, monthly
              </label>
              <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/50 p-1.5 focus-within:border-ring">
                <input
                  id="footer-newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@school.edu"
                  className="w-full bg-transparent px-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground transition-transform hover:scale-105"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="size-4" aria-hidden="true" /> : <ArrowRight className="size-4" aria-hidden="true" />}
                </button>
              </div>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
                Join 20,000+ educators reading the Gradia newsletter.
              </p>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-sm font-semibold text-foreground">{column.title}</h3>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. A static demo built for stakeholder review.
          </p>

          <div className="flex items-center gap-2">
            {siteConfig.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                aria-label={social.label}
              >
                <SocialIcon name={social.icon} size={16} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {footerNavigation.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
