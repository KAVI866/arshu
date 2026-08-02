import type { Statistic, TimelineItem, Step, DashboardMetric, ContactInfo } from "@/types";

export const statistics: Statistic[] = [
  { id: "s1", label: "Schools & institutions", value: 2400, suffix: "+", icon: "School" },
  { id: "s2", label: "Students managed", value: 850, suffix: "K+", icon: "Users" },
  { id: "s3", label: "Teachers empowered", value: 62, suffix: "K+", icon: "Presentation" },
  { id: "s4", label: "Average fee recovery", value: 98.5, suffix: "%", decimals: 1, icon: "Wallet" },
];

export const homeStats: Statistic[] = [
  { id: "h1", label: "Schools on Gradia", value: 2400, suffix: "+", icon: "School" },
  { id: "h2", label: "Students managed daily", value: 850, suffix: "K+", icon: "Users" },
  { id: "h3", label: "Avg. admin hours saved / week", value: 40, suffix: "+", icon: "Clock" },
  { id: "h4", label: "Fee recovery rate", value: 98.5, suffix: "%", decimals: 1, icon: "TrendingUp" },
];

export const journeyTimeline: TimelineItem[] = [
  {
    id: "tl1",
    year: "2020",
    title: "The idea",
    description:
      "Gradia began as a single dashboard built for one school principal drowning in spreadsheets.",
    icon: "Lightbulb",
  },
  {
    id: "tl2",
    year: "2021",
    title: "First 50 schools",
    description:
      "Early adopters shaped our core modules — attendance, academics, and fees went into production.",
    icon: "Rocket",
  },
  {
    id: "tl3",
    year: "2023",
    title: "Series A & the portal family",
    description:
      "We shipped student, parent, and faculty portals, raised our Series A, and crossed 1,000 schools.",
    icon: "HeartHandshake",
  },
  {
    id: "tl4",
    year: "2025",
    title: "Analytics & AI",
    description:
      "Launched predictive analytics, smart timetabling, and AI-assisted report writing across all modules.",
    icon: "Sparkles",
  },
  {
    id: "tl5",
    year: "2026",
    title: "2,400+ institutions",
    description:
      "Today Gradia powers 850K+ students across 12 countries — and we're just getting started.",
    icon: "Globe",
  },
];

export const howItWorks: Step[] = [
  {
    id: "step1",
    title: "Request a demo",
    description:
      "Tell us about your school. We'll schedule a personalized walkthrough with your leadership team.",
    icon: "MousePointerClick",
  },
  {
    id: "step2",
    title: "Guided setup",
    description:
      "Our onboarding team configures your academic structure and migrates your existing data.",
    icon: "Wrench",
  },
  {
    id: "step3",
    title: "Train your team",
    description:
      "Live training for administrators, faculty, and support staff — with a full academy of videos.",
    icon: "GraduationCap",
  },
  {
    id: "step4",
    title: "Go live",
    description:
      "Launch in a single term with a parallel run, and watch your school run on autopilot.",
    icon: "Rocket",
  },
];

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: "m1",
    label: "Active Students",
    value: "12,480",
    change: "+4.2%",
    trend: "up",
    icon: "Users",
    color: "text-primary",
  },
  {
    id: "m2",
    label: "Attendance Today",
    value: "96.8%",
    change: "+1.1%",
    trend: "up",
    icon: "CalendarCheck",
    color: "text-success",
  },
  {
    id: "m3",
    label: "Fees Collected (Q3)",
    value: "$1.2M",
    change: "+8.9%",
    trend: "up",
    icon: "Wallet",
    color: "text-warning",
  },
  {
    id: "m4",
    label: "Pending Approvals",
    value: "23",
    change: "-5",
    trend: "down",
    icon: "Clock",
    color: "text-danger",
  },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: "Mail",
    title: "Email us",
    value: "hello@gradia.app",
    sub: "We reply within 24 hours",
    href: "mailto:hello@gradia.app",
  },
  {
    icon: "Phone",
    title: "Call us",
    value: "+1 (415) 555-0192",
    sub: "Mon–Fri, 9am–6pm PST",
    href: "tel:+14155550192",
  },
  {
    icon: "MapPin",
    title: "Visit us",
    value: "548 Market Street, Suite 240",
    sub: "San Francisco, CA 94104",
    href: "#map",
  },
];
