"use client";
import { motion } from "framer-motion";
import { Activity, Brain, GraduationCap, Hospital, Microscope, Stethoscope, Globe2, UserRoundCog } from "lucide-react";
import SectionCard, { SectionHeading } from "./SectionCard";

const careers = [
  [Stethoscope, "Registered Nurse", "Patient care & clinical excellence"],
  [Brain, "Specialist Nurse", "ICU, OT, ER, Oncology & more"],
  [GraduationCap, "Nurse Educator", "Train & mentor the next generation"],
  [UserRoundCog, "Nurse Leader", "Manage teams & lead departments"],
  [Activity, "Advanced Practice", "Nurse Practitioner, Clinical Nurse Specialist"],
  [Globe2, "Global Opportunities", "Work in hospitals, clinics & communities"]
];

export default function CareerPaths() {
  return (
    <SectionCard>
      <SectionHeading 
        title="What a Nursing Career Looks Like" 
        description="Your nursing degree can open multiple professional paths across healthcare systems." 
      />
      <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-3 sm:gap-y-5">
        {careers.map(([Icon, title, sub], i) => (
          <motion.div key={title} whileHover={{ y: -3 }} className="text-center">
            <div className="mx-auto grid size-10 place-items-center rounded-full bg-blue-50 text-blue-600 sm:size-11">
              <Icon size={17} className="sm:size-[18px]" />
            </div>
            <b className="mt-1.5 block text-[9px] leading-tight sm:mt-2 sm:text-[10px]">{title}</b>
            <span className="mt-0.5 block text-[8px] leading-3.5 text-slate-500 sm:mt-1 sm:text-[9px]">{sub}</span>
          </motion.div>
        ))}
      </div>
    </SectionCard>
  );
}