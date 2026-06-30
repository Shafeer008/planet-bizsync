export const mvp = {
  title: "MVP Definition",

  subtitle:
    "The smallest product that proves the marketplace works. Ruthlessly scoped.",

  constraint:
    "You are one developer. You have 11 weeks. The MVP must prove exactly one thing: a business can post a shift and have it filled by a real worker within 4 hours. Every feature that doesn't support that proof is removed.",

  features: [
    {
      step: 1,
      title: "Business Onboarding (Web)",
      description:
        "Business registers with name, business type, location and contact information. Simple onboarding without lengthy verification.",
    },
    {
      step: 2,
      title: "Shift Posting",
      description:
        "Create shifts with role, date, time, pay, location and number of workers. Matching workers receive notifications.",
    },
    {
      step: 3,
      title: "Worker App (PWA)",
      description:
        "Workers register with basic information, skills and availability. Browse nearby shifts and apply with one tap.",
    },
    {
      step: 4,
      title: "Worker Selection",
      description:
        "Businesses review worker profiles, ratings and experience before confirming the shift.",
    },
    {
      step: 5,
      title: "QR Check-In & Check-Out",
      description:
        "Businesses generate a QR code for attendance. Workers scan when arriving and leaving.",
    },
    {
      step: 6,
      title: "Post-Shift Rating",
      description:
        "Both business and worker rate each other to build trust and reliability.",
    },
    {
      step: 7,
      title: "Business Dashboard",
      description:
        "Dashboard showing active shifts, worker history and simple analytics.",
    },
  ],

  excluded: [
    "In-app payment processing (Phase 2).",
    "Background verification.",
    "AI matching algorithm.",
    "Multi-language support.",
    "Native Android/iOS apps (PWA first).",
    "Payroll export.",
  ],
};