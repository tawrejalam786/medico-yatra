"use client";

import { AlertTriangle, ArrowRight, BadgeCheck, Languages, Plane, ShieldCheck } from "lucide-react";
import { licensingRoutes } from "@/data/courses/pharmacy";
import { Container, MobileScroller, Notice, Reveal, SectionHeading } from "./SectionUI";

export default function LicensingSection() {
  return (
    <section id="licensing" className="relative overflow-hidden bg-[#071A49] py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionHeading light eyebrow="Licensing, explained honestly" title="Practising vs. industry routes" text="If you want to practise as a pharmacist, you must satisfy the destination regulator. Science and industry routes generally follow a qualification-and-work-visa path instead." />
        <MobileScroller className="mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {licensingRoutes.map((route) => (
            <article key={route.country} className="w-[82vw] max-w-[310px] shrink-0 snap-center rounded-[24px] border border-white/10 bg-white/[.07] p-5 text-white backdrop-blur transition hover:bg-white/[.11] sm:w-auto sm:max-w-none">
              <div className="flex items-center justify-between"><span className="text-3xl">{route.flag}</span><BadgeCheck className="size-5 text-cyan-300" /></div>
              <h3 className="mt-5 text-lg font-extrabold">{route.country}</h3>
              <p className="mt-2 inline-flex rounded-full bg-cyan-300/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-cyan-200">{route.badge}</p>
              <p className="mt-4 text-xs leading-6 text-blue-100">{route.text}</p>
              <a href="#counselling" className="mt-5 inline-flex items-center gap-2 text-[11px] font-extrabold text-cyan-200">Understand this route <ArrowRight className="size-3.5" /></a>
            </article>
          ))}
        </MobileScroller>
        <Reveal className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr_1.25fr]">
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-4 text-white"><Languages className="mt-0.5 size-5 text-cyan-300" /><div><p className="text-xs font-extrabold">English tests</p><p className="mt-1 text-[10px] leading-5 text-blue-100">IELTS or OET may apply for study, registration or employment.</p></div></div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.06] p-4 text-white"><Plane className="mt-0.5 size-5 text-cyan-300" /><div><p className="text-xs font-extrabold">Visa & migration</p><p className="mt-1 text-[10px] leading-5 text-blue-100">Student and later work routes have separate, changing criteria.</p></div></div>
          <div className="flex items-start gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-white"><ShieldCheck className="mt-0.5 size-5 text-cyan-300" /><div><p className="text-xs font-extrabold">Industry route</p><p className="mt-1 text-[10px] leading-5 text-blue-100">R&D, regulatory, quality, toxicology, cosmetics and biotech roles usually do not need pharmacist licensure.</p></div></div>
        </Reveal>
        <Notice className="mt-5 !border-amber-300/20 !bg-amber-300/10 !text-amber-50"><div className="flex items-start gap-3"><AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-300" /><p><strong>Verify current requirements:</strong> regulator and immigration rules change. Confirm with the official pharmacy regulator and immigration authority. No outcome is guaranteed.</p></div></Notice>
      </Container>
    </section>
  );
}
