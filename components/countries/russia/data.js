import {
  Banknote,
  Building2,
  CloudSnow,
  Globe2,
  GraduationCap,
  HeartPulse,
  Languages,
  MapPin,
  Plane,
  ShieldCheck,
  Stethoscope,
  TrainFront,
  Users,
  Utensils,
  WalletCards,
  BookOpenCheck,
  ClipboardCheck,
  FileCheck2,
  BadgeCheck,
  Route,
  Hospital,
} from "lucide-react";

export const snapshotCards = [
  { icon: MapPin, label: "Capital", value: "Moscow", className: "from-[#DCEEFF] to-[#EEF7FF] text-[#0263CC]" },
  { icon: WalletCards, label: "Currency", value: "Russian Ruble (RUB)", className: "from-[#DDF9F7] to-[#ECFFFC] text-[#008F8B]" },
  { icon: Languages, label: "Language", value: "Russian + English-medium MBBS", className: "from-[#EEE8FF] to-[#F7F4FF] text-[#7656C9]" },
  { icon: CloudSnow, label: "Climate", value: "Very cold winters · warm summers", className: "from-[#E9F5FF] to-[#F4FAFF] text-[#178BE5]" },
  { icon: Building2, label: "Top MBBS Cities", value: "Moscow · Kazan · Volgograd · St. Petersburg", className: "from-[#FFF0E5] to-[#FFF8F1] text-[#E77928]" },
  { icon: HeartPulse, label: "Healthcare", value: "Universal OMS system", className: "from-[#E5F8F0] to-[#F0FFF8] text-[#14956A]" },
  { icon: Users, label: "Indian Community", value: "Large, established student networks", className: "from-[#FFE8F0] to-[#FFF5F8] text-[#D84C7E]" },
  { icon: Plane, label: "Student Visa", value: "Category D · multi-entry available", className: "from-[#FFF4D8] to-[#FFFAEC] text-[#C98A16]" },
];

export const reasons = [
  { icon: GraduationCap, title: "Established medical education", text: "Russian medical universities have trained international students for decades, backed by a long basic-science and clinical teaching tradition.", tone: "bg-[#EAF3FF] text-[#0263CC]" },
  { icon: Languages, title: "English-medium programmes", text: "Major universities offer English-medium General Medicine for international students, while Russian supports clinical communication.", tone: "bg-[#E8FBF9] text-[#009E9A]" },
  { icon: ClipboardCheck, title: "Accessible entry pathway", text: "Admission can be accessible for a broader student profile, while Indian students still need to follow current NEET and NMC requirements.", tone: "bg-[#F1ECFF] text-[#7656C9]" },
  { icon: Users, title: "Strong Indian community", text: "Established student networks, familiar food options, peer guidance and cultural support make adjustment easier in major university cities.", tone: "bg-[#FFF0E5] text-[#E77928]" },
  { icon: Banknote, title: "Relatively affordable", text: "Fees can be competitive compared with several international destinations, though total cost depends on university, city and exchange rates.", tone: "bg-[#E8F8EF] text-[#14885F]" },
];

export const programmes = [
  { icon: Stethoscope, title: "MBBS / General Medicine", meta: "6 years", tone: "bg-gradient-to-br from-[#0263CC] to-[#178BE5]" },
  { icon: Hospital, title: "Dentistry", meta: "5–6 years", tone: "bg-gradient-to-br from-[#009E9A] to-[#02C7B5]" },
  { icon: BookOpenCheck, title: "Pharmacy", meta: "5 years", tone: "bg-gradient-to-br from-[#7656C9] to-[#9A7AE3]" },
  { icon: HeartPulse, title: "Nursing", meta: "Where available", tone: "bg-gradient-to-br from-[#E77928] to-[#F7A252]" },
  { icon: GraduationCap, title: "PG Specialisations", meta: "University dependent", tone: "bg-gradient-to-br from-[#128862] to-[#29B985]" },
];

export const universities = [
  { name: "Kazan Federal University", city: "Kazan", note: "Established international programme", image: "/images/russia/university-kazan.webp" },
  { name: "Volgograd State Medical University", city: "Volgograd", note: "Longstanding destination for Indian students", image: "/images/russia/university-volgograd.webp" },
  { name: "Saint Petersburg State Pediatric Medical University", city: "Saint Petersburg", note: "One of Russia's older medical institutions", image: "/images/russia/university-st-petersburg.webp" },
  { name: "Orenburg State Medical University", city: "Orenburg", note: "Popular among Indian students", image: "/images/russia/university-orenburg.webp" },
  { name: "Kursk State Medical University", city: "Kursk", note: "Well-known among Indian MBBS students", image: "/images/russia/university-kursk.webp" },
  { name: "Rostov State Medical University", city: "Rostov-on-Don", note: "Established programme in southern Russia", image: "/images/russia/university-rostov.webp" },
];

export const studentLife = [
  { icon: Building2, title: "Hostel life", text: "University hostels are the standard option and are usually on or near campus.", image: "/images/russia/life-hostel.webp" },
  { icon: Utensils, title: "Food", text: "Indian groceries and restaurants are available in major student cities; self-cooking is common.", image: "/images/russia/life-food.webp" },
  { icon: CloudSnow, title: "Weather", text: "Russian winters are genuinely cold, so practical preparation matters.", image: "/images/russia/life-winter.webp" },
  { icon: TrainFront, title: "Transport", text: "Major cities offer strong metro networks while smaller cities remain manageable by bus and taxi.", image: "/images/russia/life-city.webp" },
];

export const costRows = [
  ["Tuition", "₹[X–Y] lakh / year", "Varies by university and city"],
  ["Hostel / Accommodation", "₹[X–Y] lakh / year", "University hostel is the standard option"],
  ["Food", "₹[X–Y] lakh / year", "Self-cooking vs canteen"],
  ["Health Insurance", "₹[X–Y]", "Mandatory; verify current requirement"],
  ["Travel, books & local transport", "₹[X–Y]", "Lifestyle dependent"],
];

export const journey = [
  { icon: Route, step: "01", title: "Counselling", text: "Assess whether Russia fits your goals, NEET situation and budget." },
  { icon: BadgeCheck, step: "02", title: "University Selection", text: "Shortlist with current recognition verification and your academic profile." },
  { icon: FileCheck2, step: "03", title: "Documentation", text: "Checklist-driven preparation of all academic and application documents." },
  { icon: ClipboardCheck, step: "04", title: "Admission", text: "Application support through the university invitation stage." },
  { icon: Plane, step: "05", title: "Visa Guidance", text: "Structured guidance through the Russian student visa process." },
  { icon: ShieldCheck, step: "06", title: "Pre-Departure", text: "Travel, hostel, packing and Russian winter preparation." },
  { icon: MapPin, step: "07", title: "Arrival & Settling", text: "Guidance for reaching campus and adjusting to student life." },
  { icon: Globe2, step: "08", title: "During Studies", text: "Ongoing support plus integrated FMGE / NExT preparation." },
];

export const faqs = [
  ["Is MBBS in Russia recognised in India?", "A Russian medical degree can lead to practice in India when the university and programme meet current NMC requirements and the graduate clears the required licensing pathway. Always verify current rules before enrolling."],
  ["Is Russia on the FMGE-exempt list?", "No. Graduates intending to practise in India need to follow the applicable licensing-exam requirements. Verify the latest NMC/NBEMS notifications before making a decision."],
  ["Do I need NEET for MBBS in Russia?", "Indian students planning to practise in India should satisfy current NEET and NMC eligibility requirements. Requirements can change, so verify before applying."],
  ["Are MBBS programmes in Russia taught in English?", "Major Russian medical universities offer English-medium General Medicine programmes for international students. Russian is commonly taught for patient communication."],
  ["How long is MBBS in Russia?", "Generally around 6 years including clinical training, though the exact structure should be confirmed with the university."],
  ["How much does MBBS in Russia cost?", "It varies by university, city and exchange rate. Figures shown are illustrative and should be replaced by an itemised estimate for your shortlist."],
  ["How cold is Russia?", "Winters can be very cold, including sub-zero temperatures in major cities. Students should prepare clothing and accommodation accordingly."],
  ["Is Russia safe for Indian students?", "Major university cities have established international and Indian student communities. Standard precautions apply and current travel conditions should always be checked."],
  ["Can I prepare for FMGE / NExT while studying in Russia?", "Yes. Medico Yatra positions integrated licensing-exam preparation as part of the study journey rather than something students begin only after graduation."],
  ["How do I get started?", "Book a free counselling session, share your profile and budget, then compare a verified shortlist before making an admission decision."],
];
