import { studentLife } from "../../../../data/russia";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function StudentLife() {
  return (
    <section id="student-life" className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24">
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#0263CC]/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#02A7BB]/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Student life" title="What life as an Indian student in Russia can actually look like." text="Hostel life, food, winter and city transport are not small details — they shape your everyday experience for six years." light />

        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {studentLife.map(({ icon: Icon, title, text, image }, i) => (
            <Reveal key={title} delay={i * .04}>
              <article className="group relative min-h-[330px] overflow-hidden rounded-[32px] bg-slate-800">
                <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 text-2xl font-black text-white">{title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-slate-200">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
