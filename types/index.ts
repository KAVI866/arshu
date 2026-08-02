export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  gradient: string;
  highlights: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  badge?: string;
}

export interface PricingFeature {
  name: string;
  basic: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  custom?: boolean;
  popular?: boolean;
  cta: string;
  features: string[];
  highlight?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  school: string;
  quote: string;
  avatar: string;
  rating: number;
  initials: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradient: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  studentName: string;
  school: string;
  schoolLogo: string;
  image: string;
  gradient: string;
  tags: string[];
  featured?: boolean;
  height: "short" | "medium" | "tall";
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
}

export interface DashboardMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
  color: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FormOption {
  label: string;
  value: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  sub?: string;
  href?: string;
}
