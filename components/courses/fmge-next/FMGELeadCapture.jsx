"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  GraduationCap,
  LockKeyhole,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

const benefits = [
  {
    icon: FileText,
    text: "Current exam pattern",
  },
  {
    icon: BookOpen,
    text: "Subject weightage",
  },
  {
    icon: GraduationCap,
    text: "Year-wise roadmap",
  },
];

const countries = [
  "Russia",
  "Kazakhstan",
  "Georgia",
  "Philippines",
  "Uzbekistan",
  "Kyrgyzstan",
  "Bangladesh",
  "Other / Not Sure",
];

const studyYears = [
  "Not Yet Started",
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Final Year",
  "Internship",
  "Graduated",
];

const contactTimes = [
  "Morning — 9 AM to 12 PM",
  "Afternoon — 12 PM to 4 PM",
  "Evening — 4 PM to 7 PM",
  "Night — 7 PM to 9 PM",
];

function InputField({
  icon: Icon,
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-bold text-[#071A49]"
      >
        {label}
        {required && <span className="ml-1 text-[#0263CC]">*</span>}
      </label>

      <div className="group relative">
        <Icon
          size={17}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#0263CC]"
        />

        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="h-[50px] w-full rounded-xl border border-slate-200 bg-[#F9FBFE] pl-11 pr-4 text-sm text-[#071A49] outline-none transition-all placeholder:text-slate-400 focus:border-[#0263CC]/40 focus:bg-white focus:ring-4 focus:ring-[#0263CC]/5"
        />
      </div>
    </div>
  );
}

function SelectField({
  icon: Icon,
  label,
  name,
  options,
  placeholder,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-bold text-[#071A49]"
      >
        {label}
        <span className="ml-1 text-[#0263CC]">*</span>
      </label>

      <div className="group relative">
        <Icon
          size={17}
          className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#0263CC]"
        />

        <select
          id={name}
          name={name}
          required
          defaultValue=""
          className="h-[50px] w-full appearance-none rounded-xl border border-slate-200 bg-[#F9FBFE] pl-11 pr-10 text-sm text-[#071A49] outline-none transition-all focus:border-[#0263CC]/40 focus:bg-white focus:ring-4 focus:ring-[#0263CC]/5"
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <svg
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 5L7 9L11 5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function FMGELeadCapture() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your API / CRM here.
    console.log("FMGE guide form submitted");
  };

  return (
    <section
      id="fmge-guide"
      className="relative overflow-hidden bg-[#071A49] py-10 sm:py-14 lg:py-10"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glow */}
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#0263CC]/25 blur-[110px]" />

        <div className="absolute -bottom-40 -right-40 h-[460px] w-[460px] rounded-full bg-[#02A7BB]/20 blur-[120px]" />

        {/* Dot field */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Decorative circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-24 top-10 hidden h-72 w-72 rounded-full border border-white/10 lg:block"
        />

        <div className="absolute bottom-16 left-[8%] h-24 w-24 rounded-full border border-[#4DA5EC]/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= TOP HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 backdrop-blur-md">
            <Sparkles size={14} className="text-[#4DA5EC]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B9DDF8]">
              Free Preparation Resource
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12]">
            Get Your Free{" "}
            <span className="bg-gradient-to-r from-[#4DA5EC] to-[#02A7BB] bg-clip-text text-transparent">
              FMGE / NExT
            </span>{" "}
            Preparation Guide
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Receive a practical guide covering the current exam pattern,
            subject weightage, and a year-by-year preparation roadmap aligned
            to your MBBS-abroad timeline.
          </p>
        </motion.div>

        {/* ================= MAIN BLOCK ================= */}
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* ================= LEFT — GUIDE VISUAL ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl sm:p-7 lg:p-8"
          >
            {/* Decorative glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0263CC]/30 blur-3xl" />

            {/* Guide mockup */}
            <div className="relative mx-auto max-w-[430px]">
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-1 top-5 z-20 flex items-center gap-2 rounded-xl border border-white/10 bg-white px-3 py-2 shadow-2xl sm:-right-4"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EAF4FF]">
                  <ShieldCheck
                    size={15}
                    className="text-[#0263CC]"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    Guidance
                  </p>
                  <p className="text-[11px] font-bold text-[#071A49]">
                    Built for MBBS Abroad
                  </p>
                </div>
              </motion.div>

              {/* Document */}
              <div className="relative overflow-hidden rounded-[22px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
                {/* Document top */}
                <div className="relative overflow-hidden bg-gradient-to-br from-[#0263CC] to-[#02A7BB] px-6 pb-8 pt-7 sm:px-8 sm:pt-8">
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/10" />
                  <div className="absolute -bottom-20 left-20 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                        <BookOpen
                          size={20}
                          className="text-white"
                        />
                      </div>

                      <span className="rounded-full bg-white/15 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white">
                        Free Guide
                      </span>
                    </div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                      Medico Yatra
                    </p>

                    <h3 className="mt-2 max-w-[280px] text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                      FMGE / NExT
                      <br />
                      Preparation Guide
                    </h3>

                    <p className="mt-3 max-w-[300px] text-xs leading-5 text-white/75">
                      Your structured roadmap from MBBS Year 1 to licensing.
                    </p>
                  </div>
                </div>

                {/* Document content */}
                <div className="space-y-4 p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0263CC]">
                    Inside the guide
                  </p>

                  {benefits.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.15 + index * 0.1,
                        }}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EEF6FF]">
                          <Icon
                            size={16}
                            className="text-[#0263CC]"
                          />
                        </div>

                        <span className="text-sm font-semibold text-[#071A49]">
                          {item.text}
                        </span>

                        <CheckCircle2
                          size={15}
                          className="ml-auto shrink-0 text-[#16A05D]"
                        />
                      </motion.div>
                    );
                  })}

                  {/* Mini roadmap */}
                  <div className="mt-5 rounded-xl bg-[#F6F9FC] p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Preparation Journey
                      </span>

                      <span className="text-[10px] font-bold text-[#0263CC]">
                        Year 1 → Exam
                      </span>
                    </div>

                    <div className="relative h-1.5 overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "78%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.3,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[#0263CC] to-[#02A7BB]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom floating card */}
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto mt-5 flex max-w-[430px] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-3.5 backdrop-blur-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#02A7BB]/15">
                <MessageCircle
                  size={17}
                  className="text-[#4DA5EC]"
                />
              </div>

              <p className="text-xs leading-5 text-slate-300">
                Includes a{" "}
                <span className="font-bold text-white">
                  no-obligation consultation
                </span>{" "}
                with a Medico Yatra counsellor.
              </p>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT — FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[28px] bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-7 lg:p-9"
          >
            <div className="mb-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF4FF]">
                  <Send
                    size={18}
                    className="text-[#0263CC]"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0263CC]">
                    Get Your Copy
                  </p>

                  <h3 className="mt-0.5 text-lg font-extrabold text-[#071A49]">
                    Tell us about your journey
                  </h3>
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                Share a few details so we can make your preparation guidance
                more relevant to your current stage.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name + Mobile */}
              <div className="grid gap-5 sm:grid-cols-2">
                <InputField
                  icon={UserRound}
                  label="Full Name"
                  name="name"
                  placeholder="Enter your name"
                />

                <InputField
                  icon={Phone}
                  label="Mobile (WhatsApp)"
                  name="mobile"
                  type="tel"
                  placeholder="Enter mobile number"
                />
              </div>

              {/* Country */}
              <SelectField
                icon={Globe2}
                label="Current / Target MBBS Country"
                name="country"
                placeholder="Select country"
                options={countries}
              />

              {/* Year */}
              <SelectField
                icon={GraduationCap}
                label="Current Year of Study"
                name="studyYear"
                placeholder="Select your current stage"
                options={studyYears}
              />

              {/* Contact time */}
              <SelectField
                icon={Clock3}
                label="Preferred Contact Time"
                name="contactTime"
                placeholder="When should we contact you?"
                options={contactTimes}
              />

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-[54px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0263CC] to-[#02A7BB] px-5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(2,99,204,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(2,99,204,0.3)]"
              >
                Send Me the FMGE / NExT Preparation Guide

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Privacy */}
              <div className="flex items-start justify-center gap-2 pt-1">
                <LockKeyhole
                  size={13}
                  className="mt-0.5 shrink-0 text-slate-400"
                />

                <p className="text-center text-[10px] leading-4 text-slate-400">
                  Your details are used only to contact you about your enquiry.
                  No spam.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom trust */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center"
        >
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck size={14} className="text-[#4DA5EC]" />
            Privacy-first enquiry
          </div>

          <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <MessageCircle size={14} className="text-[#4DA5EC]" />
            WhatsApp-friendly
          </div>

          <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <CheckCircle2 size={14} className="text-[#4DA5EC]" />
            No obligation
          </div>
        </motion.div>
      </div>
    </section>
  );
}