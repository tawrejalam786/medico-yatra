"use client";

import { AlertTriangle, BarChart3, CircleDollarSign, FlaskConical } from "lucide-react";
import { salaryRows } from "@/data/courses/pharmacy";
import { Container, Notice, PrimaryLink, Reveal, SectionHeading } from "./SectionUI";

export default function SalarySection() {
  return (
    <section id="salary" className="relative overflow-hidden bg-[#F5F9FF] py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-12">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow="Global salary snapshot" title="What do pharmacists earn abroad?" text="An illustrative comparison for qualified, licensed or registered pharmacists. Explore the potential — never treat it as a promise." />
            <Reveal className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-blue-100 bg-white p-4"><CircleDollarSign className="size-5 text-[#0263CC]" /><p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-slate-400">Highest shown</p><p className="mt-1 text-xl font-extrabold text-[#071A49]">~$125k</p></div>
              <div className="rounded-2xl border border-teal-100 bg-white p-4"><BarChart3 className="size-5 text-[#02A7BB]" /><p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-slate-400">Countries</p><p className="mt-1 text-xl font-extrabold text-[#071A49]">10 markets</p></div>
            </Reveal>
            <PrimaryLink className="mt-6 w-full sm:w-auto">Plan my pharmacy career abroad</PrimaryLink>
          </div>

          <Reveal>
            <Notice className="mb-4">
              <div className="flex items-start gap-3"><AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600" /><p><strong>Important:</strong> Figures are approximate estimates from the supplied content brief for qualified and licensed pharmacists. Pay varies by experience, sector, city, currency and year. Registration and immigration requirements apply. Verify current official sources before relying on them.</p></div>
            </Notice>
            <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(2,48,112,.08)]">
              <div className="grid grid-cols-[1fr_auto] gap-4 bg-gradient-to-r from-[#071A49] to-[#0263CC] px-4 py-4 text-[10px] font-extrabold uppercase tracking-wider text-white sm:px-6 sm:text-xs"><span>Country</span><span>Indicative USD / year</span></div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {salaryRows.map((row, index) => (
                  <div key={row.country} className={`flex items-center justify-between gap-4 border-slate-100 px-4 py-3.5 sm:px-5 ${index < 8 ? "border-b" : ""} ${index % 2 === 0 ? "sm:border-r" : ""}`}>
                    <span className="flex items-center gap-3 text-sm font-bold text-[#071A49]"><span className="text-xl">{row.flag}</span>{row.country}</span>
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-extrabold text-[#0263CC]">{row.salary}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 text-[10px] leading-5 text-slate-500 sm:px-6">Content brief estimates · USD/year · Verification required before production publishing</div>
            </div>
            <Notice tone="teal" className="mt-4">
              <div className="flex items-start gap-3"><FlaskConical className="mt-0.5 size-5 shrink-0 text-[#009E9A]" /><p><strong>Science and industry roles are different.</strong> R&D, regulatory, QA/QC, toxicology, cosmetic science and biotech pay varies by role and usually does not require pharmacist licensure.</p></div>
            </Notice>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
