export const decision = {
  title: "Phase 1 Decision Gate",

  subtitle:
    "Before moving to Phase 2 (SRS), validate the idea through real customer conversations—not assumptions.",

  rule: {
    title: "The Rule",

    description:
      "Do not move to Phase 2 until you have spoken with at least 10 potential business owners and 20 potential workers in person. Skip surveys and forms. Real conversations reveal the truth.",
  },

  questions: [
    "How many shifts does your business currently fill each month using WhatsApp or phone calls?",
    "What is the worst consequence of an unfilled shift? (Revenue loss, customer complaints, owner covering the shift, etc.)",
    "How much would you pay to guarantee a filled shift within two hours?",
    "Have you tried any staffing software? What worked and what didn't?",
    "For workers: What currently stops you from finding more flexible shifts?",
    "For workers: What would make you trust a new platform with your time?",
  ],

  greenFlags: [
    "At least 5 of 10 businesses say they would pay ₹999/month if shifts are reliably filled.",
    "At least 3 businesses agree to become paid beta customers.",
    "At least 50 workers register interest in receiving shift notifications.",
    "A clear first vertical (restaurants, salons or events) has been identified.",
  ],

  redFlags: [
    "Businesses say their current hiring process already works well.",
    "Businesses cannot quantify the financial impact of an unfilled shift.",
    "Workers only want permanent jobs instead of flexible shifts.",
    "A well-funded competitor launches locally before Planet BizSync.",
  ],

  actionPlan: [
    "Day 1–2: Visit 15 restaurants in T. Nagar or Adyar and interview business owners.",
    "Day 3–4: Visit two college campuses and speak with at least 30 students.",
    "Day 5–6: Meet three event management companies and understand their staffing process.",
    "Day 7: Summarize findings, identify patterns and refine the SRS before writing code.",
  ],
};