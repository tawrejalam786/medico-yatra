/**
 * Medico Yatra — Careers Data
 */

export const CAREERS = [
  {
    id: "mbbs",
    title: "MBBS / Medicine",
    shortTitle: "MBBS / MD",
    emoji: "🩺",
    icon: "stethoscope",
    group: "direct",
    description:
      "The most sought-after healthcare career. Study medicine at an NMC-recognised university abroad and return as a licensed physician after FMGE / NExT.",
    duration: "5–6 years (including internship)",
    entryRequirement: "Class 12 (PCB) + NEET",
    licenseExam: "FMGE / NExT (for India), USMLE (for USA), PLAB/UKMLA (for UK), AMC (for Australia)",
    slug: "/courses/mbbs-abroad",
    popular: true,
  },
  {
    id: "dentistry",
    title: "BDS / Dentistry",
    shortTitle: "Dentistry (BDS)",
    emoji: "🦷",
    icon: "smile",
    group: "direct",
    description:
      "A rewarding career with strong independent practice potential. Study BDS at recognised universities abroad, gain valuable clinical experience, and successful modern dentistry.",
    duration: "4–5 years",
    entryRequirement: "Class 12 (PCB) + NEET",
    licenseExam: "Relevant national dental licensing exam depending on country",
    slug: "/courses/dentistry",
    popular: false,
  },
  {
    id: "nursing",
    title: "Nursing (BSc / BScN)",
    shortTitle: "Nursing",
    emoji: "💉",
    icon: "heart-pulse",
    group: "direct",
    description:
      "One of the highest-demand healthcare careers globally. Nursing opens doors to the UK, Australia, Canada, USA and the Gulf with strong PR pathways.",
    duration: "3–4 years",
    entryRequirement: "Class 12 (PCB/PCM) — NEET may not be required depending on country",
    licenseExam: "NCLEX (USA/Canada), NMC (UK), AHPRA (Australia), HAAD/DHA (UAE)",
    slug: "/courses/nursing",
    popular: true,
    badge: "High Global Demand",
  },
  {
    id: "pharmacy",
    title: "Pharmacy (BPharm / PharmD)",
    shortTitle: "Pharmacy",
    emoji: "💊",
    icon: "pill",
    group: "direct",
    description:
      "A stable, well-paid career in clinical, hospital, community or research pharmacy. PharmD opens doors internationally.",
    duration: "4–6 years (BPharm or PharmD)",
    entryRequirement: "Class 12 (PCB/PCM)",
    licenseExam: "NAPLEX (USA), GPhC (UK), AHPRA (Australia), relevant national board",
    slug: "/courses/pharmacy",
    popular: false,
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy (BPT)",
    shortTitle: "Physiotherapy",
    emoji: "🏃",
    icon: "activity",
    group: "direct",
    description:
      "A growing allied-health career with strong PR pathways in Australia and Canada and excellent work-life balance.",
    duration: "4 years",
    entryRequirement: "Class 12 (PCB)",
    licenseExam: "Relevant national physiotherapy board registration",
    slug: "/courses/physiotherapy",
    popular: false,
    badge: "Strong PR Pathways",
  },
  {
    id: "respiratoryTherapy",
    title: "Respiratory Therapy / MLT",
    shortTitle: "Resp. Therapy / MLT",
    emoji: "🫁",
    icon: "wind",
    group: "direct",
    description:
      "Respiratory Therapists and Medical Lab Technologists are in high demand globally — an underrated but highly rewarding allied-health career path.",
    duration: "2–4 years depending on qualification",
    entryRequirement: "Class 12 (PCB)",
    licenseExam: "Relevant national board registration",
    slug: "/courses/respiratory-therapy-mlt",
    popular: false,
  },
  {
    id: "mlt",
    title: "Medical Lab Technology",
    shortTitle: "Med. Lab Technology",
    emoji: "🔬",
    icon: "microscope",
    group: "direct",
    description:
      "Essential behind-the-scenes diagnostics role. MLTs are in demand at hospitals, labs and research institutions worldwide.",
    duration: "3–4 years",
    entryRequirement: "Class 12 (PCB)",
    licenseExam: "Relevant national board registration",
    slug: "/courses/medical-lab-technology",
    popular: false,
  },
  {
    id: "alliedHealth",
    title: "Other Allied Health",
    shortTitle: "Allied Health",
    emoji: "❓",
    icon: "plus-circle",
    group: "exploring",
    description:
      "Ask us about your specific goal. We guide pathways beyond this list — occupational therapy, radiography, speech therapy, healthcare management and more.",
    duration: "Varies",
    entryRequirement: "Varies by programme",
    licenseExam: "Varies by country and profession",
    slug: "/courses/allied-health",
    popular: false,
  },
];

/** Career options for Country Finder Step 1 */
export const FINDER_CAREER_OPTIONS = [
  { id: "mbbs",               label: "MBBS / Medicine",                      emoji: "🩺" },
  { id: "dentistry",          label: "Dentistry (BDS)",                       emoji: "🦷" },
  { id: "nursing",            label: "Nursing",                               emoji: "💉" },
  { id: "pharmacy",           label: "Pharmacy",                              emoji: "💊" },
  { id: "physiotherapy",      label: "Physiotherapy",                         emoji: "🏃" },
  { id: "respiratoryTherapy", label: "Respiratory Therapy", emoji: "🫁" },
  { id: "all",                label: "Not Sure Yet — Show Me Everything",      emoji: "❓" },
];

/** Budget options for Country Finder Step 2 */
export const FINDER_BUDGET_OPTIONS = [
  { id: "under25",  label: "Under ₹25 Lakh" },
  { id: "25to50",   label: "₹25–50 Lakh" },
  { id: "50to75",   label: "₹50–75 Lakh" },
  { id: "75plus",   label: "₹75 Lakh+" },
  { id: "unsure",   label: "Not Sure — I Need Guidance on This Too" },
];

/** Priority options for Country Finder Step 3 */
export const FINDER_PRIORITY_OPTIONS = [
  { id: "lowestCost",    label: "Lowest Overall Cost",                    emoji: "💰" },
  { id: "fastPR",        label: "Fastest Path to Settlement / PR",        emoji: "⚡" },
  { id: "highestSalary", label: "Highest Long-Term Salary",               emoji: "📈" },
  { id: "englishMedium", label: "English-Medium Only",                    emoji: "🗣" },
  { id: "nmcTrusted",    label: "Most Established / NMC-Trusted Destination", emoji: "🎓" },
];
