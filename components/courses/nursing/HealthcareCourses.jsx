"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionCard, { SectionHeading } from "./SectionCard";

const courses = [
  ["MBBS Abroad", "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80"],
  ["Dentistry (BDS)", "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80"],
  ["Pharmacy", "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80"],
  ["Physiotherapy", "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"],
  ["MLT (Lab Tech)", "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80"]
];

export default function HealthcareCourses() {
  return (
    <SectionCard>
      <SectionHeading 
        title="Explore Other Healthcare Courses" 
        description="Explore more healthcare education pathways with the same guided support." 
      />
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-3 lg:grid-cols-5">
        {courses.map(([title, src]) => (
          <motion.a 
            key={title} 
            href="#counselling" 
            whileHover={{ y: -4 }} 
            className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:rounded-2xl"
          >
            <div className="relative h-20 overflow-hidden bg-slate-100 sm:h-24">
              <Image 
                src={src} 
                alt={title} 
                fill 
                className="object-cover transition duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="flex min-h-12 items-center justify-between gap-1 p-2 sm:min-h-14 sm:p-2.5">
              <b className="text-[9px] leading-3.5 sm:text-[10px]">{title}</b>
              <ArrowUpRight size={12} className="shrink-0 text-blue-600 sm:size-[14px]" />
            </div>
          </motion.a>
        ))}
      </div>
      <a 
        href="#counselling" 
        className="mx-auto mt-4 flex w-fit items-center gap-1.5 rounded-xl border border-blue-200 px-4 py-2 text-[9px] font-extrabold text-blue-700 hover:bg-blue-50 sm:mt-5 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-[10px]"
      >
        View All Courses <ArrowUpRight size={12} className="sm:size-[13px]" />
      </a>
    </SectionCard>
  );
}