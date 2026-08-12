"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe2,
  MapPin,
  MessageCircle,
  Route,
  ShieldCheck,
  Sparkles,
  UserRound,
  WalletCards,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    icon: Globe2,
    title: "Suitable Countries",
    description: "Shortlisted around your profile and preferences.",
  },
  {
    icon: WalletCards,
    title: "Indicative Budget",
    description: "Understand the expected education cost range.",
  },
  {
    icon: Route,
    title: "Licensing Pathway",
    description: "Get clarity on the journey after graduation.",
  },
];

const countryOptions = [
  "Russia",
  "Kazakhstan",
  "Georgia",
  "Uzbekistan",
  "Kyrgyzstan",
  "Philippines",
  "Bangladesh",
  "Other / Not Sure",
];

export default function MBBSLeadCapture() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    classStatus: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your API / CRM here.
    console.log("Roadmap enquiry:", formData);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#F5F9FF] py-14 sm:py-16 lg:py-20">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(77,165,236,0.12),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(2,167,187,0.10),transparent_30%)]" />

        {/* Animated glow */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#0263CC]/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#02A7BB]/10 blur-3xl"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#0263CC 1px, transparent 1px),
              linear-gradient(90deg, #0263CC 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />

        {/* Animated route SVG */}
        <svg
          className="absolute left-[4%] top-[8%] hidden h-[300px] w-[420px] text-[#0263CC]/10 lg:block"
          viewBox="0 0 420 300"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M15 245 C90 220 75 120 160 145 C240 170 225 55 400 35"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="8 10"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="160"
            cy="145"
            r="5"
            fill="currentColor"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          />
        </svg>

        {/* Decorative dots */}
        <div className="absolute right-[8%] top-[18%] hidden h-2 w-2 rounded-full bg-[#0263CC]/20 lg:block" />
        <div className="absolute right-[12%] top-[22%] hidden h-3 w-3 rounded-full bg-[#02A7BB]/20 lg:block" />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            TOP LABEL
        ====================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.55,
          }}
          className="mb-7 text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#0263CC]/10 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[#0263CC]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0263CC] sm:text-xs">
              Free Personalised Guidance
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN CARD
        ====================================================== */}

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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative overflow-hidden rounded-[28px] border border-[#0263CC]/10 bg-white shadow-[0_25px_80px_rgba(16,66,120,0.10)]"
        >
          {/* top gradient */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0263CC] via-[#4DA5EC] to-[#02A7BB]" />

          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="relative overflow-hidden bg-gradient-to-br from-[#F2F8FF] via-[#F8FBFF] to-[#EEF9FA] p-6 sm:p-8 lg:p-10 xl:p-12">
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#0263CC]/10" />

              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#0263CC]/10" />

              <div className="relative">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0263CC]">
                  Your MBBS Abroad Roadmap
                </span>

                <h2 className="mt-3 max-w-[520px] text-[28px] font-extrabold leading-[1.12] tracking-[-1px] text-[#071A49] sm:text-[34px] lg:text-[38px]">
                  Get Your Free
                  <span className="block bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
                    MBBS Abroad Roadmap
                  </span>
                </h2>

                <p className="mt-4 max-w-[530px] text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                  Tell us a little about yourself and a Medico Yatra counsellor
                  will share a personalised, no-obligation roadmap — including
                  suitable countries, an indicative budget range, and your
                  licensing pathway.
                </p>

                {/* =================================================
                    BENEFITS
                ================================================== */}

                <div className="mt-7 space-y-3">
                  {benefits.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.08,
                        }}
                        className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/65 p-3 shadow-sm backdrop-blur"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#0263CC]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-xs font-bold text-[#071A49] sm:text-sm">
                            {item.title}
                          </h3>

                          <p className="mt-0.5 text-[10px] leading-4 text-slate-500 sm:text-xs">
                            {item.description}
                          </p>
                        </div>

                        <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-[#02A7BB]" />
                      </motion.div>
                    );
                  })}
                </div>

                {/* Trust */}
                <div className="mt-7 flex items-center gap-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0263CC] shadow-sm">
                    <ShieldCheck className="h-4 w-4" />
                  </div>

                  <p className="text-[10px] leading-4 text-slate-500 sm:text-xs">
                    No obligation. No pressure. Just a clear starting point
                    for your journey.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT FORM
            ================================================== */}

            <div className="p-5 sm:p-8 lg:p-10 xl:p-12">
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF3FF] text-[#0263CC]">
                    <UserRound className="h-4.5 w-4.5" />
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-[#071A49] sm:text-lg">
                      Tell Us About Yourself
                    </h3>

                    <p className="text-[10px] text-slate-500 sm:text-xs">
                      It only takes a minute.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Mobile */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-[11px] font-bold text-[#132653]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-xs text-[#071A49] outline-none transition placeholder:text-slate-400 focus:border-[#0263CC] focus:ring-4 focus:ring-[#0263CC]/5 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mobile"
                      className="mb-1.5 flex items-center gap-1 text-[11px] font-bold text-[#132653]"
                    >
                      Mobile
                      <MessageCircle className="h-3 w-3 text-[#02A7BB]" />
                    </label>

                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      inputMode="numeric"
                      placeholder="WhatsApp number"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-xs text-[#071A49] outline-none transition placeholder:text-slate-400 focus:border-[#0263CC] focus:ring-4 focus:ring-[#0263CC]/5 sm:text-sm"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label
                    htmlFor="city"
                    className="mb-1.5 block text-[11px] font-bold text-[#132653]"
                  >
                    City
                  </label>

                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="Enter your city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3.5 text-xs text-[#071A49] outline-none transition placeholder:text-slate-400 focus:border-[#0263CC] focus:ring-4 focus:ring-[#0263CC]/5 sm:text-sm"
                    />
                  </div>
                </div>

                {/* Class / NEET */}
                <div>
                  <label
                    htmlFor="classStatus"
                    className="mb-1.5 block text-[11px] font-bold text-[#132653]"
                  >
                    Class 12 / NEET Status
                  </label>

                  <div className="relative">
                    <GraduationCap className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <select
                      id="classStatus"
                      name="classStatus"
                      value={formData.classStatus}
                      onChange={handleChange}
                      required
                      className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-10 pr-10 text-xs text-[#071A49] outline-none transition focus:border-[#0263CC] focus:ring-4 focus:ring-[#0263CC]/5 sm:text-sm"
                    >
                      <option value="">Select your status</option>
                      <option value="class-12-studying">
                        Class 12 - Currently Studying
                      </option>
                      <option value="class-12-completed">
                        Class 12 - Completed
                      </option>
                      <option value="neet-preparing">
                        Preparing for NEET
                      </option>
                      <option value="neet-qualified">
                        NEET Qualified
                      </option>
                      <option value="neet-attempted">
                        NEET Attempted
                      </option>
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                {/* Preferred country */}
                <div>
                  <label
                    htmlFor="country"
                    className="mb-1.5 block text-[11px] font-bold text-[#132653]"
                  >
                    Preferred Country
                    <span className="ml-1 font-normal text-slate-400">
                      (Optional)
                    </span>
                  </label>

                  <div className="relative">
                    <Globe2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white pl-10 pr-10 text-xs text-[#071A49] outline-none transition focus:border-[#0263CC] focus:ring-4 focus:ring-[#0263CC]/5 sm:text-sm"
                    >
                      <option value="">Not sure yet</option>

                      {countryOptions.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>

                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="group mt-1 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#0263CC] px-5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(2,99,204,0.22)] transition-all duration-300 hover:bg-[#0759B8]"
                >
                  Get My Free Roadmap

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>

                {/* Privacy */}
                <div className="flex items-start justify-center gap-1.5 px-2 pt-1 text-center">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#02A7BB]" />

                  <p className="text-[9px] leading-4 text-slate-400 sm:text-[10px]">
                    Your details are used only to contact you about your
                    enquiry. No spam.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM TRUST POINTS
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#0263CC]" />
            <span className="text-[10px] font-medium text-slate-500">
              Personalised guidance
            </span>
          </div>

          <div className="hidden h-3 w-px bg-slate-200 sm:block" />

          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#0263CC]" />
            <span className="text-[10px] font-medium text-slate-500">
              No obligation
            </span>
          </div>

          <div className="hidden h-3 w-px bg-slate-200 sm:block" />

          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#02A7BB]" />
            <span className="text-[10px] font-medium text-slate-500">
              Expert counsellors
            </span>
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM WAVE
      ====================================================== */}

      <svg
        className="pointer-events-none absolute bottom-[-1px] left-0 w-full"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 38C180 65 330 65 510 42C700 17 850 14 1010 34C1180 56 1300 60 1440 27V70H0V38Z"
          fill="white"
        />
      </svg>
    </section>
  );
}