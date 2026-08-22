"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, GraduationCap, MapPin, ShieldCheck } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "../shared/Buttons";

const ease = [0.22, 1, 0.36, 1];

export default function RussiaHero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F9FF] mt-12">
      <div className="absolute inset-0 opacity-[.45] [background-image:radial-gradient(#B9D9F4_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute -left-28 top-12 h-72 w-72 rounded-full bg-[#02A7BB]/10 blur-3xl" />
      <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#0263CC]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-8 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease }}>
          <div className="mb-5 flex flex-wrap items-center gap-2 text-[11px] font-bold sm:text-xs">
            <span className="rounded-full bg-white px-3 py-2 text-[#0263CC] shadow-sm">Medico Yatra</span>
            <span className="text-slate-300">/</span>
            <span className="rounded-full bg-[#DDF9F7] px-3 py-2 text-[#008F8B]">Country Guide · Russia 🇷🇺</span>
          </div>

          <h1 className="max-w-3xl text-[40px] font-black leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-[66px]">
            Study MBBS in Russia with a <span className="text-[#0263CC]">clearer pathway</span> for Indian students.
          </h1>

          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Established universities, English-medium programmes, transparent cost planning and FMGE / NExT guidance — understood before you commit.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[430px]:flex-row">
            <PrimaryButton>Book Free Counselling</PrimaryButton>
            <SecondaryButton>See Universities</SecondaryButton>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2 sm:max-w-xl sm:gap-3">
            {[
              [GraduationCap, "6 Years", "General Medicine"],
              [BadgeCheck, "English", "Major programmes"],
              [ShieldCheck, "FMGE / NExT", "Planning required"],
            ].map(([Icon, value, label]) => (
              <div key={value} className="rounded-[20px] border border-white bg-white/85 p-3 shadow-[0_10px_35px_rgba(15,23,42,.06)] backdrop-blur sm:p-4">
                <Icon className="mb-2 h-4 w-4 text-[#0263CC]" />
                <div className="text-sm font-black text-slate-950 sm:text-base">{value}</div>
                <div className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, ease, delay: .1 }} className="relative min-h-[440px] sm:min-h-[560px] lg:min-h-[620px]">
          <div className="absolute inset-x-0 top-0 h-[78%] overflow-hidden rounded-[34px] bg-slate-200 shadow-[0_35px_80px_rgba(15,23,42,.18)] sm:rounded-[42px]">
            <img src="/images/countries/russia/russia-hero.webp" alt="Indian medical student in Russia" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white sm:bottom-7 sm:left-7 sm:right-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-white/70">Study destination</p>
                <p className="mt-1 text-2xl font-black">Russia</p>
              </div>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15 backdrop-blur"><ArrowUpRight className="h-5 w-5" /></span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-[62%] overflow-hidden rounded-[28px] border-[6px] border-[#F4F9FF] bg-white shadow-2xl sm:w-[58%]">
            <img src="/images/countries/russia/russia-city.webp" alt="Russian city and student environment" className="h-40 w-full object-cover sm:h-52" />
            <div className="flex items-center gap-2 p-4">
              <MapPin className="h-4 w-4 text-[#02A7BB]" />
              <span className="text-xs font-extrabold text-slate-800 sm:text-sm">Moscow · Kazan · St. Petersburg</span>
            </div>
          </div>

          <div className="absolute bottom-8 right-0 w-[42%] rounded-[26px] border-[6px] border-[#F4F9FF] bg-gradient-to-br from-[#0263CC] to-[#178BE5] p-4 text-white shadow-2xl sm:p-5">
            <div className="text-3xl">🇮🇳 × 🇷🇺</div>
            <p className="mt-3 text-xs font-semibold leading-5 text-white/80 sm:text-sm">One of the largest Indian student communities abroad.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
