import { MapPinned, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "../shared/Reveal";

export default function AboutGeorgia() {
  return (
    <section className="bg-[#F7FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-8">
        <Reveal>
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
            <div className="col-span-2 overflow-hidden rounded-[30px] sm:rounded-[36px]">
              <img src="/images/countries/georgia/georgia-city.webp" alt="Tbilisi city environment" className="h-[250px] w-full object-cover sm:h-[330px]" />
            </div>
            <div className="overflow-hidden rounded-[24px] sm:rounded-[30px]">
              <img src="/images/countries/georgia/georgia-campus.png" alt="Georgia university campus" className="h-[170px] w-full object-cover sm:h-[220px]" />
            </div>
            <div className="flex min-h-[170px] flex-col justify-between rounded-[24px] bg-gradient-to-br from-[#0263CC] to-[#02A7BB] p-5 text-white sm:min-h-[220px] sm:rounded-[30px] sm:p-6">
              <MapPinned className="h-7 w-7" />
              <div>
                <p className="text-3xl font-black tracking-[-.04em]">Tbilisi</p>
                <p className="mt-1 text-xs leading-5 text-white/75 sm:text-sm">Walkable city life, European-style architecture and a growing international student culture.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={.08}>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF3FF] px-3 py-2 text-[11px] font-black uppercase tracking-[.15em] text-[#0263CC]"><Sparkles className="h-3.5 w-3.5" /> First, get to know the country</span>
          <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-.04em] text-slate-950 sm:text-4xl lg:text-[46px]">Confidence starts when the destination feels real.</h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">Georgia is a small, welcoming country at the crossroads of Europe and Asia. Tbilisi blends European-style architecture, a modern café culture and an international student environment.</p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">Before fees and university rankings, students and families should understand the daily routine, seasons, transport, accommodation and safety. That context makes the decision clearer.</p>

          <div className="mt-6 rounded-[24px] border border-[#DFF1EE] bg-[#ECFBF7] p-5">
            <div className="flex gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-[#078C74] shadow-sm"><ShieldCheck className="h-5 w-5" /></span>
              <div><p className="font-black text-slate-900">A practical destination-first approach</p><p className="mt-1 text-sm leading-6 text-slate-600">The supplied guide frames safety, comfort and everyday student life as part of the decision — not an afterthought.</p></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
