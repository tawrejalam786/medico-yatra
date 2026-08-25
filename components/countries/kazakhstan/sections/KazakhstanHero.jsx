"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Banknote, Building2, Languages, Stethoscope } from "lucide-react";
import { PrimaryButton } from "../shared/Buttons";

const miniCards = [
  { icon: Banknote, label: "Affordable route", value: "Among the lowest MBBS costs" },
  { icon: Languages, label: "English-medium", value: "International programmes" },
  { icon: Building2, label: "Modern cities", value: "Almaty · Astana" },
];

export default function KazakhstanHero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_14%_12%,rgba(2,167,187,.15),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(2,99,204,.13),transparent_26%),linear-gradient(180deg,#F8FCFF_0%,#FFFFFF_100%)] pt-20 sm:pt-12 lg:pt-22">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#0263CC_0.7px,transparent_0.7px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-12">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: [0.22,1,0.36,1] }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#0263CC] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#02A7BB]" /> Medico Yatra · Country Guide · Kazakhstan
            </div>

            <h1 className="mt-5 max-w-3xl text-[40px] font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[62px]">
              Study MBBS in Kazakhstan — <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">affordable fees, modern cities, clearer planning.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              NMC-approved university options, English-medium programmes and some of the lowest tuition costs among major MBBS destinations — with FMGE / NExT planning built in from the start.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton>Book Free Counselling</PrimaryButton>
              <a href="#universities" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 text-sm font-black text-slate-800 shadow-sm transition hover:border-[#0263CC]/30 hover:text-[#0263CC]">
                See Universities <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-bold text-slate-500">
              <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-[#02A7BB]" /> Verify NMC status</span>
              <span className="inline-flex items-center gap-1.5"><Stethoscope className="h-4 w-4 text-[#7656C9]" /> FMGE / NExT planning</span>
            </div>
          </motion.div>

          <motion.div className="relative" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, delay: .08, ease: [0.22,1,0.36,1] }}>
            <div className="relative mx-auto max-w-[680px]">
              <div className="relative aspect-[1.18/1] overflow-hidden rounded-[34px] bg-slate-100 shadow-[0_32px_90px_rgba(15,23,42,.14)] sm:rounded-[42px]">
                <img src="/images/countries/kazakhstan/kazakhstan-hero.webp" alt="Indian medical student in Kazakhstan" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0263CC]/20 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/45 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 sm:bottom-5 sm:left-5 sm:right-5 sm:gap-3">
                  {miniCards.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="rounded-2xl border border-white/25 bg-white/88 p-3 shadow-lg backdrop-blur-md sm:p-4">
                      <Icon className="h-4 w-4 text-[#0263CC]" />
                      <p className="mt-2 text-[10px] font-black uppercase tracking-[.1em] text-slate-900 sm:text-xs">{label}</p>
                      <p className="mt-1 hidden text-[11px] leading-4 text-slate-500 sm:block">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -left-2 top-8 hidden w-[185px] overflow-hidden rounded-[24px] border-4 border-white bg-white shadow-[0_20px_55px_rgba(15,23,42,.15)] sm:block lg:-left-12">
                <img src="/images/countries/kazakhstan/kazakhstan-city.webp" alt="Almaty city" className="h-28 w-full object-cover" />
                <div className="p-3">
                  <p className="text-[10px] font-black uppercase tracking-[.12em] text-[#02A7BB]">Modern Central Asia</p>
                  <p className="mt-1 text-sm font-black text-slate-900">Almaty · Astana · Shymkent</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </section>
  );
}
