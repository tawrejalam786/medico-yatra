import { AlertCircle, ArrowRight, Calculator, WalletCards } from "lucide-react";
import { costRows } from "../../../../data/georgia";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function CostSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <Reveal>
            <SectionTitle eyebrow="Illustrative cost" title="Plan the total cost, not just tuition." text="The PDF provides placeholders rather than fixed numbers. This section keeps that compliance framing clear and visually prominent." />

            <div className="mt-7 overflow-hidden rounded-[30px] bg-gradient-to-br from-[#0263CC] via-[#0878D7] to-[#02A7BB] p-6 text-white sm:p-7">
              <WalletCards className="h-7 w-7" />
              <p className="mt-6 text-xs font-black uppercase tracking-[.15em] text-white/70">Programme view · illustrative</p>
              <p className="mt-2 text-4xl font-black tracking-[-.045em]">~6 years</p>
              <p className="mt-2 text-sm text-white/75">Indicative total: ₹[X–Y] lakh · tuition + living varies widely.</p>
              <div className="mt-6 border-t border-white/15 pt-5"><p className="text-xs font-bold text-white/70">One-time costs</p><p className="mt-1 font-black">₹[X–Y] · visa, flights & initial setup</p></div>
            </div>

            <div className="mt-4 rounded-[24px] bg-[#FFF4E8] p-5 text-[#89500C]">
              <div className="flex gap-3"><AlertCircle className="mt-0.5 h-5 w-5 shrink-0" /><p className="text-sm leading-6"><strong>Illustrative only.</strong> Costs vary by university, city, lifestyle and exchange rates. Verify current fees before making a financial decision.</p></div>
            </div>
          </Reveal>

          <Reveal delay={.08}>
            <div className="rounded-[32px] border border-slate-100 bg-[#F8FBFF] p-4 shadow-[0_18px_55px_rgba(15,23,42,.05)] sm:p-6">
              <div className="flex items-center gap-3 px-1 pb-5"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#EAF3FF] text-[#0263CC]"><Calculator className="h-5 w-5" /></span><div><p className="text-xs font-black uppercase tracking-[.13em] text-[#0263CC]">Annual breakdown</p><p className="mt-1 text-sm text-slate-500">Planning placeholders from the supplied brief</p></div></div>

              <div className="space-y-2.5">
                {costRows.map(([item, range, note]) => (
                  <div key={item} className="grid gap-2 rounded-[20px] bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div><p className="text-sm font-black text-slate-900">{item}</p><p className="mt-1 text-xs leading-5 text-slate-500">{note}</p></div>
                    <p className="text-sm font-black text-[#0263CC] sm:text-right">{range}</p>
                  </div>
                ))}
              </div>

              <a href="#lead" className="mt-5 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-[#0263CC]">Get a Personalised Georgia Cost Estimate <ArrowRight className="h-4 w-4" /></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
