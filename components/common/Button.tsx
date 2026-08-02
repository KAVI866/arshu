import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium tracking-[-0.01em] transition-all duration-300 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)]",
        gradient:
          "bg-gradient-to-r from-[var(--hero-gradient-1)] via-[var(--hero-gradient-2)] to-[var(--hero-gradient-3)] bg-[length:180%_auto] bg-left hover:bg-right text-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)]",
        outline:
          "border border-border bg-surface text-foreground hover:border-[color-mix(in_oklch,var(--primary)_40%,var(--border))] hover:text-primary hover:-translate-y-0.5 shadow-[var(--shadow-soft)]",
        ghost: "text-foreground hover:bg-muted hover:text-foreground",
        secondary: "bg-secondary text-white hover:bg-[color-mix(in_oklch,var(--secondary),#000_8%)] shadow-[var(--shadow-soft)]",
        glass:
          "glass text-foreground hover:border-[color-mix(in_oklch,var(--primary)_45%,transparent)] hover:text-primary",
        white: "bg-white text-slate-900 hover:bg-slate-100 shadow-[var(--shadow-card)]",
        dark: "bg-[var(--dark)] text-white hover:bg-[var(--dark-surface)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-[0.95rem]",
        xl: "h-14 px-7 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: never;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
);
Button.displayName = "Button";

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  href: string;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, href, ...props }, ref) => (
    <Link
      ref={ref}
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
LinkButton.displayName = "LinkButton";

export { Button, LinkButton, buttonVariants };
