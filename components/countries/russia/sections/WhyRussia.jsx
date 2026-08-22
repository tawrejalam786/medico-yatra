import { AlertTriangle, ArrowRight } from "lucide-react";
import { reasons } from "../../../../data/russia";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function WhyRussia() {
  return (
    <section id="why-russia" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-24">
            <SectionTitle eyebrow="Why Russia" title="Honest reasons students consider Russia for MBBS." text="The strongest case for Russia is not one single feature — it is the combination of access, established institutions and a mature student ecosystem." />
            <div className="mt-7 rounded-[28px] bg-slate-950 p-5 text-white sm:p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-amber-400/15 text-amber-300"><AlertTriangle className="h-5 w-5" /></span>
                <div>
                  <p className="font-black">Balanced view</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Russia is not FMGE-exempt and university quality varies significantly. Choose based on verified recognition, clinical quality and graduate outcomes — not fees alone.</p>
                </div>
              </div>
              <a href="#licensing" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-cyan-300">Understand licensing <ArrowRight className="h-4 w-4" /></a>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, text, tone }, i) => (
              <Reveal key={title} delay={i * .04} className={i === 4 ? "sm:col-span-2" : ""}>
                <article className={`group h-full rounded-[30px] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 ${tone}`}>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/80 shadow-sm"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-8 text-xl font-black tracking-[-.02em] text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
