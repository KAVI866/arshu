"use client";

import * as React from "react";
import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "peer w-full rounded-xl border border-border bg-surface px-3.5 pb-2 pt-5 text-sm text-foreground placeholder-transparent shadow-[var(--shadow-soft)] transition-all duration-300 focus:border-ring focus:outline-none focus:ring-4 focus:ring-ring/15 focus:shadow-[var(--shadow-glow)]";

const labelBase =
  "pointer-events-none absolute left-3.5 top-4 z-10 origin-[0] -translate-y-1 scale-100 text-sm text-muted-foreground transition-all duration-300 peer-focus:-translate-y-3 peer-focus:scale-[0.82] peer-focus:font-medium peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-[0.82] peer-[:not(:placeholder-shown)]:text-muted-foreground";

const errorBase = "mt-1.5 flex items-center gap-1 text-xs font-medium text-danger";

export interface FloatingInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    return (
      <div className="relative">
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(fieldBase, error && "border-danger/60 focus:ring-danger/15", className)}
          placeholder={label}
          {...props}
        />
        <label htmlFor={inputId} className={labelBase}>
          {label}
        </label>
        {error ? (
          <p id={`${inputId}-error`} className={errorBase} role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);
FloatingInput.displayName = "FloatingInput";

export interface FloatingTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FloatingTextarea = forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  ({ label, error, className, id, rows = 4, ...props }, ref) => {
    const autoId = useId();
    const textareaId = id ?? autoId;
    return (
      <div className="relative">
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          className={cn(fieldBase, "resize-none", error && "border-danger/60", className)}
          placeholder={label}
          {...props}
        />
        <label htmlFor={textareaId} className={cn(labelBase, "peer-[:not(:placeholder-shown)]:-translate-y-3")}>
          {label}
        </label>
        {error ? (
          <p id={`${textareaId}-error`} className={errorBase} role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);
FloatingTextarea.displayName = "FloatingTextarea";

export interface FloatingSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { label: string; value: string }[];
}

export const FloatingSelect = forwardRef<HTMLSelectElement, FloatingSelectProps>(
  ({ label, error, className, id, options, ...props }, ref) => {
    const autoId = useId();
    const selectId = id ?? autoId;
    return (
      <div className="relative">
        <select
          ref={ref}
          id={selectId}
          aria-invalid={Boolean(error)}
          className={cn(
            fieldBase,
            "appearance-none pr-10 text-foreground",
            error && "border-danger/60",
            className
          )}
          {...props}
        >
          <option value="" disabled className="text-muted-foreground">
            Select {label.toLowerCase()}…
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-foreground">
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <label
          htmlFor={selectId}
          className="pointer-events-none absolute left-3.5 top-2 z-10 text-[11px] font-medium text-muted-foreground transition-colors peer-focus:text-primary"
        >
          {label}
        </label>
        {error ? (
          <p id={`${selectId}-error`} className={errorBase} role="alert">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);
FloatingSelect.displayName = "FloatingSelect";
