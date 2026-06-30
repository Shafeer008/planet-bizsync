export const risks = {
  title: "Risk Analysis",

  subtitle:
    "The challenges that could prevent Planet BizSync from succeeding—and how we plan to mitigate them.",

  risks: [
    {
      level: "High",
      color: "red",

      title:
        "Cold Start Failure — Unable to acquire businesses and workers simultaneously",

      mitigation:
        "Seed worker supply before onboarding businesses. Manually recruit 200+ workers in a focused geography before launch. Coordinate the first few shifts manually until marketplace activity becomes self-sustaining.",
    },

    {
      level: "High",
      color: "red",

      title:
        "Worker No-Shows Damage Business Trust",

      mitigation:
        "Introduce WhatsApp confirmations 24 hours and 2 hours before each shift, maintain backup workers, display no-show history publicly, and suspend workers after repeated no-shows.",
    },

    {
      level: "Medium",
      color: "yellow",

      title:
        "Large Platforms (Apna / WorkIndia) Enter the Market",

      mitigation:
        "Focus on operational workflows such as QR attendance, reliability scoring and workforce analytics that become deeply integrated into business operations and difficult to replace.",
    },

    {
      level: "Medium",
      color: "yellow",

      title:
        "Businesses Bypass the Platform",

      mitigation:
        "Keep worker ratings, attendance history, analytics and reliability records exclusive to Planet BizSync so businesses continue using the platform instead of hiring directly.",
    },

    {
      level: "Medium",
      color: "yellow",

      title:
        "Labour Law & Compliance",

      mitigation:
        "Operate as a technology marketplace rather than an employer. Workers contract directly with businesses. Validate the operating model with legal experts before launch.",
    },

    {
      level: "Low",
      color: "green",

      title:
        "Solo Founder Burnout",

      mitigation:
        "Prioritize customer validation over feature development. Build only essential functionality, automate gradually, and maintain continuous customer interaction throughout the first months.",
    },
  ],
};