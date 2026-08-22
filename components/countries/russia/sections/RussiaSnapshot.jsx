import { snapshotCards } from "../../../../data/russia";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function RussiaSnapshot() {
  return (
    <section id="overview" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Russia at a glance" title="Everything important, before you go deeper." text="A quick view of the practical details students and parents usually ask first." />

        <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4 lg:gap-4">
          {snapshotCards.map(({ icon: Icon, label, value, className }, i) => (
            <Reveal key={label} delay={i * .035}>
              <article className={`group min-h-[150px] rounded-[26px] bg-gradient-to-br p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 ${className}`}>
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/75 shadow-sm backdrop-blur">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-[11px] font-black uppercase tracking-[.17em] opacity-70">{label}</p>
                <p className="mt-2 text-sm font-black leading-5 text-slate-900 sm:text-base">{value}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
