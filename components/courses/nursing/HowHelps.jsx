"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Building2, Plane, ShieldCheck, Users, WalletCards } from "lucide-react";
import SectionCard from "./SectionCard";

const services = [
  [BriefcaseBusiness, "Career Counselling", "Choose the right path"],
  [Building2, "University Admission", "Top universities & smooth admission"],
  [Plane, "Visa & Travel Support", "Pre-departure guidance"],
  [ShieldCheck, "Licensing Guidance", "Keep exams & registration on track"],
  [Users, "Family & Migration Support", "Pathways to settle together"],
  [WalletCards, "Post-Arrival Support", "Accommodation, orientation & more"]
];

export default function HowHelps() {
  return (
    <SectionCard className="overflow-hidden bg-gradient-to-r from-white via-white to-blue-50/70">
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
        {/* Image Section */}
        <div className="relative mx-auto h-40 w-full max-w-xs overflow-hidden rounded-2xl bg-blue-50 sm:h-44 sm:rounded-3xl">
          <Image 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85" 
            alt="Healthcare education" 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
          <div className="absolute bottom-2.5 left-2.5 rounded-xl bg-white/90 px-2.5 py-1.5 text-[9px] font-bold sm:bottom-3 sm:left-3 sm:px-3 sm:py-2 sm:text-[10px]">
            One team. One roadmap.
          </div>
        </div>

        {/* Content Section */}
        <div>
          <span className="text-[9px] font-extrabold uppercase tracking-[.16em] text-blue-600 sm:text-[10px]">
            End-to-end support
          </span>
          <h2 className="mt-1 text-lg font-black sm:text-xl lg:text-2xl">
            How Medico Yatra Helps You Succeed
          </h2>
          <p className="mt-1.5 text-[11px] text-slate-500 sm:text-xs">
            From your first counselling call to your new life abroad, our support stays with you.
          </p>

          {/* Services Grid */}
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:grid-cols-3 sm:gap-3">
            {services.map(([Icon, title, sub]) => (
              <motion.div 
                key={title} 
                whileHover={{ y: -3 }} 
                className="rounded-xl border border-slate-100 bg-white p-2.5 sm:rounded-2xl sm:p-3"
              >
                <Icon size={16} className="text-blue-600 sm:size-[18px]" />
                <b className="mt-1.5 block text-[9px] leading-tight sm:mt-2 sm:text-[10px]">{title}</b>
                <span className="mt-0.5 block text-[8px] leading-3.5 text-slate-500 sm:mt-1 sm:text-[9px]">
                  {sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}