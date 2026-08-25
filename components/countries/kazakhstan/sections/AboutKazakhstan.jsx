import { MapPinned, Snowflake, Sparkles } from "lucide-react";
import Reveal from "../shared/Reveal";

export default function AboutKazakhstan() {
  return (
    <section className="bg-[#F7FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-8">
        <Reveal>
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
            <div className="col-span-2 overflow-hidden rounded-[30px] sm:rounded-[36px]">
              <img src="/images/countries/kazakhstan/kazakhstan-city-mordern.webp" alt="Kazakhstan modern city environment" className="h-[250px] w-full object-cover sm:h-[330px]" />
            </div>
            <div className="overflow-hidden rounded-[24px] sm:rounded-[30px]">
              <img src="/images/countries/kazakhstan/kazakhstan-campus.webp" alt="Kazakhstan medical university campus" className="h-[170px] w-full object-cover sm:h-[220px]" />
            </div>
            <div className="flex min-h-[170px] flex-col justify-between rounded-[24px] bg-gradient-to-br from-[#0263CC] to-[#02A7BB] p-5 text-white sm:min-h-[220px] sm:rounded-[30px] sm:p-6">
              <MapPinned className="h-7 w-7" />
              <div>
                <p className="text-3xl font-black tracking-[-.04em]">Almaty</p>
                <p className="mt-1 text-xs leading-5 text-white/75 sm:text-sm">Kazakhstan&apos;s largest city, with modern infrastructure and a developing Indian student community.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={.08}>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF3FF] px-3 py-2 text-[11px] font-black uppercase tracking-[.15em] text-[#0263CC]"><Sparkles className="h-3.5 w-3.5" /> First, get to know the country</span>
          <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-.04em] text-slate-950 sm:text-4xl lg:text-[46px]">A practical MBBS destination inside a rapidly modernising Central Asian country.</h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">Kazakhstan is the world&apos;s ninth-largest country. For Indian students, its strongest appeal is practical: low tuition, English-medium programmes and a growing history of FMGE-eligible graduates returning to India.</p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">Almaty is the cultural and commercial centre; Astana is a planned, futuristic capital. Both offer modern infrastructure, student networks and familiar food options that can make the transition easier.</p>

          <div className="mt-6 rounded-[24px] border border-[#CFE8FF] bg-[linear-gradient(135deg,#EAF6FF,#F5FAFF)] p-5">
            <div className="flex gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-[#1479C9] shadow-sm"><Snowflake className="h-5 w-5" /></span>
              <div><p className="font-black text-slate-900">Climate is a real decision factor</p><p className="mt-1 text-sm leading-6 text-slate-600">Astana can experience winter temperatures below -30°C. Students should factor serious winter preparation into the destination decision.</p></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
