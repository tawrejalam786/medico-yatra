import Image from "next/image";
import { CheckCircle2, Heart, Users } from "lucide-react";
import SectionCard, { SectionHeading } from "./SectionCard";

const points = [
  "Work with PR pathways in several countries", 
  "Dependants can live, study & work (as per rules)", 
  "Build a stable, secure future together", 
  "Our experts guide you step-by-step"
];

export default function SettleFamily() {
  return (
    <SectionCard className="relative overflow-hidden">
      <div className="grid gap-4 sm:gap-5 md:grid-cols-[1fr_.9fr] md:items-center">
        <div>
          <SectionHeading 
            title="Settle Abroad — With Your Family" 
            description="Many countries offer skilled-worker migration pathways that allow you to bring your spouse and children." 
          />
          <div className="space-y-2 sm:space-y-2.5">
            {points.map(p => (
              <div key={p} className="flex gap-2 text-[10px] leading-4 text-slate-600 sm:text-[11px]">
                <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-blue-600 sm:size-[15px]" />
                {p}
              </div>
            ))}
          </div>
          <p className="mt-3 text-[8px] text-slate-400 sm:mt-4 sm:text-[9px]">
            *Eligibility and rules vary by country and change over time.
          </p>
        </div>
        <div className="relative h-48 overflow-hidden rounded-xl sm:h-56 sm:rounded-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=900&q=85" 
            alt="Family abroad" 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-xl bg-white/90 px-2.5 py-1.5 text-[9px] font-bold backdrop-blur sm:gap-2 sm:px-3 sm:py-2 sm:text-[10px]">
            <Heart size={12} className="text-rose-500 sm:size-[14px]" /> 
            Build a future together
          </div>
        </div>
      </div>
    </SectionCard>
  );
}