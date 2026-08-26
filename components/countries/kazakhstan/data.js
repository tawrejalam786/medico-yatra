import {
  BadgeCheck,
  Banknote,
  BookOpenCheck,
  Building2,
  BusFront,
  CalendarDays,
  CloudSnow,
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
  ThermometerSnowflake,
  Users,
  Utensils,
  WalletCards,
} from "lucide-react";

export const snapshotCards = [
  { icon: MapPin, label: "Capital", value: "Astana (formerly Nur-Sultan)", tone: "from-[#EAF3FF] to-[#F5FAFF] text-[#0263CC]" },
  { icon: WalletCards, label: "Currency", value: "Kazakhstani Tenge (KZT)", tone: "from-[#E7FBF8] to-[#F3FFFD] text-[#008E89]" },
  { icon: Languages, label: "Language", value: "Kazakh + Russian · MBBS taught in English", tone: "from-[#F1ECFF] to-[#FAF8FF] text-[#7656C9]" },
  { icon: ThermometerSnowflake, label: "Climate", value: "Continental · extreme winters · hot summers", tone: "from-[#E8F5FF] to-[#F6FBFF] text-[#1479C9]" },
  { icon: Building2, label: "Major Cities", value: "Almaty · Astana · Shymkent", tone: "from-[#EAF8F0] to-[#F5FFF9] text-[#17885F]" },
  { icon: GraduationCap, label: "Top MBBS Cities", value: "Almaty · Astana · Shymkent · Karaganda", tone: "from-[#FFF1E8] to-[#FFF9F4] text-[#DE762B]" },
  { icon: HeartPulse, label: "Healthcare", value: "Universal · Social Health Insurance system", tone: "from-[#FFF0F5] to-[#FFF8FA] text-[#D84C7E]" },
  { icon: Users, label: "Indian Community", value: "Established networks at major MBBS universities", tone: "from-[#F4EDFF] to-[#FBF9FF] text-[#7A55C8]" },
  { icon: ShieldCheck, label: "Safety", value: "Generally safe in major cities · normal precautions", tone: "from-[#E8FAF5] to-[#F6FFFC] text-[#078C74]" },
  { icon: Plane, label: "Travel & Visa", value: "Connecting flights · Student Visa / Temporary Residence Permit", tone: "from-[#FFF5DB] to-[#FFFBF0] text-[#B97D10]" },
];

export const reasons = [
  { icon: Banknote, title: "Among the lowest MBBS fees", text: "Kazakhstan offers some of the most accessible tuition costs among destinations with universities on the NMC-approved list, making it practical for budget-conscious families.", tone: "bg-[#E8FBF9] text-[#009E9A]" },
  { icon: BadgeCheck, title: "NMC-approved universities", text: "Several Kazakhstani medical universities appear on the NMC-approved list. Current recognition must still be verified for every shortlisted institution.", tone: "bg-[#EAF3FF] text-[#0263CC]" },
  { icon: Languages, title: "English-medium programmes", text: "Major medical universities offer English-medium MBBS for international students, without requiring prior Russian or Kazakh language knowledge.", tone: "bg-[#F1ECFF] text-[#7656C9]" },
  { icon: Building2, title: "Modern city infrastructure", text: "Almaty and Astana offer developed transport, healthcare and student facilities in a rapidly modernising Central Asian environment.", tone: "bg-[#FFF0E5] text-[#E77928]" },
  { icon: Users, title: "Established Indian community", text: "Indian students have studied MBBS in Kazakhstan for over a decade, with active student networks, cultural support and FMGE study groups.", tone: "bg-[#E8F8EF] text-[#14885F]" },
];

export const programmes = [
  { icon: Stethoscope, title: "MBBS / MD", meta: "General Medicine · 5–6 years", tone: "from-[#0263CC] to-[#178BE5]" },
  { icon: HeartPulse, title: "Dentistry", meta: "University dependent", tone: "from-[#009E9A] to-[#02C7B5]" },
  { icon: BookOpenCheck, title: "Pharmacy", meta: "University dependent", tone: "from-[#7656C9] to-[#9A7AE3]" },
  { icon: Users, title: "Nursing", meta: "Where available", tone: "from-[#E77928] to-[#F7A252]" },
  { icon: GraduationCap, title: "Paediatrics & Specialised MD", meta: "Availability varies", tone: "from-[#128862] to-[#29B985]" },
];

export const universities = [
  { name: "Kazakh National Medical University (KazNMU)", city: "Almaty", note: "One of Kazakhstan's oldest and most respected medical universities.", image: "/images/countries/kazakhstan/university-kaznmu.webp" },
  { name: "Semey Medical University", city: "Semey", note: "Formerly Semey State Medical University; long-established with an active international programme.", image: "/images/countries/kazakhstan/university-semey.webp" },
  { name: "South Kazakhstan Medical Academy", city: "Shymkent", note: "Popular among Indian students and positioned in the brief as an affordable option.", image: "/images/countries/kazakhstan/university-south-kazakhstan.webp" },
  { name: "Astana Medical University", city: "Astana", note: "Modern campus in Kazakhstan's capital city.", image: "/images/countries/kazakhstan/university-astana.webp" },
  { name: "Karaganda Medical University", city: "Karaganda", note: "Established international student programme.", image: "/images/countries/kazakhstan/university-karaganda.webp" },
  { name: "West Kazakhstan Marat Ospanov Medical University", city: "Aktobe", note: "Active international student programme.", image: "/images/countries/kazakhstan/university-west-kazakhstan.webp" },
];

export const studentLife = [
  { icon: House, title: "Accommodation", text: "University hostels are standard and affordable, while private apartments are available in major cities at reasonable rates.", image: "/images/countries/georgia/life-hostel.png" },
  { icon: Utensils, title: "Food", text: "Indian restaurants and groceries are available in Almaty and Astana; many Indian students self-cook using ingredients from supermarkets and specialty stores.", image: "/images/countries/georgia/life-food.png" },
  { icon: BusFront, title: "Transport", text: "Almaty has metro and bus networks, Astana has expanding public transport, and taxis or ride-hailing are widely used.", image: "/images/countries/kazakhstan/life-transport.webp" },
  { icon: CloudSnow, title: "Weather", text: "Winters are severe, especially in Astana where temperatures below -30°C are possible. Almaty is milder and summers are warm.", image: "/images/countries/kazakhstan/life-winter.webp" },
  { icon: ShieldCheck, title: "Safety", text: "Major Kazakhstani cities are generally safe for students. Standard urban precautions apply, and Indian students are a known community at medical universities.", image: "/images/countries/kazakhstan/life-safety.webp" },
  { icon: Languages, title: "Language", text: "MBBS instruction is in English, but basic Russian is useful for everyday life, city navigation and patient interaction during clinical years.", image: "/images/countries/kazakhstan/life-language.webp" },
  { icon: Users, title: "Indian Community", text: "Student associations at major universities organise cultural events, FMGE study groups and newcomer orientation.", image: "/images/countries/kazakhstan/life-community.webp" },
];

export const costRows = [
  ["Tuition", "₹[X–Y] lakh / year", "Among the lowest fees of NMC-approved destinations"],
  ["Hostel / Accommodation", "₹[X–Y] lakh / year", "University hostel is standard and very affordable"],
  ["Food", "₹[X–Y] lakh / year", "Self-cooking can reduce costs significantly"],
  ["Health Insurance", "₹[X–Y]", "As required"],
  ["Transport, books & local travel", "₹[X–Y]", "Personal lifestyle dependent"],
];

export const journey = [
  { icon: Route, step: "01", title: "Counselling", text: "Assess whether Kazakhstan fits your profile and budget, comparing honestly with Georgia, Russia, Kyrgyzstan and Uzbekistan." },
  { icon: BadgeCheck, step: "02", title: "University Selection", text: "Shortlist NMC-approved universities based on academic profile, budget and verified recognition status." },
  { icon: FileCheck2, step: "03", title: "Documentation", text: "Checklist-driven preparation of all required documents." },
  { icon: GraduationCap, step: "04", title: "Admission", text: "Support through the application process and invitation letter." },
  { icon: Plane, step: "05", title: "Visa Guidance", text: "Guidance through Kazakhstan's student visa and residence permit process." },
  { icon: CalendarDays, step: "06", title: "Pre-Departure", text: "Travel, accommodation and serious winter preparation before your first weeks in Kazakhstan." },
  { icon: MapPin, step: "07", title: "Arrival & Settling", text: "Guidance on reaching campus and settling into hostel life." },
  { icon: Globe2, step: "08", title: "During Studies", text: "Ongoing point of contact plus integrated FMGE / NExT coaching." },
];

export const faqs = [
  ["Is MBBS in Kazakhstan recognised in India?", "A Kazakhstani MBBS from an NMC-approved university allows Indian graduates to appear for the required FMGE / NExT pathway. Always verify the specific university's current NMC-approved status before enrolling."],
  ["Is Kazakhstan on the FMGE-exempt list?", "No. Kazakhstan is not on the FMGE-exempt list. Graduates must clear FMGE / NExT to practise in India."],
  ["Do I need NEET for MBBS in Kazakhstan?", "Yes. Indian students intending to practise in India must qualify NEET and follow current NMC eligibility requirements."],
  ["Are MBBS programmes in Kazakhstan taught in English?", "Yes. Major Kazakhstani medical universities offer English-medium MBBS for international students. Russian is often taught to support patient interaction."],
  ["How long is MBBS in Kazakhstan?", "Typically 5–6 years depending on the university and programme structure. Verify the exact duration with your shortlisted institution."],
  ["How much does MBBS in Kazakhstan cost?", "Kazakhstan offers some of the lowest MBBS fees among NMC-approved destinations. Figures on this page are illustrative and should be replaced with a personalised estimate."],
  ["How cold is Kazakhstan?", "Very cold, particularly in Astana where winter temperatures can drop below -30°C. Almaty is milder. Students need proper winter clothing and preparation."],
  ["Is Kazakhstan safe for Indian students?", "Major Kazakhstani cities are generally safe for students. Standard urban precautions apply, and Indian students are an established community at medical universities."],
  ["Is Indian food available in Kazakhstan?", "Indian restaurants and grocery stores exist in Almaty and Astana. Many students self-cook, with South Asian ingredients available in major supermarkets."],
  ["Which is the best medical university in Kazakhstan for Indian students?", "The supplied brief identifies KazNMU in Almaty as among the most established and South Kazakhstan Medical Academy as popular for affordability. Final shortlisting should consider current NMC status, profile and verified outcomes."],
  ["Can I do PG in India after MBBS in Kazakhstan?", "Yes, after clearing the applicable FMGE / NExT licensing pathway and meeting current postgraduate entrance rules."],
  ["Can I go to the USA after MBBS in Kazakhstan?", "Yes, via the USMLE pathway, which is separate from FMGE / NExT."],
  ["What documents will I need?", "Academic transcripts, NEET result, passport, photographs and university-specific documents are typically required. A final checklist depends on the institution."],
  ["When are the intakes?", "Typically September. Some universities may have a February intake. Verify the intake with your shortlisted university."],
  ["Will Medico Yatra help with the student visa?", "Yes. The brief includes guidance through the Kazakhstan student visa / residence permit process. Visa decisions remain with Kazakhstani immigration authorities."],
  ["Do you help arrange accommodation?", "Yes. Guidance is provided on hostel and apartment options in the university city before travel."],
  ["Can I prepare for FMGE / NExT while studying in Kazakhstan?", "Yes. The supplied brief positions integrated FMGE / NExT coaching throughout the programme as a Medico Yatra advantage."],
  ["Do you guarantee admission?", "No. Admission decisions belong to the universities. Medico Yatra provides organised counselling and application support."],
  ["How does Kazakhstan compare to Kyrgyzstan or Uzbekistan?", "All three are low-fee Central Asian MBBS destinations. The supplied brief describes Kazakhstan's cities as more developed, with fees slightly above Kyrgyzstan or Uzbekistan but below Georgia."],
  ["How do I get started?", "Book a free counselling session and request the Kazakhstan MBBS guide so your profile, budget and university fit can be assessed."],
];

export const relatedLinks = [
  ["Study MBBS in Kyrgyzstan", "/study-mbbs-in-kyrgyzstan/"],
  ["Study MBBS in Uzbekistan", "/study-mbbs-in-uzbekistan/"],
  ["Study MBBS in Russia", "/study-mbbs-in-russia/"],
  ["Study MBBS in Georgia", "/study-mbbs-in-georgia/"],
  ["Study MBBS Abroad — Full Guide", "/study-mbbs-abroad/"],
];

export const sisterLinks = [
  ["FMGE / NExT Coaching — Academic Yatra", "#"],
  ["Kazakhstan Student Visa Support — ApplyVisa Yatra", "#"],
];
