"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CircleCheck,
  FileCheck2,
  HeartHandshake,
  IndianRupee,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Image from "next/image";

const reassurancePoints = [
  {
    number: "01",
    title: "Costs explained honestly",
    description:
      "We explain costs honestly — including the ones agents often hide.",
    icon: IndianRupee,
  },
  {
    number: "02",
    title: "Recognition matters",
    description:
      "We work with NMC-recognised universities and help you verify status.",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "No false guarantees",
    description:
      "We never guarantee outcomes — and we'll tell you when something is not a good idea.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "A real point of contact",
    description:
      "You get a real point of contact throughout your child's journey.",
    icon: MessageCircle,
  },
  {
    number: "05",
    title: "Beyond the admission",
    description:
      "We plan for licensing and a career, not just a seat abroad.",
    icon: Stethoscope,
  },
];

export default function WhyParentsTrustUs() {
  return (
    <section
      id="why-parents-trust-us"
      className="relative overflow-hidden bg-[#f7fafc] py-10 sm:py-10 lg:py-12"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute left-[-160px] top-[20%] h-[420px] w-[420px] rounded-full bg-[#0263CC]/5 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-160px] right-[-130px] h-[450px] w-[450px] rounded-full bg-[#02A7BB]/6 blur-[130px]" />

      {/* =========================================================
          CONTAINER
      ========================================================== */}

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* =======================================================
            HEADER
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-[850px] text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-4 py-2 shadow-sm">
            <HeartHandshake
              size={14}
              className="text-[#0263CC]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0263CC]">
              For Parents
            </span>
          </div>

          <h2 className="text-[39px] font-semibold leading-[1.07] tracking-[-0.045em] text-[#09213d] sm:text-[50px] lg:text-[61px]">
            Your peace of mind
            <br />
            <span className="text-[#0263CC]">
              matters too.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[15px] leading-7 text-slate-500 sm:text-[17px] sm:leading-8">
            Your child's ambition matters. So does your need to know that the
            decision is informed, transparent and being guided responsibly.
          </p>
        </motion.div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================== */}

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">

          {/* =====================================================
              LEFT — FAMILY / TRUST VISUAL
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
            }}
            className="relative min-h-[480px] overflow-hidden rounded-[32px] bg-[#08213c] sm:min-h-[560px] lg:min-h-[650px]"
          >
            {/* Image */}

            <Image
              src="/images/parents-student.png"
              alt="Parent and student discussing healthcare education"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />

            {/* Dark overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#061a30] via-[#061a30]/45 to-transparent" />

            {/* blue glow */}

            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[250px] w-[250px] rounded-full bg-[#0263CC]/25 blur-[80px]" />

            {/* =================================================
                TOP LABEL
            ================================================== */}

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/15 px-3 py-2 backdrop-blur-md sm:left-7 sm:top-7">
              <ShieldCheck
                size={13}
                className="text-[#69dce5]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/80">
                Trust comes first
              </span>
            </div>

            {/* =================================================
                BOTTOM MESSAGE
            ================================================== */}

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-9">

              <div className="max-w-[450px]">

                <div className="mb-4 h-px w-10 bg-[#69dce5]" />

                <p className="text-[25px] font-semibold leading-[1.2] tracking-[-0.03em] text-white sm:text-[30px]">
                  “You shouldn't have to
                  <span className="text-[#69dce5]">
                    {" "}
                    guess
                  </span>{" "}
                  what comes next.”
                </p>

                <p className="mt-4 text-xs leading-5 text-white/50 sm:text-sm sm:leading-6">
                  We believe parents deserve clarity at every important
                  decision — not pressure at the point of payment.
                </p>

              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — REASSURANCE
          ====================================================== */}

          <div className="flex flex-col justify-center">

            {/* Trust intro */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0263CC]/8 text-[#0263CC]">
                  <CircleCheck size={18} />
                </span>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#02A7BB]">
                    What you can expect
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-[#09213d]">
                    Five simple promises
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                REASSURANCE LIST
            ================================================== */}

            <div className="space-y-3">
              {reassurancePoints.map((point, index) => (
                <ReassuranceItem
                  key={point.number}
                  {...point}
                  index={index}
                />
              ))}
            </div>

            {/* =================================================
                BOTTOM QUOTE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="mt-6 rounded-[24px] border border-[#0263CC]/10 bg-white p-5 shadow-[0_12px_35px_rgba(9,33,61,0.04)] sm:p-6"
            >
              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#02A7BB]/8 text-[#02A7BB]">
                  <HeartHandshake size={17} />
                </div>

                <div>
                  <p className="text-sm font-semibold leading-5 text-[#09213d]">
                    Your child's future is not a transaction to us.
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    It's the journey we've chosen to guide well.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </div>

        {/* =======================================================
            TRUST FOOTER
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-8 flex flex-col gap-4 rounded-[25px] border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0263CC]/7 text-[#0263CC]">
              <ShieldCheck size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#09213d]">
                Informed decisions. No pressure.
              </p>

              <p className="mt-0.5 text-[11px] text-slate-400">
                That's what good guidance should feel like.
              </p>
            </div>

          </div>

          <button
            type="button"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0263CC] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#0258b8]"
          >
            Talk to a counsellor

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

/* ===============================================================
   REASSURANCE ITEM
================================================================ */

function ReassuranceItem({
  number,
  title,
  description,
  icon: Icon,
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0263CC]/15 hover:shadow-[0_15px_40px_rgba(2,99,204,0.07)] sm:p-5"
    >
      {/* hover background */}

      <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-24 w-24 rounded-full bg-[#0263CC]/5 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex gap-4">

        {/* icon */}

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0263CC]/7 text-[#0263CC] transition-all duration-300 group-hover:bg-[#0263CC] group-hover:text-white">
          <Icon size={18} />
        </div>

        {/* content */}

        <div className="min-w-0 flex-1">

          <div className="flex items-start justify-between gap-3">

            <div>
              <span className="text-[9px] font-bold tracking-[0.18em] text-[#02A7BB]">
                {number}
              </span>

              <h3 className="mt-0.5 text-[16px] font-semibold tracking-[-0.02em] text-[#09213d] sm:text-[17px]">
                {title}
              </h3>
            </div>

            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0263CC]/6 text-[#0263CC]">
              <Check size={11} />
            </div>

          </div>

          <p className="mt-1.5 max-w-[560px] text-[12px] leading-5 text-slate-500 sm:text-[13px] sm:leading-5.5">
            {description}
          </p>

        </div>
      </div>
    </motion.div>
  );
}