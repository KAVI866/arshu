import Link from "next/link";
import { ChevronRight, House } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbProps {
  current: string;
  className?: string;
}

export function Breadcrumb({ current, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-1.5 text-xs text-muted-foreground", className)}
    >
      <Link
        href="/"
        className="flex items-center gap-1 transition-colors hover:text-primary"
      >
        <House className="size-3.5" aria-hidden="true" />
        Home
      </Link>
      <ChevronRight className="size-3.5" aria-hidden="true" />
      <span className="font-medium text-foreground">{current}</span>
    </nav>
  );
}
