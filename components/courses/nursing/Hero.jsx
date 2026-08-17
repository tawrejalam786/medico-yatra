"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe2, Users, ShieldCheck, Sparkles } from "lucide-react";

const bullets = [
  ["High demand", "Nurses needed globally"],
  ["Better salaries", "Earn in top currencies"],
  ["Family mobility", "Bring loved ones"],
  ["Career growth", "Specialize & grow"]
];

export default function Hero() {
  return (
    <section id="counselling" className="relative overflow-hidden bg-white py-6 sm:py-8 md:py-10 lg:py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(59,130,246,.16),transparent_30%),linear-gradient(135deg,#f8fbff_0%,#fff_55%,#eff8ff_100%)]" />
      <div className="absolute -left-20 top-10 size-60 rounded-full bg-blue-100/60 blur-3xl sm:-left-28 sm:top-16 sm:size-80" />
      <div className="absolute right-0 top-0 h-full w-[44%] bg-[linear-gradient(135deg,transparent,rgba(37,99,235,.08))]" />

      <div className="relative mx-auto grid min-h-[500px] max-w-7xl items-center gap-6 px-4 pb-8 pt-8 sm:min-h-[580px] sm:gap-8 sm:px-6 sm:pb-10 sm:pt-10 md:min-h-[620px] lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pb-14 lg:pt-16">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: .6 }}
          className="order-2 lg:order-1"
        >
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.12em] text-blue-700 shadow-sm sm:mb-5 sm:px-3.5 sm:py-2 sm:text-[11px]">
            <Sparkles size={12} className="sm:size-[13px]" /> Study Nursing Abroad
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-[28px] font-black leading-[1.08] tracking-[-.03em] text-slate-950 sm:text-[34px] sm:leading-[1.06] md:text-[42px] lg:text-[48px] lg:leading-[1.05] lg:tracking-[-.04em] xl:text-[58px]">
            Build a respected nursing career{" "}
            <span className="text-blue-600">anywhere in the world.</span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-[13px] leading-6 text-slate-600 sm:mt-5 sm:text-[14px] sm:leading-6 md:text-[15px] md:leading-7 lg:mt-6">
            Get a clear roadmap for nursing abroad — from course selection and admission to licensing, employment and family settlement.
          </p>

          {/* Features Grid */}
          <div className="mt-5 grid max-w-2xl grid-cols-2 gap-2 sm:mt-6 sm:gap-2.5 md:grid-cols-4">
            {bullets.map(([title, sub], i) => (
              <div 
                key={title} 
                className="rounded-xl border border-slate-200 bg-white/75 p-2.5 shadow-sm backdrop-blur sm:rounded-2xl sm:p-3"
              >
                <div className="mb-1.5 grid size-7 place-items-center rounded-full bg-blue-50 text-blue-600 sm:mb-2 sm:size-8">
                  <CheckCircle2 size={15} className="sm:size-[17px]" />
                </div>
                <b className="block text-[11px] text-slate-900 sm:text-xs">{title}</b>
                <span className="mt-0.5 block text-[9px] leading-3.5 text-slate-500 sm:text-[10px] sm:leading-4">{sub}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:gap-3 md:mt-7">
            <a 
              href="#counselling-form" 
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-[13px] font-extrabold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Book Free Counselling <ArrowRight size={16} className="sm:size-[17px]" />
            </a>
            <a 
              href="#salary" 
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-[13px] font-extrabold text-blue-700 transition hover:bg-blue-50 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Explore Nurse Salaries
            </a>
          </div>

          {/* Disclaimer */}
          <p className="mt-3 text-[9px] text-slate-400 sm:text-[10px]">
            *Eligibility, licensing and immigration rules vary by country.
          </p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: .96 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: .7, delay: .1 }} 
          className="relative order-1 mx-auto w-full max-w-[500px] lg:order-2 lg:max-w-[620px]"
        >
          <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-blue-100 via-white to-cyan-50 shadow-2xl shadow-blue-900/10 sm:min-h-[420px] sm:rounded-[32px] lg:min-h-[470px] lg:rounded-[34px]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(255,255,255,.95),transparent_30%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-blue-900/20 to-transparent" />
            
            {/* Main Image */}
            <Image
              src="/images/nursing-new.jpg"
              alt="Professional nurse"
              fill
              priority
              className="object-cover object-center mix-blend-multiply opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/15 to-transparent" />

            {/* Top Badge */}
            <div className="absolute left-3 top-3 rounded-xl border border-white/80 bg-white/90 p-2.5 shadow-xl backdrop-blur sm:left-4 sm:top-4 sm:rounded-2xl sm:p-3 lg:left-6 lg:top-6">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Globe2 size={15} className="text-blue-600 sm:size-[17px]" />
                <b className="text-[11px] sm:text-xs">Global Nursing</b>
              </div>
              <p className="mt-0.5 text-[9px] text-slate-500 sm:mt-1 sm:text-[10px]">
                Opportunities across 10+ countries
              </p>
            </div>

            {/* Bottom Cards */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-col items-stretch gap-2.5 sm:bottom-5 sm:left-5 sm:right-5 sm:flex-row sm:items-end sm:justify-between sm:gap-3 lg:bottom-7 lg:left-7 lg:right-7">
              {/* Main CTA Card */}
              <div className="max-w-full rounded-xl bg-slate-950/85 p-3 text-white backdrop-blur sm:max-w-[220px] sm:rounded-2xl sm:p-4">
                <p className="text-[9px] uppercase tracking-[.15em] text-blue-200 sm:text-[10px]">
                  Your next chapter
                </p>
                <b className="mt-0.5 block text-base leading-tight sm:mt-1 sm:text-lg">
                  Study. License. Work. Settle.
                </b>
              </div>

              {/* Students Count Card - Hidden on mobile */}
              <div className="hidden rounded-2xl bg-white/95 p-3 shadow-xl sm:block">
                <div className="flex -space-x-2">
                  {[1,2,3].map(n => (
                    <span 
                      key={n} 
                      className="grid size-8 place-items-center rounded-full border-2 border-white bg-blue-100 text-[10px] font-black text-blue-700"
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <b className="mt-1 block text-xs">15,000+ students</b>
                <span className="text-[9px] text-slate-500">guided successfully</span>
              </div>
            </div>
          </div>

          {/* Support Badge - Hidden on mobile */}
          <div className="absolute -bottom-3 -right-2 hidden rounded-2xl border border-blue-100 bg-white p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-blue-50 text-blue-600">
                <ShieldCheck size={20} />
              </div>
              <div>
                <b className="block text-sm">End-to-end support</b>
                <span className="text-[10px] text-slate-500">From admission to arrival</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
