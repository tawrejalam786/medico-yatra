import {
  BadgeCheck,
  Banknote,
  BookOpenCheck,
  Building2,
  BusFront,
  CalendarDays,
  CircleDollarSign,
  CloudSun,
  FileCheck2,
  Globe2,
  GraduationCap,
  HeartPulse,
  House,
  Languages,
  MapPin,
  Plane,
  Route,
  ShieldCheck,
  Stethoscope,
  Users,
  Utensils,
  WalletCards,
} from "lucide-react";

export const snapshotCards = [
  { icon: MapPin, label: "Capital", value: "Tbilisi", tone: "from-[#EAF3FF] to-[#F5FAFF] text-[#0263CC]" },
  { icon: WalletCards, label: "Currency", value: "Georgian Lari (GEL)", tone: "from-[#E7FBF8] to-[#F3FFFD] text-[#008E89]" },
  { icon: Languages, label: "Language", value: "Georgian + English-medium MBBS", tone: "from-[#F1ECFF] to-[#FAF8FF] text-[#7656C9]" },
  { icon: CloudSun, label: "Climate", value: "Four seasons · warm summers · cold winters", tone: "from-[#FFF2E8] to-[#FFF9F4] text-[#DE762B]" },
  { icon: Building2, label: "Major Cities", value: "Tbilisi · Batumi · Kutaisi", tone: "from-[#EAF8F0] to-[#F5FFF9] text-[#17885F]" },
  { icon: ShieldCheck, label: "Safety", value: "Generally regarded as student-friendly", tone: "from-[#FFF0F5] to-[#FFF8FA] text-[#D84C7E]" },
  { icon: CircleDollarSign, label: "Economy", value: "Developing education & tourism sectors", tone: "from-[#FFF5DB] to-[#FFFBF0] text-[#B97D10]" },
  { icon: Globe2, label: "Region", value: "Caucasus · between Europe & Asia", tone: "from-[#E7F7FF] to-[#F5FCFF] text-[#178BE5]" },
  { icon: Users, label: "Student Environment", value: "Growing international & Indian community", tone: "from-[#F4EDFF] to-[#FBF9FF] text-[#7A55C8]" },
  { icon: Plane, label: "Visa & Travel", value: "Student visa / residence permit · direct & connecting flights", tone: "from-[#E8FAF5] to-[#F6FFFC] text-[#078C74]" },
];

export const reasons = [
  { icon: Languages, title: "English-medium programmes", text: "Many Georgian universities offer English-medium medical programmes designed for international students, helping make the academic transition smoother.", tone: "bg-[#EAF3FF] text-[#0263CC]" },
  { icon: Globe2, title: "European-influenced setting", text: "Tbilisi and other Georgian cities combine modern urban life, European-style architecture and connectivity across Europe and Asia.", tone: "bg-[#E8FBF9] text-[#009E9A]" },
  { icon: GraduationCap, title: "International student infrastructure", text: "Georgia has developed a growing track record as an MBBS destination, with universities serving international student communities.", tone: "bg-[#F1ECFF] text-[#7656C9]" },
  { icon: Plane, title: "Accessible travel from India", text: "Georgia is reachable from India through direct and connecting routes, making travel relatively manageable for students and families.", tone: "bg-[#FFF0E5] text-[#E77928]" },
  { icon: CloudSun, title: "Manageable four-season climate", text: "Warm summers and cool-to-cold winters give students a varied climate without the extreme cold associated with some destinations.", tone: "bg-[#E8F8EF] text-[#14885F]" },
];

export const programmes = [
  { icon: Stethoscope, title: "MBBS / MD Medicine", meta: "Around 6 years", tone: "from-[#0263CC] to-[#178BE5]" },
  { icon: HeartPulse, title: "Dentistry", meta: "University dependent", tone: "from-[#009E9A] to-[#02C7B5]" },
  { icon: BookOpenCheck, title: "Pharmacy", meta: "University dependent", tone: "from-[#7656C9] to-[#9A7AE3]" },
  { icon: Route, title: "Physiotherapy", meta: "Where available", tone: "from-[#E77928] to-[#F7A252]" },
  { icon: Users, title: "Nursing", meta: "Where available", tone: "from-[#128862] to-[#29B985]" },
  { icon: GraduationCap, title: "Allied Healthcare", meta: "Availability varies", tone: "from-[#D84C7E] to-[#EF7EA5]" },
];

export const universities = [
  { name: "University Shortlist 01", city: "Georgia", note: "Current university name and NMC-list status should be verified during counselling before enrolment.", image: "/images/countries/georgia/university-01.png" },
  { name: "University Shortlist 02", city: "Georgia", note: "Representative placeholder from the supplied country brief. Use the latest verified shortlist for final decisions.", image: "/images/countries/georgia/university-01.png" },
  { name: "University Shortlist 03", city: "Georgia", note: "Recognition can change. Compare programme structure, clinical exposure, location and current eligibility status.", image: "/images/countries/georgia/university-01.png" },
  { name: "University Shortlist 04", city: "Georgia", note: "Medico Yatra can share a current shortlist aligned with your profile, priorities and NMC-list awareness.", image: "/images/countries/georgia/university-01.png" },
];

export const studentLife = [
  { icon: House, title: "Accommodation", text: "University hostels and private apartments are common, with guidance on location and safety before arrival.", image: "/images/countries/georgia/life-hostel.png" },
  { icon: Utensils, title: "Food", text: "Local Georgian cuisine plus Indian groceries and restaurants are available in major student areas.", image: "/images/countries/georgia/life-food.png" },
  { icon: BusFront, title: "Transport", text: "Tbilisi offers affordable metro and bus networks, while many campus areas are walkable.", image: "/images/countries/georgia/life-food.png" },
  { icon: CloudSun, title: "Weather", text: "Four seasons mean warm summers and colder winters, with regional variation across the country.", image: "/images/countries/georgia/life-food.png" },
  { icon: ShieldCheck, title: "Safety", text: "Georgia is generally regarded as safe and student-friendly; standard city precautions still apply.", image: "/images/countries/georgia/life-food.png" },
  { icon: Users, title: "Lifestyle & Community", text: "A relaxed European-influenced lifestyle is supported by a growing Indian student community.", image: "/images/countries/georgia/life-food.png" },
];

export const costRows = [
  ["Tuition", "₹[X–Y] lakh / year", "Varies significantly by university"],
  ["Hostel / Accommodation", "₹[X–Y] / year", "University hostel vs private rent"],
  ["Food", "₹[X–Y] / year", "Self-cooking vs eating out"],
  ["Health Insurance", "₹[X–Y]", "As required by university / country"],
  ["Travel, books & local transport", "₹[X–Y]", "Personal lifestyle dependent"],
];

export const journey = [
  { icon: Route, step: "01", title: "Counselling", text: "Assess if Georgia fits your goals, budget and NEET situation." },
  { icon: BadgeCheck, step: "02", title: "University Selection", text: "Build a shortlist with current NMC-list awareness and your priorities." },
  { icon: FileCheck2, step: "03", title: "Documentation", text: "Checklist-driven preparation of required application documents." },
  { icon: GraduationCap, step: "04", title: "Admission", text: "Support from application through the offer or invitation letter." },
  { icon: Plane, step: "05", title: "Visa Guidance", text: "Guidance through the student visa and residence process." },
  { icon: CalendarDays, step: "06", title: "Pre-Departure", text: "Travel, accommodation, packing and practical preparation." },
  { icon: MapPin, step: "07", title: "Arrival & Settling", text: "Guidance for reaching campus and settling into hostel or city life." },
  { icon: Globe2, step: "08", title: "During Studies", text: "Ongoing point of contact plus integrated FMGE / NExT preparation." },
];

export const faqs = [
  ["Is MBBS in Georgia recognised in India?", "A Georgian medical degree can lead to practice in India if the university and programme meet current NMC requirements and the graduate clears the required licensing exam. Always verify current status before enrolling."],
  ["Is Georgia on the FMGE-exempt list?", "No. Graduates intending to practise in India need to follow the applicable FMGE / NExT licensing pathway."],
  ["Do I need NEET for MBBS in Georgia?", "Indian students intending to practise in India need to qualify NEET and follow current NMC eligibility requirements. Confirm the latest rules before applying."],
  ["Are MBBS programmes in Georgia taught in English?", "Many Georgian universities offer English-medium medicine programmes for international students. The medium of instruction should be confirmed for each shortlisted university."],
  ["How long is MBBS in Georgia?", "Commonly around 6 years including clinical training, though the exact structure varies by university."],
  ["How much does MBBS in Georgia cost?", "Costs vary by university and lifestyle. Figures shown on this page are illustrative and should be replaced with an itemised estimate during counselling."],
  ["Is Georgia safe for Indian students?", "Georgia is generally considered safe and student-friendly. Normal precautions still apply, and accommodation and local guidance are important."],
  ["What is student life like in Georgia?", "Students can expect a European-influenced lifestyle, affordable city transport, hostel or apartment options and a growing Indian community."],
  ["What is the weather like?", "Georgia has four seasons, with warm summers and colder winters depending on region."],
  ["Which are the top medical universities in Georgia?", "The supplied brief does not name specific universities. A current shortlist should be built using verified status, your profile and programme requirements."],
  ["Can I do PG in India after MBBS in Georgia?", "Yes, subject to clearing the applicable licensing pathway and meeting current postgraduate entrance requirements."],
  ["Can I go to the USA after MBBS in Georgia?", "Yes, through the USMLE pathway, which is separate from the Indian FMGE / NExT pathway."],
  ["What documents will I need?", "Typically academic transcripts, NEET result, passport, photographs and university-specific documents. A final checklist depends on the university."],
  ["When are the intakes?", "Intake months vary by university. Your shortlist should be aligned with the next available intake."],
  ["Will Medico Yatra help with the visa?", "Yes, the brief includes student-visa guidance. Visa decisions remain with the relevant authorities and are not guaranteed."],
  ["Do you help arrange accommodation?", "The service includes guidance on hostel and private accommodation options before travel."],
  ["Can I prepare for FMGE / NExT while in Georgia?", "Yes. The brief positions integrated coaching during the course as a core Medico Yatra advantage."],
  ["Do you guarantee admission to a Georgian university?", "No. Support can be organised and thorough, but admission decisions belong to the universities."],
  ["How does Georgia compare to other MBBS destinations?", "It depends on budget, goals and preferences. The brief recommends comparing Georgia honestly with Russia, Kazakhstan and other options."],
  ["How do I get started?", "Book a free counselling session and request the Georgia guide so your profile, budget and priorities can be assessed before a shortlist is built."],
];

export const relatedLinks = [
  ["Study MBBS in Russia", "/study-mbbs-in-russia/"],
  ["Study MBBS in Kazakhstan", "/study-mbbs-in-kazakhstan/"],
  ["Study MBBS in Armenia", "/study-mbbs-in-armenia/"],
  ["Study MBBS in Philippines", "/study-mbbs-in-philippines/"],
  ["Study MBBS Abroad — Full Guide", "/study-mbbs-abroad/"],
];

export const sisterLinks = [
  ["FMGE / NExT Coaching — Academic Yatra", "https://academicyatra.com/"],
  ["Georgia Student Visa Support — ApplyVisa Yatra", "#"],
];
