import { ArrowRight, BadgeCheck, FileCheck2, Languages, Stethoscope } from "lucide-react";
import SectionCard, { SectionHeading } from "./SectionCard";

const licenses = [
  ["NCLEX-RN (USA)", "Become a Registered Nurse in the USA", FileCheck2],
  ["NMC (UK)", "Register with the UK Nursing & Midwifery Council", BadgeCheck],
  ["English Tests", "IELTS / OET for licensing", Languages],
  ["Other Country Registrations", "Apply for local registration standards", Stethoscope]
];

export default function Licensing() {
  return (
    <SectionCard>
      <SectionHeading 
        title="Licensing & Registration to Work Abroad" 
        description="Clear required exams and meet registration standards to practice legally." 
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {licenses.map(([title, sub, Icon]) => (
          <div key={title} className="rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-center sm:rounded-2xl">
            <div className="mx-auto grid size-9 place-items-center rounded-full bg-white text-blue-600 shadow-sm sm:size-10">
              <Icon size={16} className="sm:size-[18px]" />
            </div>
            <b className="mt-1.5 block text-[9px] leading-tight sm:mt-2 sm:text-[10px]">{title}</b>
            <span className="mt-0.5 block text-[8px] leading-3.5 text-slate-500 sm:mt-1 sm:text-[9px]">{sub}</span>
          </div>
        ))}
      </div>
      <a 
        href="#counselling" 
        className="mx-auto mt-4 flex w-fit items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 py-2 text-[9px] font-extrabold text-white sm:mt-5 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-[10px]"
      >
        Learn About Licensing <ArrowRight size={12} className="sm:size-[13px]" />
      </a>
    </SectionCard>
  );
}