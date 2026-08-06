"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import TeamSlider from "./team/TeamSlider";

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FBFF] via-white to-[#F5FAFF]" />

      {/* Blur */}

      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#4DA5EC]/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0263CC]/10 blur-[130px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
          linear-gradient(#0263CC 1px, transparent 1px),
          linear-gradient(90deg,#0263CC 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[340px_1fr]">

          {/* ===================================== */}
          {/* Left */}
          {/* ===================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block rounded-full border border-[#0263CC]/10 bg-[#0263CC]/5 px-4 py-2 text-sm font-semibold text-[#0263CC]">
              Our Team
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
              Meet The
              <span className="block bg-gradient-to-r from-[#0263CC] to-[#4DA5EC] bg-clip-text text-transparent">
                Experts
              </span>
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#0263CC] to-[#4DA5EC]" />

            <p className="mt-7 text-[17px] leading-8 text-slate-600">
              Our dedicated professionals work tirelessly to turn
              your dream of becoming a doctor into reality through
              transparent guidance, personalized counseling and
              complete admission support.
            </p>

            <Link
              href="/team"
              className="group mt-10 inline-flex items-center gap-3 rounded-2xl border-2 border-[#0263CC] bg-white px-7 py-4 font-semibold text-[#0263CC] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#0263CC] hover:text-white"
            >
              Meet Our Team

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                {
                  number: "25+",
                  label: "Experts",
                },
                {
                  number: "5000+",
                  label: "Students",
                },
                {
                  number: "15+",
                  label: "Countries",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#0263CC]/10 bg-white/80 p-4 text-center shadow-lg backdrop-blur-xl"
                >
                  <h4 className="text-xl font-black text-[#0263CC]">
                    {item.number}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ===================================== */}
          {/* Right */}
          {/* ===================================== */}

          <div className="relative min-w-0">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-6 flex items-center justify-between"
  >
    {/* Heading + Navigation */}
  </motion.div>

  <TeamSlider />
</div>
        </div>
      </div>
    </section>
  );
}