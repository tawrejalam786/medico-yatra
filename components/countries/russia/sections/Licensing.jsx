import { ArrowRight, BookOpenCheck, ShieldCheck, Stethoscope } from "lucide-react";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function Licensing() {
  return (
    <section id="licensing" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0B1730] via-[#10264F] to-[#0263CC] p-5 text-white sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
              <div>
                <SectionTitle eyebrow="FMGE / NExT" title="Planning to practise in India? Licensing must be part of the university decision." text="Russia is not on India’s FMGE-exempt list. Students planning to return to India need to follow the applicable licensing pathway and verify current NMC notifications." light />
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-300">Explore FMGE / NExT Coaching <ArrowRight className="h-4 w-4" /></a>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  [ShieldCheck, "Verify recognition", "Check current NMC status before enrolling."],
                  [BookOpenCheck, "Start early", "Build licensing preparation during MBBS, not after graduation."],
                  [Stethoscope, "Choose for outcomes", "Compare clinical quality and graduate outcomes — not only fees."],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="rounded-[24px] border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <div className="flex items-start gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10"><Icon className="h-5 w-5" /></span><div><p className="font-black">{title}</p><p className="mt-1 text-xs leading-5 text-white/65">{text}</p></div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
