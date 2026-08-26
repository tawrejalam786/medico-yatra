"use client";

import { CheckCircle2, Sparkles } from "lucide-react";
import { Container, PrimaryLink, Reveal } from "./SectionUI";

export default function BottomCTA() {
  return (
    <section className="bg-white pb-12 sm:pb-16 lg:pb-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0263CC] via-[#057CC7] to-[#02A7BB] p-6 text-white shadow-[0_24px_70px_rgba(2,99,204,.2)] sm:p-9 lg:p-11">
          <Sparkles className="absolute -right-4 -top-5 size-32 text-white/5" />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-cyan-100">Make the first decision with clarity</p><h2 className="mt-3 text-[26px] font-extrabold leading-tight tracking-[-.8px] sm:text-[36px]">Clinical pharmacist or pharma scientist? Let’s map your route.</h2><div className="mt-4 flex flex-wrap gap-4 text-[10px] font-semibold text-blue-50 sm:text-xs">{["No-obligation guidance", "Course + country clarity", "Honest licensing plan"].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4" />{item}</span>)}</div></div>
            <PrimaryLink inverse className="w-full shrink-0 lg:w-auto">Book Free Counselling</PrimaryLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
