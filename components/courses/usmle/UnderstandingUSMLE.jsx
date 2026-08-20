"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Info,
  ShieldCheck,
} from "lucide-react";

const pathwaySteps = [
  {
    number: "01",
    title: "USMLE",
    subtitle: "Three-step examination",
    description:
      "The United States Medical Licensing Examination is the examination pathway for physicians seeking medical licensure in the United States.",
    icon: <BookOpen size={19} />,
  },
  {
    number: "02",
    title: "ECFMG",
    subtitle: "For international medical graduates",
    description:
      "For IMGs, ECFMG certification runs alongside the USMLE pathway and involves verification of medical education credentials and applicable requirements.",
    icon: <ShieldCheck size={19} />,
  },
  {
    number: "03",
    title: "Match",
    subtitle: "Residency pathway",
    description:
      "After meeting the relevant requirements, international medical graduates approach the US residency Match as part of their pathway toward residency.",
    icon: <Award size={19} />,
  },
  {
    number: "04",
    title: "US Residency",
    subtitle: "The longer-term pathway",
    description:
      "Residency is the next stage for physicians pursuing clinical practice in the United States.",
    icon: <GraduationCap size={19} />,
  },
];

export default function UnderstandingUSMLE() {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] py-10 sm:py-12 lg:py-12">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-180px] top-[15%] h-[400px] w-[400px] rounded-full bg-[#0263CC]/5 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-[#02A7BB]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="max-w-[760px]"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0263CC]/8 text-[#0263CC]">
              <Globe2 size={17} />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0263CC]">
              Understanding the pathway
            </span>
          </div>

          <h2 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#09213d] sm:text-[48px] lg:text-[58px]">
            What Is USMLE,
            <br />

            <span className="text-[#0263CC]">
              and Who Is It For?
            </span>
          </h2>

          <p className="mt-6 max-w-[720px] text-[14px] leading-7 text-slate-500 sm:text-[16px] sm:leading-8">
            The United States Medical Licensing Examination (USMLE) is a
            three-step examination pathway for medical licensure in the United
            States. For international medical graduates, the USMLE pathway
            works alongside ECFMG certification and the later residency Match.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN PATHWAY
        ==================================================== */}

        <div className="mt-14 grid gap-8 lg:mt-18 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">

          {/* =================================================
              LEFT — PATHWAY VISUAL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(9,33,61,0.05)] sm:p-8 lg:p-10"
          >
            {/* Top label */}

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#02A7BB]">
                  The US pathway
                </p>

                <p className="mt-1 text-sm font-semibold text-[#09213d]">
                  From examination to residency
                </p>
              </div>

              <div className="hidden rounded-full border border-[#0263CC]/10 bg-[#0263CC]/5 px-3 py-1.5 sm:block">
                <span className="text-[9px] font-semibold text-[#0263CC]">
                  For IMGs
                </span>
              </div>
            </div>

            {/* Pathway */}

            <div className="relative mt-10">

              {/* Connecting vertical line */}

              <div className="absolute bottom-12 left-[22px] top-12 w-px bg-gradient-to-b from-[#0263CC]/40 via-[#02A7BB]/30 to-transparent sm:left-[25px]" />

              <div className="space-y-1">
                {pathwaySteps.map((step, index) => (
                  <PathwayStep
                    key={step.number}
                    step={step}
                    index={index}
                    total={pathwaySteps.length}
                  />
                ))}
              </div>
            </div>

            {/* Bottom note */}

            <div className="mt-8 rounded-2xl border border-[#0263CC]/10 bg-[#f5f9ff] p-4 sm:p-5">
              <div className="flex gap-3">
                <Info
                  size={16}
                  className="mt-0.5 shrink-0 text-[#0263CC]"
                />

                <p className="text-[11px] leading-5 text-slate-500">
                  USMLE and ECFMG requirements can change. Always verify the
                  current requirements with the relevant official bodies before
                  making decisions about your pathway.
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — EXPLANATION
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* USMLE */}

            <InfoBlock
              eyebrow="01 · USMLE"
              title="The examination pathway"
              text="USMLE is a three-step examination required for medical licensure in the United States. It is administered jointly by NBME and FSMB."
              icon={<BookOpen size={17} />}
            />

            {/* ECFMG */}

            <InfoBlock
              eyebrow="02 · ECFMG"
              title="For international medical graduates"
              text='For IMGs, ECFMG certification runs alongside USMLE. It involves verification of medical education credentials and applicable eligibility requirements for entering US residency pathways.'
              icon={<ShieldCheck size={17} />}
            />

            {/* Important distinction */}

            <div className="relative overflow-hidden rounded-[26px] bg-[#09213d] p-6 sm:p-7">
              <div className="pointer-events-none absolute right-[-60px] top-[-70px] h-[180px] w-[180px] rounded-full bg-[#0263CC]/25 blur-[60px]" />

              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#02A7BB]/15 text-[#69dce5]">
                    <CheckCircle2 size={15} />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#69dce5]">
                    Important distinction
                  </span>
                </div>

                <h3 className="mt-5 text-[21px] font-semibold tracking-[-0.025em] text-white">
                  USMLE and FMGE / NExT are separate pathways.
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-white/50">
                  USMLE is the pathway for the United States, while FMGE /
                  NExT is the licensing pathway for India. Clearing one does
                  not grant eligibility to practise under the other pathway.
                </p>

                {/* Comparison */}

                <div className="mt-6 grid grid-cols-2 gap-2">
                  <PathwayCountry
                    label="USMLE"
                    destination="United States"
                    active
                  />

                  <PathwayCountry
                    label="FMGE / NExT"
                    destination="India"
                  />
                </div>
              </div>
            </div>

            {/* Dual pathway message */}

            <div className="rounded-[26px] border border-[#02A7BB]/15 bg-[#ecfbfc] p-6 sm:p-7">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#02A7BB] shadow-sm">
                  <ArrowRight size={17} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#09213d]">
                    Keeping both pathways open
                  </p>

                  <p className="mt-2 text-[12px] leading-6 text-slate-500">
                    Many students pursue both pathways simultaneously. Medico
                    Yatra's coaching is structured to support this where it
                    fits the student's goals and capacity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            BOTTOM FLOW
        ==================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-hidden rounded-[26px] border border-slate-200 bg-white"
        >
          <div className="grid sm:grid-cols-3">

            <BottomPoint
              number="01"
              title="Understand"
              text="Know what the USMLE pathway actually involves."
            />

            <BottomPoint
              number="02"
              title="Plan"
              text="Build preparation around your MBBS-abroad timeline."
            />

            <BottomPoint
              number="03"
              title="Keep options open"
              text="Explore US and India pathways based on your goals."
              last
            />

          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===============================================================
   PATHWAY STEP
================================================================ */

function PathwayStep({ step, index, total }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      className="group relative flex gap-4 py-3 sm:gap-5"
    >
      {/* Number */}

      <div className="relative z-10 flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[14px] border border-[#0263CC]/10 bg-[#f5f9ff] text-[#0263CC] transition-all duration-300 group-hover:border-[#0263CC]/20 group-hover:bg-[#0263CC] group-hover:text-white sm:h-[50px] sm:w-[50px]">
        {step.icon}
      </div>

      {/* Content */}

      <div className="min-w-0 flex-1 rounded-2xl px-1 py-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#0263CC]">
            {step.number}
          </span>

          <span className="h-1 w-1 rounded-full bg-slate-200" />

          <span className="text-[9px] font-medium text-slate-400">
            {step.subtitle}
          </span>
        </div>

        <h3 className="mt-1.5 text-[17px] font-semibold tracking-[-0.02em] text-[#09213d] sm:text-[19px]">
          {step.title}
        </h3>

        <p className="mt-1.5 max-w-[600px] text-[11px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ===============================================================
   INFO BLOCK
================================================================ */

function InfoBlock({
  eyebrow,
  title,
  text,
  icon,
}) {
  return (
    <div className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(9,33,61,0.025)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0263CC]/15 hover:shadow-[0_18px_40px_rgba(2,99,204,0.06)] sm:p-7">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0263CC]/7 text-[#0263CC] transition-colors group-hover:bg-[#0263CC] group-hover:text-white">
          {icon}
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#02A7BB]">
            {eyebrow}
          </p>

          <h3 className="mt-1.5 text-[18px] font-semibold tracking-[-0.025em] text-[#09213d]">
            {title}
          </h3>

          <p className="mt-2.5 text-[12px] leading-6 text-slate-500">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   PATHWAY COUNTRY
================================================================ */

function PathwayCountry({
  label,
  destination,
  active = false,
}) {
  return (
    <div
      className={`rounded-xl border p-3 ${
        active
          ? "border-[#02A7BB]/20 bg-white/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <p
        className={`text-[10px] font-bold ${
          active ? "text-[#69dce5]" : "text-white/65"
        }`}
      >
        {label}
      </p>

      <p className="mt-1 text-[9px] text-white/35">
        → {destination}
      </p>
    </div>
  );
}

/* ===============================================================
   BOTTOM POINT
================================================================ */

function BottomPoint({
  number,
  title,
  text,
  last = false,
}) {
  return (
    <div
      className={`relative p-5 sm:p-6 ${
        !last ? "border-b sm:border-b-0 sm:border-r border-slate-200" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-[9px] font-bold tracking-[0.15em] text-[#02A7BB]">
          {number}
        </span>

        <div>
          <h4 className="text-sm font-semibold text-[#09213d]">
            {title}
          </h4>

          <p className="mt-1 text-[11px] leading-5 text-slate-500">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}