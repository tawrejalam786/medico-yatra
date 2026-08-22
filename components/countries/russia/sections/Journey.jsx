import { journey } from "../../../../data/russia";

import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

const tones = ["#EAF3FF", "#E8FBF9", "#F1ECFF", "#FFF0E5", "#E8F8EF", "#FFE8F0", "#FFF4D8", "#E9F5FF"];

export default function Journey() {
  return (
    <section className="bg-[#F7FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="How Medico Yatra helps" title="From your first question to your first day on campus — and beyond." text="The service journey should feel clear, not mysterious. Each stage has a defined role." center />
        <div className="relative mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {journey.map(({ icon: Icon, step, title, text }, i) => (
            <Reveal key={step} delay={i * .035}>
              <article className="h-full rounded-[28px] border border-white bg-white p-5 shadow-[0_15px_45px_rgba(15,23,42,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl" style={{ backgroundColor: tones[i] }}><Icon className="h-5 w-5 text-slate-800" /></span>
                  <span className="text-3xl font-black text-slate-100">{step}</span>
                </div>
                <h3 className="mt-7 text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
