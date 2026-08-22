import { programmes } from "../../../../data/russia";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function Programmes() {
  return (
    <section className="bg-[#F8FBFF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Programmes" title="Healthcare programmes you can explore in Russia." text="Availability varies by university. MBBS / General Medicine remains the primary pathway for most Indian students." center />
        <div className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-5 lg:gap-4">
          {programmes.map(({ icon: Icon, title, meta, tone }, i) => (
            <Reveal key={title} delay={i * .04}>
              <article className={`group h-full min-h-[185px] rounded-[28px] p-5 text-white shadow-[0_18px_45px_rgba(15,23,42,.08)] transition duration-300 hover:-translate-y-1.5 ${tone}`}>
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 backdrop-blur"><Icon className="h-5 w-5" /></div>
                <p className="mt-9 text-lg font-black leading-6">{title}</p>
                <p className="mt-2 text-xs font-semibold text-white/75">{meta}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-xs font-semibold text-slate-500">Programme availability varies by university.</p>
      </div>
    </section>
  );
}
