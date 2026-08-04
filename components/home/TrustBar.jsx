"use client";

import { motion } from "framer-motion";

const TRUST_ITEMS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="#0263CC" strokeWidth="1.5"/>
        <path d="M8 14l4 4 8-8" stroke="#0263CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="5" fill="#d6e8fb" opacity="0.5"/>
      </svg>
    ),
    heading: "NMC-recognised universities",
    body: "Your degree has to count when you come home — this is one of the most important things families need to verify.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="#4DA5EC" strokeWidth="1.5"/>
        <path d="M9 10h10M9 14h7M9 18h9" stroke="#4DA5EC" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="7" cy="10" r="1.5" fill="#4DA5EC"/>
        <circle cx="7" cy="14" r="1.5" fill="#4DA5EC"/>
        <circle cx="7" cy="18" r="1.5" fill="#4DA5EC"/>
      </svg>
    ),
    heading: "Many healthcare careers — not just MBBS",
    body: "A low NEET score or a different interest doesn't mean fewer honest options. ",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="#02A7BB" strokeWidth="1.5"/>
        <path d="M14 7v7l4 3" stroke="#02A7BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="3" fill="#d6f4f7" opacity="0.8"/>
      </svg>
    ),
    heading: "Integrated FMGE / NExT & USMLE coaching",
    body: "Licensing preparation starts with your course, not years later. ",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="#0263CC" strokeWidth="1.5"/>
        <path d="M9 14c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="#0263CC" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M14 19v-5" stroke="#0263CC" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="20.5" r="1.5" fill="#0263CC"/>
      </svg>
    ),
    heading: "Honest, end-to-end guidance",
    body: "From counselling to licensing, we stay involved throughout the journey.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="#4DA5EC" strokeWidth="1.5"/>
        <circle cx="10" cy="12" r="2.5" stroke="#4DA5EC" strokeWidth="1.5"/>
        <circle cx="18" cy="12" r="2.5" stroke="#4DA5EC" strokeWidth="1.5"/>
        <path d="M6 20c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4" stroke="#4DA5EC" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    heading: "Parents are part of every conversation",
    body: "This is a family decision — we treat it like one. Parents are welcomed at every stage, from the first counselling call to pre-departure briefings. No one is left out.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TrustBar = () => {
  return (
  <section
    id="trust"
    aria-labelledby="trust-heading"
    className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-white py-20 lg:py-20"
  >
    {/* Background */}
    <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#0263CC]/10 blur-3xl" />
    <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#02A7BB]/10 blur-3xl" />

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-16 text-center">
        <span className="inline-flex rounded-full bg-[#0263CC]/10 px-4 py-2 text-sm font-semibold text-[#0263CC]">
          Why Choose Us
        </span>

        <h2 className="mt-5 text-4xl font-bold text-[#0F172A] md:text-5xl">
          Why Families Trust
          <br />
          <span className="text-blue-800">Medico Yatra</span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          We help students and parents make confident healthcare education
          decisions with transparent counselling, trusted universities and
          complete guidance from admission to career.
        </p>
      </div>

      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto"
        >
          {/* Student Image */}
          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            src="/images/young-doctor-getting-ready-work.jpg"
            alt="MBBS Student"
            className="relative z-10 mx-auto rounded-4xl w-full max-w-md"
          />

          {/* Top Badge */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute left-0 top-12 z-20 rounded-xl bg-white px-4 py-3 shadow-xl"
          >
            <p className="text-sm font-semibold text-[#0263CC]">
              ✔ Trusted Guidance
            </p>
          </motion.div>

          {/* Bottom Badge */}
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute bottom-10 right-0 z-20 rounded-xl bg-white px-4 py-3 shadow-xl"
          >
            <p className="text-sm font-semibold text-[#02A7BB]">
              🌍 Global Universities
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* <div className="grid gap-6 sm:grid-cols-2">
            {TRUST_ITEMS.slice(0, 4).map((item) => (
              <motion.div
                key={item.heading}
                variants={item}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-2xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#0263CC]/10 to-[#02A7BB]/10">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  {item.heading}
                </h3>

                <p className="text-sm leading-7 text-slate-600">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div> */}
          <div className="grid gap-6 sm:grid-cols-2">
  {TRUST_ITEMS.slice(0, 4).map((item, index) => {
    const isBlue = index === 0;
    const isBrown = index === 3;
    const isColored = isBlue || isBrown;

    return (
      <motion.div
        key={item.heading}
        variants={item}
        whileHover={{
          y: -8,
        }}
        className={`group rounded-2xl border p-6 shadow-sm transition-all hover:shadow-2xl ${
          isBlue
            ? "border-[#0263CC] bg-[#0263CC]"
            : isBrown
              ? "border-[#8b6b3f] bg-[#8b6b3f]"
              : "border-slate-200 bg-white"
        }`}
      >
        {/* Icon */}
        <div
          className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${
            isColored
              ? "bg-white/10 text-white"
              : "bg-gradient-to-br from-[#0263CC]/10 to-[#02A7BB]/10"
          }`}
        >
          {item.icon}
        </div>

        {/* Heading */}
        <h3
          className={`mb-3 text-lg font-semibold ${
            isColored ? "text-white" : "text-slate-900"
          }`}
        >
          {item.heading}
        </h3>

        {/* Description */}
        <p
          className={`text-sm leading-7 ${
            isColored ? "text-white/80" : "text-slate-600"
          }`}
        >
          {item.body}
        </p>
      </motion.div>
    );
  })}
</div>
        </motion.div>

      </div>
    </div>
  </section>
);
}

export default TrustBar;
