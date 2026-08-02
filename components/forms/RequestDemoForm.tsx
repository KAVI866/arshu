"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller, useWatch } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Lock,
  Send,
  ShieldCheck,
  Building2,
  ContactRound,
  ListChecks,
  Eye,
} from "lucide-react";
import {
  schoolTypes,
  boards,
  studentCounts,
  staffCounts,
  campusCounts,
  existingErps,
  interestedPlans,
  requiredModules,
  goLiveWindows,
  countries,
  formSteps,
} from "@/data/forms";
import { FloatingInput, FloatingTextarea, FloatingSelect } from "@/components/forms/FloatingFields";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";

const stepIcons = [Building2, ContactRound, ListChecks, Eye];

export interface RequestDemoValues {
  schoolName: string;
  principalName: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  schoolType: string;
  board: string;
  studentCount: string;
  staffCount: string;
  campuses: string;
  existingErp: string;
  interestedPlan: string;
  modules: string[];
  goLive: string;
  message: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\-\s0-9]{8,18}$/;

export function RequestDemoForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<RequestDemoValues>({
    mode: "onTouched",
    defaultValues: { modules: [] },
  });

  const values = useWatch({ control });

  const required = (message: string) => ({
    validate: (v: unknown) => (v === undefined || v === null || v === "" || (Array.isArray(v) && v.length === 0) ? message : true),
  });

  const validateStep = async (index: number) => {
    if (index === 0) {
      return await trigger(["schoolName", "schoolType", "board", "studentCount", "staffCount", "campuses", "country"]);
    }
    if (index === 1) {
      return await trigger(["principalName", "contactPerson", "email", "phone", "address", "city", "state"]);
    }
    if (index === 2) {
      return await trigger(["existingErp", "interestedPlan", "modules", "goLive"]);
    }
    return true;
  };

  const next = async () => {
    const ok = await validateStep(step);
    if (!ok) return;
    setStep((s) => Math.min(s + 1, formSteps.length - 1));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async () => {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    router.push("/request-success");
  };

  const progress = useMemo(
    () => Math.round((step / (formSteps.length - 1)) * 100),
    [step]
  );

  return (
    <div className="mx-auto max-w-3xl">
      {/* Stepper */}
      <div className="mb-10">
        <div className="flex items-center justify-between" role="tablist" aria-label="Form steps">
          {formSteps.map((stepMeta, index) => {
            const Icon = stepIcons[index];
            const active = index === step;
            const done = index < step;
            return (
              <button
                key={stepMeta.id}
                type="button"
                onClick={() => {
                  if (index < step) setStep(index);
                }}
                className={cn("flex flex-col items-center gap-2", index < step ? "cursor-pointer" : "cursor-default")}
                aria-current={active ? "step" : undefined}
              >
                <span
                  className={cn(
                    "grid size-11 place-items-center rounded-full border transition-all duration-300",
                    done
                      ? "border-success bg-success/10 text-success"
                      : active
                        ? "border-transparent bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-2)] text-white shadow-[var(--shadow-glow)]"
                        : "border-border bg-surface text-muted-foreground"
                  )}
                >
                  {done ? <Check className="size-5" strokeWidth={3} aria-hidden="true" /> : <Icon className="size-5" aria-hidden="true" />}
                </span>
                <span
                  className={cn(
                    "hidden text-xs font-medium sm:block",
                    active ? "text-foreground" : done ? "text-success" : "text-muted-foreground"
                  )}
                >
                  {stepMeta.title}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)]"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 28 }}
          />
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-8"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -28 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 0 ? (
              <div className="space-y-5">
                <div className="mb-6">
                  <h2 className="font-heading text-xl font-semibold text-foreground">School Details</h2>
                  <p className="text-sm text-muted-foreground">Tell us about your institution.</p>
                </div>
                <FloatingInput label="School Name" {...register("schoolName", required("School name is required"))} error={errors.schoolName?.message} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <FloatingSelect label="School Type" options={schoolTypes} {...register("schoolType", required("Select a school type"))} error={errors.schoolType?.message} />
                  <FloatingSelect label="Board / Curriculum" options={boards} {...register("board", required("Select a board"))} error={errors.board?.message} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FloatingSelect label="Student Count" options={studentCounts} {...register("studentCount", required("Select student count"))} error={errors.studentCount?.message} />
                  <FloatingSelect label="Staff Count" options={staffCounts} {...register("staffCount", required("Select staff count"))} error={errors.staffCount?.message} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FloatingSelect label="Campuses" options={campusCounts} {...register("campuses", required("Select campus count"))} error={errors.campuses?.message} />
                  <FloatingSelect label="Country" options={countries} {...register("country", required("Select a country"))} error={errors.country?.message} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FloatingInput label="City" {...register("city", required("City is required"))} error={errors.city?.message} />
                  <FloatingInput label="State / Region" {...register("state", required("State is required"))} error={errors.state?.message} />
                </div>
              </div>
            ) : null}

            {step === 1 ? (
              <div className="space-y-5">
                <div className="mb-6">
                  <h2 className="font-heading text-xl font-semibold text-foreground">Contact Information</h2>
                  <p className="text-sm text-muted-foreground">Who should our team reach out to?</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FloatingInput label="Principal Name" {...register("principalName", required("Principal name is required"))} error={errors.principalName?.message} />
                  <FloatingInput label="Contact Person" {...register("contactPerson", required("Contact person is required"))} error={errors.contactPerson?.message} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FloatingInput
                    type="email"
                    label="Official Email"
                    {...register("email", {
                      required: "Official email is required",
                      validate: (v) => emailPattern.test(v) || "Enter a valid email address",
                    })}
                    error={errors.email?.message}
                  />
                  <FloatingInput
                    type="tel"
                    label="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                      validate: (v) => phonePattern.test(v) || "Enter a valid phone number",
                    })}
                    error={errors.phone?.message}
                  />
                </div>
                <FloatingTextarea label="Address" rows={3} {...register("address", required("Address is required"))} error={errors.address?.message} />
              </div>
            ) : null}

            {step === 2 ? (
              <div className="space-y-5">
                <div className="mb-6">
                  <h2 className="font-heading text-xl font-semibold text-foreground">Requirements</h2>
                  <p className="text-sm text-muted-foreground">What does your school need?</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FloatingSelect label="Existing System" options={existingErps} {...register("existingErp", required("Select an existing system"))} error={errors.existingErp?.message} />
                  <FloatingSelect label="Interested Plan" options={interestedPlans} {...register("interestedPlan", required("Select a plan"))} error={errors.interestedPlan?.message} />
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-foreground">
                    Required Modules <span className="text-muted-foreground">(select all that apply)</span>
                  </p>
                  <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {requiredModules.map((mod) => (
                      <label
                        key={mod.value}
                        className={cn(
                          "flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm transition-all duration-200",
                          (values.modules ?? []).includes(mod.value)
                            ? "border-primary/50 bg-primary/5 text-foreground shadow-[var(--shadow-soft)]"
                            : "border-border bg-surface text-muted-foreground hover:border-primary/30"
                        )}
                      >
                        <Controller
                          control={control}
                          name="modules"
                          render={({ field }) => (
                            <input
                              type="checkbox"
                              className="size-4 shrink-0 accent-[var(--primary)]"
                              checked={field.value.includes(mod.value)}
                              onChange={(e) => {
                                const next = e.target.checked
                                  ? [...field.value, mod.value]
                                  : field.value.filter((v) => v !== mod.value);
                                field.onChange(next);
                              }}
                            />
                          )}
                        />
                        {mod.label}
                      </label>
                    ))}
                  </div>
                  {errors.modules ? (
                    <p className="mt-1.5 text-xs font-medium text-danger" role="alert">
                      {errors.modules.message}
                    </p>
                  ) : null}
                </div>

                <FloatingSelect label="Expected Go-live" options={goLiveWindows} {...register("goLive", required("Select a timeline"))} error={errors.goLive?.message} />
                <FloatingTextarea label="Additional Message" rows={4} {...register("message")} />
              </div>
            ) : null}

            {step === 3 ? (
              <div className="space-y-6">
                <div className="mb-6">
                  <h2 className="font-heading text-xl font-semibold text-foreground">Review your request</h2>
                  <p className="text-sm text-muted-foreground">Confirm everything looks right before submitting.</p>
                </div>
                <ReviewRow label="School" value={`${values.schoolName ?? "—"} · ${values.schoolType ?? "—"}`} />
                <ReviewRow label="Contact" value={`${values.contactPerson ?? "—"} (${values.email ?? "—"})`} />
                <ReviewRow label="Board / Curriculum" value={boards.find((b) => b.value === values.board)?.label ?? "—"} />
                <ReviewRow label="Scale" value={`${values.studentCount ?? "—"} students · ${values.staffCount ?? "—"} staff · ${values.campuses ?? "—"} campuses`} />
                <ReviewRow label="Location" value={`${values.city ?? "—"}, ${values.state ?? "—"}, ${values.country ?? "—"}`} />
                <ReviewRow
                  label="Modules"
                  value={
                    (values.modules ?? []).length
                      ? requiredModules.filter((m) => (values.modules ?? []).includes(m.value)).map((m) => m.label).join(" · ")
                      : "—"
                  }
                />
                <ReviewRow label="Plan & Timeline" value={`${interestedPlans.find((p) => p.value === values.interestedPlan)?.label ?? "—"} · ${goLiveWindows.find((g) => g.value === values.goLive)?.label ?? "—"}`} />

                <div className="flex items-start gap-2.5 rounded-xl border border-border bg-muted/50 p-4">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    This is a static demo request — no account is created and nothing is stored. In the real product, this
                    would securely reach the Gradia sales team.
                  </p>
                </div>
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
          <Button
            type="button"
            variant="ghost"
            onClick={back}
            className={cn(step === 0 && "pointer-events-none opacity-0")}
            disabled={step === 0}
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back
          </Button>

          {step < formSteps.length - 1 ? (
            <Button type="button" variant="gradient" size="lg" onClick={next}>
              Continue
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          ) : (
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              disabled={submitting}
              className="min-w-44"
            >
              {submitting ? (
                <>
                  <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
                  Submitting…
                </>
              ) : (
                <>
                  Submit request
                  <Send className="size-4" aria-hidden="true" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>

      <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
        <Lock className="size-3.5" aria-hidden="true" />
        Your information is private and only used to schedule your demo.
      </p>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-border pb-4 last:border-b-0">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      <span className="text-right text-sm font-medium text-foreground">{value}</span>
    </div>
  );
}
