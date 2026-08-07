"use client";

import { motion } from "framer-motion";
import BackgroundGlow from "./BackgroundGlow";
import GlowDivider from "./GlowDivider";
import ComparisonCard from "./ComparisonCard";
import CTASection from "./CTASection";
import comparisonData from "../../data/comparisonData";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

// Named export so AgentComparison can import { ComparisonSection }
export function ComparisonSection() {
  return (
    <section className="relative overflow-hidden bg-[#071321] py-10">
      <BackgroundGlow />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-xs lg:text-sm font-semibold lg:uppercase text-center tracking-[.25em] text-cyan-300 backdrop-blur-xl">
            Trusted by 5000+ Medical Aspirants
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-4xl text-center"
        >
          <h2 className="font-bold text-3xl lg:text-5xl leading-tight text-white md:text-7xl">
            Beyond Admissions.
            <br />
            <span className="text-[#4DA5EC]">
              We Build Medical Careers.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl font-body font-light text-lg leading-8 text-slate-400">
            Most consultants disappear after your admission letter. We stay with
            you through licensing exams, career planning, and your journey to
            becoming a successful healthcare professional.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 grid gap-6 md:grid-cols-4"
        >
          {[
            ["5000+", "Students Guided"],
            ["98%",   "Visa Success"],
            ["20+",   "Countries"],
            ["100%",  "Transparency"],
          ].map((item) => (
            <div
              key={item[0]}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="font-heading text-5xl text-white">{item[0]}</div>
              <div className="mt-3 font-body font-light text-slate-400">{item[1]}</div>
            </div>
          ))}
        </motion.div>

        {/* Comparison */}
        <div className="mt-15 grid items-start gap-12 lg:grid-cols-[1fr_auto_1fr]">
          <ComparisonCard
            title="A Typical Admission Agent"
            color="red"
            icon={faCircleXmark}
            data={comparisonData.agent}
          />
          <GlowDivider />
          <ComparisonCard
            title="Medico Yatra"
            color="blue"
            icon={faCircleCheck}
            data={comparisonData.medico}
          />
          <CTASection />
        </div>

      </div>
    </section>
  );
}

// Default export for any direct imports
export default ComparisonSection;
