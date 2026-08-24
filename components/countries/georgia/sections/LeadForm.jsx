"use client";

import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import Reveal from "../shared/Reveal";

export default function LeadForm() {
  return (
    <section id="lead" className="bg-[#F7FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid overflow-hidden rounded-[38px] bg-white shadow-[0_24px_70px_rgba(15,23,42,.08)] lg:grid-cols-[.9fr_1.1fr]">
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
              <img src="/images/countries/georgia/georgia-counselling.png" alt="Georgia MBBS counselling" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2D]/85 via-[#071A2D]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 text-xs font-bold backdrop-blur"><MessageCircle className="h-4 w-4" /> Personalised counselling</span>
                <h2 className="mt-4 max-w-md text-3xl font-black leading-tight tracking-[-.035em] sm:text-4xl">Get the free Georgia MBBS guide + cost estimate.</h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-white/75">Receive a Georgia-specific planning guide and a personalised, no-obligation estimate based on your profile.</p>
              </div>
            </div>

            <form className="p-5 sm:p-8 lg:p-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Name", "Your full name"],
                  ["Mobile (WhatsApp)", "+91 98XXXXXX"],
                  ["City", "Your city"],
                  ["NEET Status", "Qualified / Preparing / Not appeared"],
                ].map(([label, placeholder]) => (
                  <label key={label} className="block"><span className="mb-2 block text-xs font-black uppercase tracking-[.12em] text-slate-600">{label}</span><input placeholder={placeholder} className="h-[52px] w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#0263CC] focus:ring-4 focus:ring-[#0263CC]/10" /></label>
                ))}
                <label className="block sm:col-span-2"><span className="mb-2 block text-xs font-black uppercase tracking-[.12em] text-slate-600">Preferred Intake</span><select className="h-[52px] w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#0263CC] focus:ring-4 focus:ring-[#0263CC]/10"><option>Next available intake</option><option>Not sure yet</option></select></label>
              </div>
              <button className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0263CC] to-[#02A7BB] px-5 text-sm font-black text-white shadow-[0_16px_40px_rgba(2,99,204,.22)] transition hover:-translate-y-0.5">Send Me the Georgia MBBS Guide <ArrowRight className="h-4 w-4" /></button>
              <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-500"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#02A7BB]" />Admission, visa and licensing outcomes are not guaranteed. Final decisions remain with the relevant institutions and authorities.</div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
