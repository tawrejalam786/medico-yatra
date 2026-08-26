"use client";

import { Activity, ArrowRight, HeartPulse, Microscope, SmilePlus, Stethoscope, Wind } from "lucide-react";
import { otherCourses } from "@/data/courses/pharmacy";
import { Container, MobileScroller, SectionHeading } from "./SectionUI";

const icons = { Activity, HeartPulse, Microscope, SmilePlus, Stethoscope, Wind };

export default function OtherCourses() {
  return (
    <section id="other-courses" className="bg-white py-12 sm:py-16 lg:py-18">
      <Container>
        <SectionHeading eyebrow="Explore other healthcare courses" title="Pharmacy is one path — we guide many" text="Compare healthcare careers before you commit to one course." />
        <MobileScroller className="mt-8 sm:grid-cols-3 lg:grid-cols-6">
          {otherCourses.map(([label, iconName]) => {
            const Icon = icons[iconName];
            return <a key={label} href="#counselling" className="group w-[54vw] max-w-[190px] shrink-0 snap-center rounded-[22px] border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-[#0263CC]/30 hover:shadow-lg sm:w-auto sm:max-w-none"><span className="grid size-10 place-items-center rounded-2xl bg-blue-50 text-[#0263CC]"><Icon className="size-5" /></span><p className="mt-4 min-h-10 text-xs font-extrabold leading-5 text-[#071A49]">{label}</p><ArrowRight className="mt-3 size-4 text-[#02A7BB] transition group-hover:translate-x-1" /></a>;
          })}
        </MobileScroller>
        <a href="#counselling" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#0263CC]">Explore all healthcare courses <ArrowRight className="size-4" /></a>
      </Container>
    </section>
  );
}
