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
      className="relative overflow-hidden bg-[#f7fafc] py-10 sm:py-12 lg:py-16"
    >
      {/* =========================================================
          BACKGROUND GLOW
      ========================================================== */}

      <div className="pointer-events-none absolute left-[-160px] top-[18%] h-[420px] w-[420px] rounded-full bg-[#0263CC]/5 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-160px] right-[-130px] h-[450px] w-[450px] rounded-full bg-[#02A7BB]/6 blur-[130px]" />

      <div className="pointer-events-none absolute left-[45%] top-[45%] h-[300px] w-[300px] rounded-full bg-[#0263CC]/[0.025] blur-[110px]" />

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
          {/* Badge */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-4 py-2 shadow-[0_8px_25px_rgba(2,99,204,0.05)]">
            <HeartHandshake
              size={14}
              className="text-[#0263CC]"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0263CC]">
              For Parents
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-[39px] font-semibold leading-[1.07] tracking-[-0.045em] text-[#09213d] sm:text-[50px] lg:text-[61px]">
            Your peace of mind
            <br />
            <span className="text-[#0263CC]">
              matters too.
            </span>
          </h2>

          {/* Description */}

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
            className="
              relative
              min-h-[480px]
              overflow-hidden
              rounded-[32px]
              bg-[#08213c]
              shadow-[0_25px_70px_rgba(6,30,52,0.16)]
              sm:min-h-[560px]
              lg:min-h-[650px]
            "
          >
            {/* Image */}

            <Image
              src="/images/parents-student.png"
              alt="Parent and student discussing healthcare education"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority={false}
            />

            {/* Dark overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#061a30] via-[#061a30]/45 to-transparent" />

            {/* Secondary overlay */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#0263CC]/10 via-transparent to-[#02A7BB]/10" />

            {/* Blue glow */}

            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[250px] w-[250px] rounded-full bg-[#0263CC]/25 blur-[80px]" />

            {/* =================================================
                TOP LABEL
            ================================================== */}

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 backdrop-blur-md sm:left-7 sm:top-7">
              <ShieldCheck
                size={13}
                className="text-[#69dce5]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/80">
                Trust comes first
              </span>
            </div>

            {/* =================================================
                IMAGE CORNER DECORATION
            ================================================== */}

            <div className="absolute right-6 top-24 hidden h-16 w-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md sm:block">
              <div className="flex h-full items-center justify-center">
                <HeartHandshake
                  size={24}
                  className="text-white/70"
                />
              </div>
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
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0263CC]/8 text-[#0263CC]">
                  <CircleCheck size={18} />
                </div>

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

            <div
              className="
                space-y-3
                [perspective:1200px]
              "
            >
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
              className="
                mt-6
                rounded-[24px]
                border
                border-[#0263CC]/10
                bg-white
                p-5
                shadow-[0_12px_35px_rgba(9,33,61,0.04)]
                sm:p-6
              "
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
          className="
            mt-8
            flex
            flex-col
            gap-4
            rounded-[25px]
            border
            border-slate-200
            bg-white
            p-5
            shadow-[0_12px_35px_rgba(9,33,61,0.04)]
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:p-6
          "
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
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#0263CC]
              px-5
              py-3
              text-xs
              font-semibold
              text-white
              shadow-[0_10px_25px_rgba(2,99,204,0.2)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0258b8]
              hover:shadow-[0_15px_30px_rgba(2,99,204,0.28)]
            "
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
  const cardThemes = [
    {
      bg: "from-[#071b33] via-[#0a2949] to-[#063b55]",
      glow: "bg-[#2ea7ff]",
      iconBg: "bg-[#2ea7ff]/15",
      iconColor: "text-[#63c5ff]",
      numberColor: "text-[#63c5ff]",
      checkBg: "bg-[#2ea7ff]/15",
      checkColor: "text-[#63c5ff]",
      border: "border-[#2ea7ff]/20",
    },

    {
      bg: "from-[#071c2b] via-[#083b45] to-[#07545b]",
      glow: "bg-[#21d4c5]",
      iconBg: "bg-[#21d4c5]/15",
      iconColor: "text-[#5ee9df]",
      numberColor: "text-[#5ee9df]",
      checkBg: "bg-[#21d4c5]/15",
      checkColor: "text-[#5ee9df]",
      border: "border-[#21d4c5]/20",
    },

    {
      bg: "from-[#16102f] via-[#241447] to-[#32145a]",
      glow: "bg-[#a855f7]",
      iconBg: "bg-[#a855f7]/15",
      iconColor: "text-[#c084fc]",
      numberColor: "text-[#c084fc]",
      checkBg: "bg-[#a855f7]/15",
      checkColor: "text-[#c084fc]",
      border: "border-[#a855f7]/20",
    },

    {
      bg: "from-[#241407] via-[#3a210b] to-[#4a2608]",
      glow: "bg-[#f59e0b]",
      iconBg: "bg-[#f59e0b]/15",
      iconColor: "text-[#fbbf24]",
      numberColor: "text-[#fbbf24]",
      checkBg: "bg-[#f59e0b]/15",
      checkColor: "text-[#fbbf24]",
      border: "border-[#f59e0b]/20",
    },

    {
      bg: "from-[#071b27] via-[#0b3440] to-[#073f4d]",
      glow: "bg-[#06b6d4]",
      iconBg: "bg-[#06b6d4]/15",
      iconColor: "text-[#67e8f9]",
      numberColor: "text-[#67e8f9]",
      checkBg: "bg-[#06b6d4]/15",
      checkColor: "text-[#67e8f9]",
      border: "border-[#06b6d4]/20",
    },
  ];

  const theme = cardThemes[index % cardThemes.length];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 25,
        rotateX: 8,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        rotateX: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -7,
        rotateX: 2,
        rotateY: -1.5,
        scale: 1.015,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      style={{
        transformPerspective: 1200,
      }}
      className={`
        group
        relative
        isolate
        overflow-hidden
        rounded-[24px]
        border
        ${theme.border}
        bg-gradient-to-br
        ${theme.bg}
        p-4
        shadow-[0_18px_45px_rgba(3,18,35,0.14)]
        transition-all
        duration-500
        hover:shadow-[0_25px_65px_rgba(3,18,35,0.24)]
        sm:p-5
      `}
    >
      {/* =====================================================
          TOP GLASS SHINE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
          opacity-70
        "
      />

      {/* =====================================================
          AMBIENT GLOW
      ====================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          -right-14
          -top-14
          h-32
          w-32
          rounded-full
          ${theme.glow}
          opacity-10
          blur-[45px]
          transition-all
          duration-500
          group-hover:scale-[1.8]
          group-hover:opacity-25
        `}
      />

      <div
        className={`
          pointer-events-none
          absolute
          -bottom-20
          -left-20
          h-32
          w-32
          rounded-full
          ${theme.glow}
          opacity-[0.04]
          blur-[50px]
          transition-all
          duration-500
          group-hover:opacity-15
        `}
      />

      {/* =====================================================
          SUBTLE GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          bg-[size:22px_22px]
          opacity-[0.035]
        "
      />

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}

      <div className="relative flex gap-4">
        {/* ===================================================
            ICON
        ==================================================== */}

        <motion.div
          whileHover={{
            rotate: 5,
            scale: 1.08,
          }}
          transition={{
            duration: 0.25,
          }}
          className={`
            relative
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-[14px]
            ${theme.iconBg}
            ${theme.iconColor}
            border
            border-white/10
            shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]
          `}
        >
          <Icon
            size={18}
            strokeWidth={2}
          />

          <div
            className={`
              pointer-events-none
              absolute
              inset-0
              rounded-[14px]
              ${theme.glow}
              opacity-0
              blur-xl
              transition-opacity
              duration-300
              group-hover:opacity-30
            `}
          />
        </motion.div>

        {/* ===================================================
            CONTENT
        ==================================================== */}

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span
                className={`
                  text-[9px]
                  font-bold
                  tracking-[0.2em]
                  ${theme.numberColor}
                  opacity-80
                `}
              >
                {number}
              </span>

              <h3
                className="
                  mt-0.5
                  text-[15px]
                  font-semibold
                  tracking-[-0.02em]
                  text-white
                  sm:text-[17px]
                "
              >
                {title}
              </h3>
            </div>

            {/* Check */}

            <motion.div
              whileHover={{
                scale: 1.15,
                rotate: 8,
              }}
              className={`
                mt-1
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                rounded-full
                ${theme.checkBg}
                ${theme.checkColor}
                border
                border-white/10
                transition-all
                duration-300
              `}
            >
              <Check
                size={12}
                strokeWidth={2.8}
              />
            </motion.div>
          </div>

          <p
            className="
              mt-1.5
              max-w-[560px]
              text-[12px]
              leading-5
              text-white/55
              transition-colors
              duration-300
              group-hover:text-white/70
              sm:text-[13px]
              sm:leading-5.5
            "
          >
            {description}
          </p>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-5
          right-5
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          transition-all
          duration-500
          group-hover:via-white/30
        "
      />
    </motion.div>
  );
}