"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

const contactOptions = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    title: "Fastest replies",
    description:
      "Message us anytime and start a conversation with a counsellor.",
    action: "Chat on WhatsApp",
    href: "https://wa.me/917838195948",
    icon: MessageCircle,

    // Full card color
    cardBg: "bg-[#E9FAF7]",
    cardHover: "hover:bg-[#DDF7F2]",
    border: "border-[#BFEDE4]",
    iconBg: "bg-[#02A7BB]/12",
    iconColor: "text-[#02A7BB]",
    accent: "#02A7BB",

    badge: "Recommended",
  },
  {
    id: "call",
    label: "Call us",
    title: "Speak directly",
    description:
      "Talk to a counsellor directly about your questions and goals.",
    action: "Call Now",
    href: "tel:+91 9897444550",
    icon: Phone,

    // Full card color
    cardBg: "bg-[#EDF5FF]",
    cardHover: "hover:bg-[#E3F0FF]",
    border: "border-[#C9E1FA]",
    iconBg: "bg-[#0263CC]/10",
    iconColor: "text-[#0263CC]",
    accent: "#0263CC",
  },
  {
    id: "email",
    label: "Email",
    title: "Detailed queries",
    description:
      "For detailed questions, documents and information.",
    action: "Email Us",
    href: "mailto:hello@medicoyatra.com",
    icon: Mail,

    // Full card color
    cardBg: "bg-[#F3F0FF]",
    cardHover: "hover:bg-[#ECE8FF]",
    border: "border-[#DDD5FF]",
    iconBg: "bg-[#7057C9]/10",
    iconColor: "text-[#7057C9]",
    accent: "#7057C9",
  },
];

const QuickContactOptions = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-10 lg:py-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[15%] h-[350px] w-[350px] rounded-full bg-[#4DA5EC]/8 blur-[100px]" />

        <div className="absolute bottom-[-100px] right-[-180px] h-[400px] w-[400px] rounded-full bg-[#02A7BB]/6 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8" id="quick-contact">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0263CC]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0263CC] sm:text-sm">
              We're easy to reach
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#02A7BB]" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-[#092B4C] sm:text-4xl lg:text-[46px] lg:leading-[1.1]">
            Choose what works{" "}
            <span className="text-[#0263CC]">for you.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Have a quick question or ready to talk? Pick the channel that's
            easiest for you.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;

            return (
              <motion.a
                key={option.id}
                href={option.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className="group relative block"
              >
                {/* Glow */}
                <div
                  className="absolute -inset-1 rounded-[30px] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40"
                  style={{
                    backgroundColor: option.accent,
                  }}
                />

                {/* Main card */}
                <div
                  className={`
                    relative
                    h-full
                    min-h-[320px]
                    overflow-hidden
                    rounded-[28px]
                    border
                    ${option.border}
                    ${option.cardBg}
                    ${option.cardHover}
                    p-6
                    shadow-[0_12px_35px_rgba(15,23,42,0.06)]
                    transition-all
                    duration-500
                    group-hover:shadow-[0_25px_55px_rgba(15,23,42,0.13)]
                    sm:p-7
                    lg:p-8
                  `}
                >
                  {/* Large decorative circle */}
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-sm transition-all duration-700 group-hover:scale-125"
                    style={{
                      backgroundColor: `${option.accent}12`,
                    }}
                  />

                  {/* Small decorative circle */}
                  <div
                    className="pointer-events-none absolute bottom-[-50px] right-[-30px] h-32 w-32 rounded-full opacity-30 blur-2xl transition-all duration-700 group-hover:scale-150"
                    style={{
                      backgroundColor: `${option.accent}18`,
                    }}
                  />

                  {/* Recommended badge */}
                  {option.badge && (
                    <div
                      className="absolute right-5 top-5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider sm:right-6 sm:top-6"
                      style={{
                        backgroundColor: `${option.accent}15`,
                        color: option.accent,
                      }}
                    >
                      {option.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`
                      relative
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      ${option.iconBg}
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-[-4deg]
                    `}
                  >
                    <Icon
                      size={27}
                      strokeWidth={2}
                      className={option.iconColor}
                    />

                    {/* WhatsApp online dot */}
                    {option.id === "whatsapp" && (
                      <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-[#E9FAF7] bg-[#02A7BB]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500/80">
                      {option.label}
                    </p>

                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#092B4C]">
                      {option.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
                      {option.description}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="relative mt-7 flex items-center justify-between border-t border-black/5 pt-5">
                    <span
                      className="text-sm font-bold"
                      style={{
                        color: option.accent,
                      }}
                    >
                      {option.action}
                    </span>

                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-slate-500 shadow-sm transition-all duration-300 group-hover:text-black"
                      style={{
                        // hover effect through inline variable
                        ["--accent"]: option.accent,
                      }}
                    >
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>

                  {/* Bottom accent */}
                  <span
                    className="absolute bottom-0 left-0 h-1 w-0 rounded-r-full transition-all duration-500 group-hover:w-full"
                    style={{
                      backgroundColor: option.accent,
                    }}
                  />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex justify-center sm:mt-10"
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-4 py-2.5 text-center text-xs font-medium text-slate-500 backdrop-blur-sm sm:px-5 sm:text-sm">
            <ShieldCheck size={16} className="shrink-0 text-[#0263CC]" />

            <span>
              Your first conversation is simply a conversation — no pressure.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickContactOptions;