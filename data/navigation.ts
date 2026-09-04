import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    label: "Product",
    href: "/",
    children: [],
  },
  // {
  //   label: "Solutions",
  //   href: "/features",
  //   children: [
  //     { label: "K-12 Schools", href: "/features#k12", children: [] },
  //     { label: "Higher Education", href: "/features#higher-ed", children: [] },
  //     { label: "International Schools", href: "/features#international", children: [] },
  //     { label: "Group of Institutions", href: "/features#group-institutions", children: [] },
  //   ],
  // },
  {label:"features", href:"/features", children:[]},
  { label: "Pricing", href: "/pricing", children: [] },
  { label: "Student Success", href: "/student-success", children: [] },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", children: [] },
      { label: "Contact", href: "/contact", children: [] },
      { label: "Careers", href: "/about#careers", children: [], badge: "We're hiring" },
    ],
  },
];

export const footerNavigation = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/about#careers" },
    { label: "Pricing", href: "/pricing" },
    { label: "Request a Demo", href: "/get-started" },
  ],
  product: [
    { label: "Features", href: "/features" },
    { label: "Admissions", href: "/features#admissions" },
    { label: "Academics", href: "/features#academics" },
    { label: "Fees & Finance", href: "/features#fees" },
    { label: "Reports", href: "/features#reports" },
  ],
  resources: [
    { label: "Student Success", href: "/student-success" },
    { label: "Help Center", href: "/contact" },
    { label: "Integration Guides", href: "/features#integrations" },
    { label: "API Reference", href: "/features#integrations" },
    { label: "Roadmap", href: "/about#roadmap" },
  ],
  support: [
    { label: "Help Center", href: "/contact" },
    { label: "Contact Sales", href: "/get-started" },
    { label: "Request Success", href: "/request-success" },
    { label: "FAQ", href: "/contact#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
    { label: "Security", href: "/contact" },
    { label: "DPA", href: "/contact" },
  ],
};
