import type { FAQItem } from "@/types";

export const faqs: FAQItem[] = [
  {
    question: "How long does implementation take?",
    answer:
      "Most schools go live in 2–4 weeks. Our onboarding team migrates existing data, configures your academic structure, trains staff, and runs a parallel run before full cutover. Enterprise and multi-campus rollouts typically take 6–8 weeks with a dedicated project manager.",
    category: "Getting Started",
  },
  {
    question: "Do you migrate our existing data?",
    answer:
      "Yes. Our data team handles the full migration of student records, staff profiles, fee ledgers, attendance history, and past examination results from spreadsheets or legacy ERPs — with validation reports so you know exactly what moved and when.",
    category: "Getting Started",
  },
  {
    question: "Is my school data secure?",
    answer:
      "Absolutely. Gradia is hosted on SOC 2 Type II compliant infrastructure with encryption at rest and in transit, role-based access control, SSO support, and automated backups. We are GDPR-ready and sign DPAs with every institution.",
    category: "Security",
  },
  {
    question: "Does it work on mobile devices?",
    answer:
      "Yes. Gradia is fully responsive across every portal, and dedicated apps for students, parents, and staff are available on iOS and Android with offline-capable attendance marking.",
    category: "Product",
  },
  {
    question: "Can it handle multiple campuses?",
    answer:
      "Yes. The Enterprise plan supports multi-campus and multi-brand operations with centralized governance, per-campus configuration, and consolidated reporting across the entire group of institutions.",
    category: "Product",
  },
  {
    question: "What happens after the free trial ends?",
    answer:
      "You can upgrade to any plan, extend the trial, or export all of your data at any time — there are no lock-ins and no hidden fees. Our team will help you pick the right plan based on your student count and needs.",
    category: "Billing",
  },
  {
    question: "Do you provide training for our staff?",
    answer:
      "Every plan includes onboarding and live training sessions for administrators and faculty. Professional and Enterprise plans include advanced training, recorded academies, and a dedicated success manager.",
    category: "Getting Started",
  },
  {
    question: "Can we integrate Gradia with existing tools?",
    answer:
      "Yes. Gradia ships with an open REST API, webhooks, and pre-built integrations with Google Workspace, Microsoft 365, payment gateways, SMS/email providers, and popular LMS platforms.",
    category: "Product",
  },
];
