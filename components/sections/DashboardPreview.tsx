"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { GraduationCap, Search, Bell, ShieldCheck, ChevronDown, TrendingUp } from "lucide-react";
import { dashboardMetrics } from "@/data/statistics";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { cn } from "@/lib/utils";

interface TooltipEntry {
  name?: string;
  value?: number | string;
  dataKey?: string | number;
  color?: string;
}

interface DashboardTooltipProps {
  active?: boolean;
  payload?: TooltipEntry[];
  label?: string | number;
}

function DashboardTooltip({ active, payload, label }: DashboardTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-surface px-3 py-2 text-xs shadow-[var(--shadow-card)]">
      <p className="font-medium text-muted-foreground">{label}</p>
      {payload.map((entry, index) => (
        <p key={index} className="font-number font-bold text-foreground">
          {entry.name}: {entry.value}%
        </p>
      ))}
    </div>
  );
}

const attendanceData = [
  { month: "Aug", attendance: 92, target: 88 },
  { month: "Sep", attendance: 94, target: 90 },
  { month: "Oct", attendance: 93, target: 90 },
  { month: "Nov", attendance: 96, target: 91 },
  { month: "Dec", attendance: 95, target: 91 },
  { month: "Jan", attendance: 97, target: 92 },
];

const feeData = [
  { name: "Tuition", value: 820 },
  { name: "Transport", value: 210 },
  { name: "Labs", value: 140 },
  { name: "Sports", value: 90 },
  { name: "Other", value: 60 },
];

const sidebarModules = [
  { icon: "LayoutDashboard", label: "Overview", active: true },
  { icon: "Users", label: "Students" },
  { icon: "ClipboardCheck", label: "Attendance" },
  { icon: "Wallet", label: "Fees" },
  { icon: "CalendarRange", label: "Exams" },
  { icon: "ChartColumn", label: "Reports" },
];

export function DashboardPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-float)]",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] opacity-10 blur-3xl"
      />

      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-danger/70" />
          <span className="size-3 rounded-full bg-warning/70" />
          <span className="size-3 rounded-full bg-success/70" />
        </div>
        <div className="flex items-center gap-1 rounded-lg bg-surface px-3 py-1 text-xs text-muted-foreground shadow-[var(--shadow-soft)]">
          <ShieldCheck className="size-3.5 text-success" aria-hidden="true" />
          gradia.app/dashboard
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Search className="size-4" aria-hidden="true" />
          <Bell className="size-4" aria-hidden="true" />
          <div className="grid size-6 place-items-center rounded-full bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] text-[10px] font-bold text-white">
            RS
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-44 shrink-0 border-r border-border p-3 md:block">
          <div className="mb-3 flex items-center gap-2 px-2 py-1.5">
            <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)] text-white">
              <GraduationCap className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold text-foreground">Gradia</span>
          </div>
          <nav className="space-y-0.5">
            {sidebarModules.map((mod) => (
              <span
                key={mod.label}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-xs transition-colors",
                  mod.active
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-muted-foreground"
                )}
              >
                <DynamicIcon name={mod.icon} size={14} />
                {mod.label}
              </span>
            ))}
          </nav>
          <div className="mt-4 rounded-xl border border-border bg-muted/50 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              School year
            </p>
            <p className="mt-1 text-xs font-medium text-foreground">2025 – 26</p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-[var(--hero-gradient-1)] to-[var(--hero-gradient-3)]" />
            </div>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">Good morning, Principal Rao</p>
              <p className="text-[11px] text-muted-foreground">Here&apos;s your school at a glance</p>
            </div>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white shadow-[var(--shadow-soft)]"
            >
              New admission
              <ChevronDown className="size-3" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            {dashboardMetrics.map((metric) => (
              <div key={metric.id} className="rounded-xl border border-border bg-surface p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className={cn("grid size-7 place-items-center rounded-lg bg-muted", metric.color)}>
                    <DynamicIcon name={metric.icon} size={14} />
                  </span>
                  <span
                    className={cn(
                      "flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                      metric.trend === "up" ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                    )}
                  >
                    <TrendingUp className="size-2.5" aria-hidden="true" />
                    {metric.change}
                  </span>
                </div>
                <p className="font-number text-lg font-bold text-foreground">{metric.value}</p>
                <p className="text-[10px] text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold text-foreground">Attendance trend</p>
                <span className="flex items-center gap-1 text-[10px] font-medium text-success">
                  <span className="size-1.5 rounded-full bg-success" />
                  Above target
                </span>
              </div>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={attendanceData} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
                    <defs>
                      <linearGradient id="attendanceFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--hero-gradient-1)" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="var(--hero-gradient-1)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 10, fill: "var(--text-secondary)" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: "var(--text-secondary)" }} axisLine={false} tickLine={false} />
                    <Tooltip content={<DashboardTooltip />} cursor={{ stroke: "var(--border)" }} />
                    <Area type="monotone" dataKey="attendance" stroke="var(--hero-gradient-1)" strokeWidth={2} fill="url(#attendanceFill)" />
                    <Area type="monotone" dataKey="target" stroke="var(--hero-gradient-3)" strokeWidth={1.5} strokeDasharray="4 4" fill="transparent" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-surface p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold text-foreground">Fees collected</p>
                <span className="font-number text-xs font-bold text-success">$1.2M</span>
              </div>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={feeData} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 9, fill: "var(--text-secondary)" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: "var(--text-secondary)" }} axisLine={false} tickLine={false} />
                    <Tooltip cursor={{ fill: "var(--muted)" }} contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", background: "var(--surface)", fontSize: 12 }} />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      {feeData.map((entry, i) => (
                        <Cell
                          key={entry.name}
                          fill={["var(--hero-gradient-1)", "var(--hero-gradient-2)", "var(--hero-gradient-3)", "var(--warning)", "var(--success)"][i]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
