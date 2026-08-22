import { Calculator, CircleAlert, WalletCards } from "lucide-react";
import { costRows } from "../../../../data/russia";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";
import { PrimaryButton } from "../shared/Buttons";

export default function CostSection() {
  return (
    <section id="cost" className="bg-[#F8FBFF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <Reveal>
            <SectionTitle eyebrow="Cost planning" title="Understand total cost — not just tuition." text="The PDF intentionally treats these numbers as illustrative because fees and RUB/INR exchange rates can move significantly." />
            <div className="mt-7 rounded-[30px] bg-gradient-to-br from-[#0263CC] to-[#178BE5] p-6 text-white sm:p-7">
              <WalletCards className="h-7 w-7" />
              <p className="mt-7 text-4xl font-black tracking-[-.04em]">₹[X–Y] lakh</p>
              <p className="mt-2 text-sm font-semibold text-white/75">Illustrative total programme view</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4"><p className="text-xs text-white/65">Duration</p><p className="mt-1 font-black">6 years</p></div>
                <div className="rounded-2xl bg-white/10 p-4"><p className="text-xs text-white/65">One-time costs</p><p className="mt-1 font-black">₹[X–Y]</p></div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={.06}>
            <div className="overflow-hidden rounded-[30px] border border-slate-100 bg-white shadow-[0_18px_55px_rgba(15,23,42,.07)]">
              <div className="flex items-start gap-3 border-b border-slate-100 bg-[#FFF4D8] p-4 text-sm leading-6 text-[#8B5A00] sm:p-5">
                <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" />
                <span><strong>Illustrative only.</strong> Replace with current university-specific figures during counselling.</span>
              </div>
              <div className="divide-y divide-slate-100">
                {costRows.map(([item, range, note]) => (
                  <div key={item} className="grid gap-2 p-4 sm:grid-cols-[1fr_.9fr_1.1fr] sm:items-center sm:p-5">
                    <p className="font-black text-slate-900">{item}</p>
                    <p className="text-sm font-extrabold text-[#0263CC]">{range}</p>
                    <p className="text-sm leading-6 text-slate-500">{note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton><Calculator className="h-4 w-4" /> Get personalised cost estimate</PrimaryButton>
              <p className="text-xs leading-5 text-slate-500">Compare total cost against university quality and current recognition — not tuition alone.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
