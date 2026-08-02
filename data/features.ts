import type { Module } from "@/types";

export const modules: Module[] = [
  {
    id: "admissions",
    title: "Admissions",
    description:
      "Frictionless enrollment journeys with online applications, document verification, and automated offer letters.",
    icon: "GraduationCap",
    color: "from-[#2563EB] to-[#7C3AED]",
    features: ["Online applications", "Automated workflows", "Document verification", "Offer management"],
  },
  {
    id: "attendance",
    title: "Attendance",
    description:
      "Real-time attendance capture via biometrics, RFID, and face recognition with instant parent alerts.",
    icon: "ScanFace",
    color: "from-[#06B6D4] to-[#2563EB]",
    features: ["Biometric & RFID", "Face recognition", "Auto parent alerts", "Leave sync"],
  },
  {
    id: "fees",
    title: "Fees & Finance",
    description:
      "Structured fee collection with online payments, installments, receipts, and ledger-grade accounting.",
    icon: "Wallet",
    color: "from-[#F59E0B] to-[#EF4444]",
    features: ["Online payments", "Installments", "Instant receipts", "GST / tax handling"],
  },
  {
    id: "examinations",
    title: "Examinations",
    description:
      "Plan exams, generate grade sheets, and publish report cards to every portal the moment results are final.",
    icon: "ClipboardCheck",
    color: "from-[#7C3AED] to-[#06B6D4]",
    features: ["Exam scheduling", "Marks entry", "Grade sheets", "Report cards"],
  },
  {
    id: "transport",
    title: "Transport",
    description:
      "GPS-tracked bus routes, stops, and live vehicle status shared with parents in real time.",
    icon: "Bus",
    color: "from-[#22C55E] to-[#06B6D4]",
    features: ["Route planning", "Live GPS tracking", "Stop management", "Trip alerts"],
  },
  {
    id: "library",
    title: "Library",
    description:
      "Catalogue books, manage circulations, and let students reserve titles from any device.",
    icon: "BookOpen",
    color: "from-[#2563EB] to-[#06B6D4]",
    features: ["Digital catalogue", "Issues & returns", "Reservations", "Overdue alerts"],
  },
  {
    id: "hostel",
    title: "Hostel",
    description:
      "Room allocation, attendance, mess billing, and conduct tracking for residential campuses.",
    icon: "Building2",
    color: "from-[#EF4444] to-[#F59E0B]",
    features: ["Room allocation", "Mess billing", "Visitor log", "Conduct tracking"],
  },
  {
    id: "hr",
    title: "HR Management",
    description:
      "Staff records, onboarding, appraisals, and leave workflows unified in one employee lifecycle.",
    icon: "Users",
    color: "from-[#7C3AED] to-[#2563EB]",
    features: ["Staff records", "Onboarding", "Appraisals", "Leave workflows"],
  },
  {
    id: "payroll",
    title: "Payroll",
    description:
      "Automated salary processing, payslips, tax deductions, and statutory compliance in a few clicks.",
    icon: "Banknote",
    color: "from-[#06B6D4] to-[#22C55E]",
    features: ["Auto salary runs", "Digital payslips", "Tax & PF", "Statutory reports"],
  },
  {
    id: "communication",
    title: "Communication",
    description:
      "Broadcasts, notices, emails, and SMS to the right audience — parents, staff, or students — instantly.",
    icon: "MessageSquare",
    color: "from-[#F59E0B] to-[#7C3AED]",
    features: ["Broadcasts", "SMS & email", "Targeted audiences", "Read receipts"],
  },
  {
    id: "academic-planning",
    title: "Academic Planning",
    description:
      "Curriculum mapping, lesson plans, and syllabus tracking across every grade and subject.",
    icon: "CalendarRange",
    color: "from-[#2563EB] to-[#22C55E]",
    features: ["Curriculum mapping", "Lesson plans", "Syllabus tracking", "Units & topics"],
  },
  {
    id: "student-portal",
    title: "Student Portal",
    description:
      "A personal dashboard for marks, homework, timetables, achievements, and campus activities.",
    icon: "User",
    color: "from-[#06B6D4] to-[#7C3AED]",
    features: ["Personal dashboard", "Marks & results", "Homework view", "Activity feed"],
  },
  {
    id: "faculty-portal",
    title: "Faculty Portal",
    description:
      "Take attendance, grade work, publish homework, and collaborate with colleagues from one space.",
    icon: "Presentation",
    color: "from-[#7C3AED] to-[#EF4444]",
    features: ["Class management", "Grade book", "Homework tools", "Staff collaboration"],
  },
  {
    id: "parent-portal",
    title: "Parent Portal",
    description:
      "Real-time visibility into academics, attendance, fees, and school announcements for guardians.",
    icon: "HeartHandshake",
    color: "from-[#22C55E] to-[#2563EB]",
    features: ["Fee payments", "Attendance alerts", "Report cards", "Notice board"],
  },
  {
    id: "reports",
    title: "Reports",
    description:
      "100+ ready-made reports for academics, finance, attendance, and operations — exportable in one click.",
    icon: "FileText",
    color: "from-[#EF4444] to-[#06B6D4]",
    features: ["100+ templates", "One-click export", "Scheduled delivery", "Custom layouts"],
  },
  {
    id: "analytics",
    title: "Analytics",
    description:
      "A decision cockpit that turns school data into trends, cohorts, and actionable insights.",
    icon: "ChartColumn",
    color: "from-[#2563EB] to-[#F59E0B]",
    features: ["Live dashboards", "Cohort trends", "Predictive insights", "Shareable views"],
  },
  {
    id: "certificates",
    title: "Certificates",
    description:
      "Generate transfer certificates, bonafide letters, and achievement certificates with branded templates.",
    icon: "Award",
    color: "from-[#F59E0B] to-[#22C55E]",
    features: ["TC & bonafide", "Branded templates", "Bulk generation", "Digital signatures"],
  },
  {
    id: "achievements",
    title: "Achievements",
    description:
      "Celebrate student wins in sports, science, arts, and more with a public success showcase.",
    icon: "Trophy",
    color: "from-[#06B6D4] to-[#F59E0B]",
    features: ["Success showcase", "Category walls", "Certificates", "Social sharing"],
  },
  {
    id: "inventory",
    title: "Inventory",
    description:
      "Track stationery, labs, and assets with stock levels, purchase orders, and vendor management.",
    icon: "Package",
    color: "from-[#7C3AED] to-[#22C55E]",
    features: ["Stock levels", "Purchase orders", "Vendor management", "Asset tags"],
  },
  {
    id: "visitor-management",
    title: "Visitor Management",
    description:
      "Digital visitor check-in, purpose tracking, and security alerts for a safer campus.",
    icon: "ShieldCheck",
    color: "from-[#2563EB] to-[#EF4444]",
    features: ["Digital check-in", "Visitor logs", "Security alerts", "Approval flows"],
  },
  {
    id: "digital-id",
    title: "Digital ID Cards",
    description:
      "Smart student and staff ID cards with QR verification, roles, and access control.",
    icon: "ScanLine",
    color: "from-[#06B6D4] to-[#F59E0B]",
    features: ["QR verification", "Role-based access", "Instant design", "Bulk printing"],
  },
  {
    id: "homework",
    title: "Homework",
    description:
      "Assign, track, and grade homework with attachments, due dates, and parent visibility.",
    icon: "BookMarked",
    color: "from-[#22C55E] to-[#7C3AED]",
    features: ["Quick assignment", "Attachment uploads", "Due-date tracking", "Grade sync"],
  },
  {
    id: "assignments",
    title: "Assignments",
    description:
      "Manage projects and assignments with rubrics, submissions, and plagiarism-aware workflows.",
    icon: "PenTool",
    color: "from-[#EF4444] to-[#2563EB]",
    features: ["Rubric grading", "Submissions", "Peer review", "Feedback loops"],
  },
  {
    id: "leave-management",
    title: "Leave Management",
    description:
      "Staff and student leave applications with approvals, balance tracking, and calendar sync.",
    icon: "CalendarOff",
    color: "from-[#F59E0B] to-[#06B6D4]",
    features: ["Apply & approve", "Balance tracking", "Calendar sync", "Reports"],
  },
  {
    id: "notifications",
    title: "Notifications",
    description:
      "A unified, real-time notification engine across portals, email, SMS, and mobile push.",
    icon: "Bell",
    color: "from-[#7C3AED] to-[#06B6D4]",
    features: ["Real-time engine", "Multi-channel", "Priority rules", "DND control"],
  },
];

export const featureHighlights: Module[] = [
  modules.find((m) => m.id === "admissions")!,
  modules.find((m) => m.id === "attendance")!,
  modules.find((m) => m.id === "fees")!,
  modules.find((m) => m.id === "examinations")!,
  modules.find((m) => m.id === "analytics")!,
  modules.find((m) => m.id === "parent-portal")!,
];

export const moduleCategories = [
  "All Modules",
  "Admissions",
  "Academics",
  "Finance",
  "Operations",
  "Portals",
  "Analytics",
];
