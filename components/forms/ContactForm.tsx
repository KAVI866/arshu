"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send, Check } from "lucide-react";
import { FloatingInput, FloatingTextarea } from "@/components/forms/FloatingFields";
import { Button } from "@/components/common/Button";

export interface ContactValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ mode: "onTouched" });

  const onSubmit = async (values: ContactValues) => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSent(true);
    toast.success("Message sent!", {
      description: `Thanks ${values.name.split(" ")[0]}. We'll get back to you within 24 hours.`,
    });
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <h2 className="mb-6 font-heading text-xl font-semibold text-foreground">Send us a message</h2>

      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FloatingInput
            label="Full Name"
            {...register("name", {
              required: "Your name is required",
              minLength: { value: 2, message: "Name is too short" },
            })}
            error={errors.name?.message}
          />
          <FloatingInput
            type="email"
            label="Email Address"
            {...register("email", {
              required: "Email is required",
              validate: (v) => emailPattern.test(v) || "Enter a valid email",
            })}
            error={errors.email?.message}
          />
        </div>

        <FloatingInput
          label="Subject"
          {...register("subject", { required: "Subject is required" })}
          error={errors.subject?.message}
        />

        <FloatingTextarea
          label="Your message"
          rows={6}
          {...register("message", {
            required: "Please add a message",
            minLength: { value: 10, message: "Message should be at least 10 characters" },
          })}
          error={errors.message?.message}
        />

        <Button type="submit" variant="gradient" size="lg" disabled={isSubmitting || sent} className="w-full">
          {sent ? (
            <>
              <Check className="size-4" aria-hidden="true" />
              Message sent
            </>
          ) : (
            <>
              Send message
              <Send className="size-4" aria-hidden="true" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
