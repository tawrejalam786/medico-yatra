"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Globe2,
  Headphones,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserRoundCheck,
} from "lucide-react";

const TRUST_POINTS = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Experienced Professionals",
    description:
      "Years of expertise in medical education, admissions and overseas counselling.",
    gradient: "from-[#0263CC] to-[#4DA5EC]",
    soft: "bg-[#EEF6FF]",
  },
  {
    icon: UserRoundCheck,
    number: "02",
    title: "Personalized Approach",
    description:
      "Tailored guidance based on your academic goals, preferences and career plans.",
    gradient: "from-[#0263CC] to-[#02A7BB]",
    soft: "bg-[#EEFBFC]",
  },
  {
    icon: Headphones,
    number: "03",
    title: "End-to-End Support",
    description:
      "From university shortlisting to applications and visa support, we're with you.",
    gradient: "from-[#4D7CFE] to-[#7C8CFF]",
    soft: "bg-[#F1F3FF]",
  },
  {
    icon: Globe2,
    number: "04",
    title: "Global Knowledge",
    description:
      "Deep understanding of universities, countries and medical education worldwide.",
    gradient: "from-[#02A7BB] to-[#4DD7D5]",
    soft: "bg-[#EEFCFC]",
  },
  {
    icon: Trophy,
    number: "05",
    title: "Student Success",
    description:
      "Focused on meaningful outcomes and helping students move confidently toward their goals.",
    gradient: "from-[#F59E0B] to-[#FBBF24]",
    soft: "bg-[#FFF8EA]",
  },
];

export default function WhyTrustCounsellors() {
  return (
    <section className="relative overflow-hidden bg-[#F9FCFF] py-5 sm:py-20 lg:py-7">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Top glow */}
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#0263CC]/[0.045] blur-[100px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-180px] right-[-100px] h-[350px] w-[350px] rounded-full bg-[#02A7BB]/[0.04] blur-[100px]" />

        {/* Dot pattern */}
        <div
          className="absolute left-0 top-0 h-[280px] w-[300px] opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0263CC 1px, transparent 1px)",
            backgroundSize: "13px 13px",
            maskImage:
              "linear-gradient(to bottom right, black, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to bottom right, black, transparent 75%)",
          }}
        />

        {/* Premium SVG decoration */}
        <svg
          className="absolute right-[-70px] top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 opacity-[0.07] sm:block"
          viewBox="0 0 420 420"
          fill="none"
        >
          <motion.circle
            cx="210"
            cy="210"
            r="175"
            stroke="#0263CC"
            strokeWidth="1"
            strokeDasharray="5 8"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "center",
            }}
          />

          <circle
            cx="210"
            cy="210"
            r="125"
            stroke="#02A7BB"
            strokeWidth="1"
          />

          <circle
            cx="210"
            cy="210"
            r="75"
            stroke="#0263CC"
            strokeWidth="1"
            strokeDasharray="3 6"
          />

          <circle
            cx="210"
            cy="210"
            r="5"
            fill="#0263CC"
          />

          <path
            d="M210 35V385M35 210H385"
            stroke="#0263CC"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =================================================
            HEADER
        ================================================== */}

        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">

          {/* Eyebrow */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white px-3 py-1.5 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#0263CC]" />

            <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#0263CC] sm:text-xs">
              Why Choose Us
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 18,
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
              delay: 0.05,
            }}
            className="text-3xl font-black tracking-[-0.03em] text-[#0B1B3A] sm:text-4xl lg:text-[44px]"
          >
            Why Students{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Trust Our Counsellors
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
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
              delay: 0.12,
            }}
            className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7"
          >
            More than just guidance — our counsellors bring experience,
            personal attention and global knowledge to every student journey.
          </motion.p>

          {/* Divider */}

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 52,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-[#0263CC] to-[#02A7BB]"
          />
        </div>

        {/* =================================================
            TRUST CARDS
        ================================================== */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3 xl:gap-4">

          {TRUST_POINTS.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
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
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white bg-white p-5 shadow-[0_8px_30px_rgba(15,50,90,.055)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0263CC]/10 hover:shadow-[0_18px_45px_rgba(2,99,204,.10)] sm:p-6 lg:p-5 xl:p-6">

                  {/* Hover glow */}

                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0263CC]/[0.035] blur-2xl transition-all duration-500 group-hover:bg-[#0263CC]/[0.08]" />

                  {/* Number */}

                  <span className="absolute right-4 top-4 text-[10px] font-black tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-[#0263CC]/20">
                    {item.number}
                  </span>

                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.06,
                      rotate: 3,
                    }}
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${item.soft}`}
                  >
                    {/* Icon ring */}

                    <div
                      className={`absolute inset-1 rounded-xl border border-dashed bg-gradient-to-br ${item.gradient} opacity-10`}
                    />

                    <Icon
                      className="relative z-10 h-6 w-6 text-[#0263CC]"
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  {/* Content */}

                  <div className="mt-5">

                    <h3 className="max-w-[180px] text-base font-black leading-5 text-[#0B1B3A]">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-[11px] leading-[1.7] text-slate-500 sm:text-xs sm:leading-[1.65]">
                      {item.description}
                    </p>

                  </div>

                  {/* Bottom accent */}

                  <div
                    className={`mt-5 h-1 w-8 rounded-full bg-gradient-to-r ${item.gradient} opacity-70 transition-all duration-300 group-hover:w-14`}
                  />

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =================================================
            TRUST FOOTER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.35,
          }}
          className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-2 text-center sm:mt-10 sm:flex-row"
        >
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5">
            <BadgeCheck className="h-3.5 w-3.5 text-emerald-500" />

            <span className="text-[10px] font-bold text-emerald-700 sm:text-xs">
              Student-first counselling
            </span>
          </div>

          <span className="hidden text-xs text-slate-300 sm:block">
            •
          </span>

          <p className="text-[10px] font-medium text-slate-400 sm:text-xs">
            Honest guidance from admission to your medical career
          </p>
        </motion.div>

      </div>
    </section>
  );
}