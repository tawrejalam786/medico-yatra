"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  Globe2,
  LockKeyhole,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

const trustPanelImage = "/images/contact/contact-form-student.png";

const courseOptions = [
  "MBBS",
  "Dentistry (BDS)",
  "Nursing",
  "Pharmacy",
  "Physiotherapy",
  "Respiratory Therapy",
  "Medical Lab Technology",
  "Other allied health",
  "Not sure — help me decide",
];

const neetOptions = [
  "In Class 12",
  "Class 12 passed",
  "NEET qualified",
  "NEET attempting",
  "Not applicable",
];

const initialForm = {
  fullName: "",
  mobile: "",
  email: "",
  city: "",
  course: "",
  country: "",
  status: "",
  message: "",
  consent: false,
};

/* =========================================================
   INPUT FIELD
========================================================= */

const InputField = ({
  label,
  required = false,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon: Icon,
}) => {
  return (
    <div className="group">
      <label
        htmlFor={name}
        className="mb-2.5 block text-[13px] font-bold text-[#173B5B]"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#0263CC]">*</span>
        )}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={18}
            strokeWidth={1.8}
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              z-10
              -translate-y-1/2
              text-slate-400
              transition-colors
              duration-300
              group-focus-within:text-[#0263CC]
            "
          />
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            h-[54px]
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-slate-50/70
            ${Icon ? "pl-12" : "pl-4"}
            pr-4
            text-sm
            font-medium
            text-[#092B4C]
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-400
            hover:border-slate-300
            focus:border-[#0263CC]/40
            focus:bg-white
            focus:ring-4
            focus:ring-[#0263CC]/8
          `}
        />
      </div>
    </div>
  );
};

/* =========================================================
   SELECT FIELD
========================================================= */

const SelectField = ({
  label,
  required = false,
  name,
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <div className="group">
      <label
        htmlFor={name}
        className="mb-2.5 block text-[13px] font-bold text-[#173B5B]"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#0263CC]">*</span>
        )}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`
            h-[54px]
            w-full
            appearance-none
            rounded-2xl
            border
            border-slate-200
            bg-slate-50/70
            px-4
            pr-11
            text-sm
            font-medium
            outline-none
            transition-all
            duration-300
            focus:border-[#0263CC]/40
            focus:bg-white
            focus:ring-4
            focus:ring-[#0263CC]/8
            ${value ? "text-[#092B4C]" : "text-slate-400"}
          `}
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

        <ChevronDown
          size={18}
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />
      </div>
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const CounsellingForm = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend / Zoho CRM integration can be added here.
    setSubmitted(true);
  };

  return (
    <section
      id="counselling-form"
      className="
        relative
        overflow-hidden
        bg-[#F7FAFD]
        py-10
        sm:py-12
        lg:py-14
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-180px]
            top-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#4DA5EC]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[-180px]
            bottom-[-100px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#02A7BB]/8
            blur-[120px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(90deg, #0263CC 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* =======================================================
            SECTION HEADING
        ======================================================= */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-10 max-w-3xl sm:mb-12"
        >
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#0263CC]/10
              bg-white/80
              px-3.5
              py-2
              shadow-sm
              backdrop-blur-md
            "
          >
            <Sparkles
              size={14}
              className="text-[#0263CC]"
            />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#0263CC]
              "
            >
              Free & no-obligation
            </span>
          </div>

          <h2
            className="
              text-3xl
              font-extrabold
              tracking-[-0.035em]
              text-[#092B4C]
              sm:text-4xl
              lg:text-[48px]
              lg:leading-[1.1]
            "
          >
            Book your{" "}
            <span className="text-[#0263CC]">
              free counselling
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
              sm:leading-8
            "
          >
            Share a few details and a Medico Yatra counsellor
            will reach out with a personalised, no-obligation
            plan.
          </p>
        </motion.div>

        {/* =======================================================
            MAIN GRID
        ======================================================= */}

        <div
          className="
            grid
            items-stretch
            gap-6
            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-7
            xl:gap-8
          "
        >
          {/* =====================================================
              LEFT TRUST PANEL
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              min-h-[680px]
              overflow-hidden
              rounded-[28px]
              bg-[#082F52]
              p-6
              text-white
              shadow-[0_25px_70px_rgba(8,47,82,0.18)]
              sm:p-8
              lg:min-h-[720px]
              lg:p-9
            "
          >
            {/* =================================================
                IMAGE
            ================================================= */}

            {/* =================================================
    STUDENT IMAGE — BOTTOM RIGHT
================================================= */}
<div
  className="
    pointer-events-none
    absolute
    bottom-0
    right-0
    z-[1]
    h-[58%]
    w-[92%]
    sm:h-[62%]
    sm:w-[90%]
    lg:h-[60%]
    lg:w-[94%]
  "
>
  <Image
    src={trustPanelImage}
    alt="Medical student counselling"
    fill
    priority
    sizes="
      (max-width: 640px) 92vw,
      (max-width: 1024px) 45vw,
      450px
    "
    className="
      object-contain
      object-right-bottom
      opacity-80
    "
  />

  {/* Bottom fade — image ko panel ke andar naturally blend karega */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-[#082F52]
      via-[#082F52]/55
      to-transparent
    "
  />

  {/* Left fade — text ke peeche image visible nahi hogi */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#082F52]/95
      via-[#082F52]/35
      to-transparent
    "
  />

  {/* Soft blue tint */}
  <div
    className="
      absolute
      inset-0
      bg-[#0263CC]/10
      mix-blend-multiply
    "
  />
</div>

            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                z-[1]
                h-64
                w-64
                rounded-full
                bg-[#4DA5EC]/20
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-28
                -left-20
                z-[1]
                h-72
                w-72
                rounded-full
                bg-[#02A7BB]/15
                blur-3xl
              "
            />

            {/* =================================================
                DECORATIVE LINE
            ================================================= */}

            <div
              className="
                absolute
                right-8
                top-8
                z-[2]
                hidden
                opacity-30
                sm:block
              "
            >
              <svg
                width="100"
                height="80"
                viewBox="0 0 100 80"
                fill="none"
              >
                <path
                  d="M5 70C25 15 55 5 95 15"
                  stroke="#8EDFFF"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                />

                <circle
                  cx="95"
                  cy="15"
                  r="4"
                  fill="#8EDFFF"
                />
              </svg>
            </div>

            {/* =================================================
                TRUST CONTENT
            ================================================= */}

            <div className="relative z-10">
              {/* Icon */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/10
                  text-[#8EDFFF]
                  backdrop-blur-md
                "
              >
                <MessageCircle size={25} />
              </div>

              <h3
                className="
                  mt-7
                  max-w-sm
                  text-2xl
                  font-extrabold
                  tracking-tight
                  sm:text-[30px]
                  sm:leading-[1.2]
                "
              >
                Let's understand what you actually need.
              </h3>

              <p
                className="
                  mt-4
                  max-w-md
                  text-sm
                  leading-6
                  text-white/65
                  sm:text-[15px]
                  sm:leading-7
                "
              >
                You don't need to have everything figured out
                before reaching out. Tell us where you are,
                what you're considering, and what you're unsure
                about.
              </p>

              {/* =================================================
                  TRUST POINTS
              ================================================= */}

              <div className="mt-8 space-y-4">
                {/* Point 1 */}

                <div className="flex items-start gap-3">
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/10
                      text-[#8EDFFF]
                    "
                  >
                    <Check
                      size={15}
                      strokeWidth={2.5}
                    />
                  </span>

                  <div>
                    <p className="text-sm font-bold">
                      Personalised guidance
                    </p>

                    <p className="mt-0.5 text-xs leading-5 text-white/50">
                      Advice based on your goals and situation.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}

                <div className="flex items-start gap-3">
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/10
                      text-[#8EDFFF]
                    "
                  >
                    <Check
                      size={15}
                      strokeWidth={2.5}
                    />
                  </span>

                  <div>
                    <p className="text-sm font-bold">
                      No obligation
                    </p>

                    <p className="mt-0.5 text-xs leading-5 text-white/50">
                      Get clarity before making any decision.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}

                <div className="flex items-start gap-3">
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/10
                      text-[#8EDFFF]
                    "
                  >
                    <Check
                      size={15}
                      strokeWidth={2.5}
                    />
                  </span>

                  <div>
                    <p className="text-sm font-bold">
                      No pressure
                    </p>

                    <p className="mt-0.5 text-xs leading-5 text-white/50">
                      We're here to guide, not push you.
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  BOTTOM REASSURANCE
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  mt-9
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.06]
                  p-4
                  backdrop-blur-md
                "
              >
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={19}
                    className="
                      mt-0.5
                      shrink-0
                      text-[#8EDFFF]
                    "
                  />

                  <p className="text-xs leading-5 text-white/60">
                    Your details are used only to understand and
                    respond to your enquiry.
                  </p>
                </div>
              </div>

              {/* =================================================
                  QUICK CONTACT
              ================================================= */}

              <div className="relative z-10 mt-7 grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="
                    group
                    flex
                    items-center
                    gap-2.5
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-3
                    py-3
                    backdrop-blur-md
                    transition-all
                    hover:border-white/20
                    hover:bg-white/10
                  "
                >
                  <MessageCircle
                    size={17}
                    className="text-[#8EDFFF]"
                  />

                  <span className="text-xs font-bold">
                    WhatsApp
                  </span>
                </a>

                <a
                  href="tel:+9198974444550"
                  className="
                    group
                    flex
                    items-center
                    gap-2.5
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-3
                    py-3
                    backdrop-blur-md
                    transition-all
                    hover:border-white/20
                    hover:bg-white/10
                  "
                >
                  <Phone
                    size={17}
                    className="text-[#8EDFFF]"
                  />

                  <span className="text-xs font-bold">
                    Call us
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              FORM CARD
          ===================================================== */}

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
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              rounded-[28px]
              border
              border-slate-200/80
              bg-white
              p-5
              shadow-[0_20px_60px_rgba(15,23,42,0.07)]
              sm:p-7
              lg:p-9
            "
            id="contact-form"
          >
            {/* Top accent */}

            <div
              className="
                absolute
                left-7
                right-7
                top-0
                h-[3px]
                rounded-b-full
                bg-gradient-to-r
                from-[#0263CC]
                via-[#4DA5EC]
                to-[#02A7BB]
                sm:left-9
                sm:right-9
              "
            />

            {/* =================================================
                FORM HEADING
            ================================================= */}

            <div
              className="
                mb-7
                flex
                items-start
                justify-between
                gap-4
              "
            >
              <div>
                <div className="flex items-center gap-2">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#0263CC]/8
                      text-[#0263CC]
                    "
                  >
                    <FileText size={17} />
                  </div>

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#0263CC]
                    "
                  >
                    Quick enquiry
                  </span>
                </div>

                <h3
                  className="
                    mt-3
                    text-xl
                    font-extrabold
                    tracking-tight
                    text-[#092B4C]
                    sm:text-2xl
                  "
                >
                  Tell us a little about yourself
                </h3>
              </div>

              <div
                className="
                  hidden
                  items-center
                  gap-1.5
                  rounded-full
                  bg-slate-50
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-400
                  sm:flex
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#02A7BB]" />
                Secure enquiry
              </div>
            </div>

            {/* =================================================
                SUCCESS STATE
            ================================================= */}

            {submitted ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="
                  flex
                  min-h-[500px]
                  flex-col
                  items-center
                  justify-center
                  px-5
                  text-center
                "
              >
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-[#E9FAF7]
                    text-[#02A7BB]
                  "
                >
                  <Check
                    size={38}
                    strokeWidth={2.2}
                  />
                </div>

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-extrabold
                    text-[#092B4C]
                  "
                >
                  Thank you for reaching out.
                </h3>

                <p
                  className="
                    mt-3
                    max-w-md
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  We've received your enquiry. A Medico Yatra
                  counsellor will get in touch with you.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initialForm);
                  }}
                  className="
                    mt-7
                    rounded-full
                    border
                    border-slate-200
                    px-5
                    py-2.5
                    text-sm
                    font-bold
                    text-[#0263CC]
                    transition
                    hover:bg-slate-50
                  "
                >
                  Submit another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* =================================================
                    ROW 1
                ================================================= */}

                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    label="Full name"
                    required
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    icon={UserRound}
                  />

                  <InputField
                    label="Mobile / WhatsApp number"
                    required
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    type="tel"
                    icon={Phone}
                  />
                </div>

                {/* =================================================
                    ROW 2
                ================================================= */}

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <InputField
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    type="email"
                    icon={FileText}
                  />

                  <InputField
                    label="City"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    icon={Globe2}
                  />
                </div>

                {/* =================================================
                    ROW 3
                ================================================= */}

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <SelectField
                    label="Course of interest"
                    required
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    options={courseOptions}
                    placeholder="Select a course"
                  />

                  <InputField
                    label="Preferred country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="e.g. Russia, Georgia..."
                    icon={Globe2}
                  />
                </div>

                {/* =================================================
                    ROW 4
                ================================================= */}

                <div className="mt-5">
                  <SelectField
                    label="NEET / Class 12 status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    options={neetOptions}
                    placeholder="Select your current status"
                  />
                </div>

                {/* =================================================
                    MESSAGE
                ================================================= */}

                <div className="group mt-5">
                  <label
                    htmlFor="message"
                    className="
                      mb-2.5
                      block
                      text-[13px]
                      font-bold
                      text-[#173B5B]
                    "
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what you'd like help with..."
                    className="
                      min-h-[120px]
                      w-full
                      resize-none
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50/70
                      px-4
                      py-3.5
                      text-sm
                      font-medium
                      leading-6
                      text-[#092B4C]
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-slate-400
                      hover:border-slate-300
                      focus:border-[#0263CC]/40
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#0263CC]/8
                    "
                  />
                </div>

                {/* =================================================
                    CONSENT
                ================================================= */}

                <div className="mt-5">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      required
                      className="
                        mt-0.5
                        h-[18px]
                        w-[18px]
                        shrink-0
                        cursor-pointer
                        appearance-none
                        rounded-md
                        border
                        border-slate-300
                        bg-white
                        transition-all
                        checked:border-[#0263CC]
                        checked:bg-[#0263CC]
                        focus:ring-4
                        focus:ring-[#0263CC]/10
                      "
                    />

                    <span className="text-xs leading-5 text-slate-500">
                      I agree to be contacted by Medico Yatra
                      about my enquiry.
                    </span>
                  </label>
                </div>

                {/* =================================================
                    SUBMIT
                ================================================= */}

                <div className="mt-6">
                  <button
                    type="submit"
                    className="
                      group
                      flex
                      min-h-[56px]
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      bg-[#0263CC]
                      px-6
                      text-sm
                      font-extrabold
                      text-white
                      shadow-[0_14px_30px_rgba(2,99,204,0.22)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#0759AD]
                      hover:shadow-[0_18px_40px_rgba(2,99,204,0.28)]
                      active:translate-y-0
                      sm:text-[15px]
                    "
                  >
                    Get My Free Counselling

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-white/15
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      <ArrowRight size={16} />
                    </span>
                  </button>
                </div>

                {/* =================================================
                    PRIVACY
                ================================================= */}

                <div
                  className="
                    mt-4
                    flex
                    items-start
                    justify-center
                    gap-2
                    text-center
                  "
                >
                  <LockKeyhole
                    size={14}
                    className="
                      mt-0.5
                      shrink-0
                      text-slate-400
                    "
                  />

                  <p
                    className="
                      max-w-lg
                      text-[11px]
                      leading-5
                      text-slate-400
                      sm:text-xs
                    "
                  >
                    Your details are used only to contact you
                    about your enquiry. We don't spam or sell
                    your data.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CounsellingForm;