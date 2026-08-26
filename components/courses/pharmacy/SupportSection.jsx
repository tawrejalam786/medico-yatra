"use client";

import { ArrowRight, Check, Headphones } from "lucide-react";
import { supportStages } from "@/data/courses/pharmacy";
import { Container, MobileScroller, PrimaryLink, Reveal, SectionHeading } from "./SectionUI";

export default function SupportSection() {
  return (
    <section id="support" className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="How Medico Yatra helps" title="End-to-end — from your first question onward" text="Course selection, documents, English, licensing clarity, visa planning and ongoing student support in one organised journey." />
          <PrimaryLink className="w-full shrink-0 sm:w-auto">Talk to an expert</PrimaryLink>
        </div>
        <MobileScroller className="mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {supportStages.map(([number, title, text]) => (
            <article key={number} className="group w-[82vw] max-w-[310px] shrink-0 snap-center rounded-[24px] border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#0263CC]/25 hover:shadow-[0_18px_50px_rgba(2,99,204,.09)] sm:w-auto sm:max-w-none">
              <div className="flex items-center justify-between"><span className="text-2xl font-black tracking-[-1px] text-blue-100 transition group-hover:text-[#0263CC]">{number}</span><span className="grid size-8 place-items-center rounded-full bg-teal-50 text-[#009E9A]"><Check className="size-4" /></span></div>
              <h3 className="mt-5 text-sm font-extrabold text-[#071A49]">{title}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-600">{text}</p>
              <a href="#counselling" className="mt-5 inline-flex items-center gap-2 text-[10px] font-extrabold text-[#0263CC] opacity-70 transition group-hover:opacity-100">Student-first support <ArrowRight className="size-3.5" /></a>
            </article>
          ))}
          <Reveal className="hidden h-full rounded-[24px] bg-gradient-to-br from-[#0263CC] to-[#02A7BB] p-5 text-white shadow-[0_18px_50px_rgba(2,99,204,.18)] lg:block"><Headphones className="size-7" /><h3 className="mt-7 text-lg font-extrabold">A real point of contact</h3><p className="mt-2 text-xs leading-6 text-blue-50">Support continues beyond the application and offer letter.</p><a href="#counselling" className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold">Start free counselling <ArrowRight className="size-4" /></a></Reveal>
        </MobileScroller>
      </Container>
    </section>
  );
}
