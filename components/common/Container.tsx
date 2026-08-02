import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "page" | "tight";
}

export function Container({ className, size = "page", ...props }: ContainerProps) {
  return (
    <div
      className={cn(size === "page" ? "container-page" : "container-tight", className)}
      {...props}
    />
  );
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  muted?: boolean;
}

export function Section({ className, muted, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative section-padding",
        muted && "bg-muted/40",
        className
      )}
      {...props}
    />
  );
}
