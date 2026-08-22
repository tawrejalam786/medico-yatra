import { CheckCircle2, MapPin } from "lucide-react";
import Reveal from "../shared/Reveal";
import SectionTitle from "../shared/SectionTitle";

export default function AboutRussia() {
  return (
    <section className="bg-[#F7FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:px-8">
        <Reveal className="relative">
          <div className="grid grid-cols-[1.12fr_.88fr] gap-3">
            <img src="/images/countries/russia/russia-campus.webp" alt="University campus in Russia" className="h-[420px] w-full rounded-[32px] object-cover sm:h-[520px]" />
            <div className="grid gap-3">
              <img src="/images/countries/russia/russia-students.webp" alt="International students in Russia" className="h-full min-h-[200px] w-full rounded-[26px] object-cover" />
              <div className="rounded-[26px] bg-gradient-to-br from-[#009E9A] to-[#02C7B5] p-5 text-white">
                <MapPin className="h-6 w-6" />
                <p className="mt-7 text-lg font-black">Major urban student centres</p>
                <p className="mt-2 text-sm leading-6 text-white/80">Moscow, Saint Petersburg, Kazan and Volgograd.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={.08}>
          <SectionTitle eyebrow="First, know the country" title="Russia is more than cold weather and distance." text="Many families stop their research at those two ideas. The student experience in Russia’s major university cities is much broader than that." />
          <div className="mt-7 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            <p>Russia spans eleven time zones, but the cities most relevant to international medical students are established urban centres with public transport, student services, Indian food options and large international communities.</p>
            <p>Russian medical education also has a long basic-science tradition. The real decision is not simply “Russia or not” — it is choosing the right university, understanding the licensing pathway and planning for the realities honestly.</p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Established international student ecosystem", "Clinical communication supported by Russian language", "Indian student networks in major cities", "University quality varies — selection matters"].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#02A7BB]" />
                <span className="text-sm font-semibold leading-6 text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
