"use client";

import { motion } from "framer-motion";
import { Shield, Briefcase, GraduationCap, Heart, Users, CheckCircle } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Shield,
    heading: "NMC-recognised universities",
    body: "Your degree has to count when you come home — this is one of the most important things families need to verify.",
    color: "from-[#0263CC] to-[#178BE5]",
    accentColor: "text-white",
  },
  {
    icon: Briefcase,
    heading: "Many healthcare careers — not just MBBS",
    body: "A low NEET score or a different interest doesn't mean fewer honest options.",
    color: "from-[#009E9A] to-[#02C7B5]",
    accentColor: "text-white",
  },
  {
    icon: GraduationCap,
    heading: "Integrated FMGE / NExT & USMLE coaching",
    body: "Licensing preparation starts with your course, not years later.",
    color: "from-[#5B4FE9] to-[#7C3AED]",
    accentColor: "text-white",
  },
  {
    icon: Heart,
    heading: "Honest, end-to-end guidance",
    body: "From counselling to licensing, we stay involved throughout the journey.",
    color: "from-[#F97316] to-[#EF4444]",
    accentColor: "text-white",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
  },
};

const iconVariants = {
  hover: { 
    scale: 1.1, 
    rotate: [0, -10, 10, -10, 0],
    transition: { duration: 0.5 }
  }
};

const TrustBar = () => {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FBFF] to-[#F1F7FC] py-16 sm:py-20 lg:py-24"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-[#0263CC]/15 to-[#4DA5EC]/10 blur-3xl animate-pulse" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-gradient-to-br from-[#02A7BB]/15 to-[#4ECDC4]/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-[#4DA5EC]/5 to-[#02A7BB]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Heading Section */}
        <div className="mb-14 sm:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0263CC]/10 to-[#02A7BB]/10 px-5 py-2.5 border border-[#0263CC]/20 shadow-sm"
          >
            <CheckCircle size={16} className="text-[#0263CC]" />
            <span className="text-sm font-bold text-[#0263CC] tracking-wide">
              WHY CHOOSE US
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] leading-tight"
          >
            Why Families Trust{" "}
            <span className="bg-gradient-to-r from-[#0263CC] via-[#4DA5EC] to-[#02A7BB] bg-clip-text text-transparent">
              Medico Yatra
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-[#475569]"
          >
            We help students and parents make confident healthcare education
            decisions with transparent counselling, trusted universities and
            complete guidance from admission to career.
          </motion.p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT - Image with Enhanced Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            {/* Decorative Circle Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0263CC]/10 to-[#02A7BB]/10 rounded-3xl blur-2xl" />
            
            {/* Main Image Container with Fixed Aspect Ratio */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut"
              }}
              className="relative z-10 aspect-[3/0] max-h-[500px]"
            >
              <img
                src="/images/doc1.webp"
                alt="Healthcare Student"
                className="relative rounded-3xl w-full h-full object-cover shadow-2xl border-4 border-white"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-3xl" />
            </motion.div>

            {/* Enhanced Floating Badge - Top Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              animate={{ 
                y: [-8, 8, -8],
                transition: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.05 }}
              className="absolute -left-4 sm:left-0 -top-10 lg:top-8 sm:top-12 z-20 rounded-2xl bg-white px-4 sm:px-5 py-3 sm:py-4 shadow-2xl border border-[#E2E8F0] backdrop-blur-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0263CC] to-[#4DA5EC] flex items-center justify-center">
                  <Shield size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#94A3B8]">Verified</p>
                  <p className="text-sm font-bold text-[#0263CC]">NMC Recognised</p>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Floating Badge - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              animate={{ 
                y: [8, -8, 8],
                transition: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }
              }}
              whileHover={{ scale: 1.05 }}
              className="absolute -right-4 sm:right-0 bottom-8 sm:bottom-12 z-20 rounded-2xl bg-white px-4 sm:px-5 py-3 sm:py-4 shadow-2xl border border-[#E2E8F0] backdrop-blur-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#02A7BB] to-[#4ECDC4] flex items-center justify-center">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#94A3B8]">Trusted by</p>
                  <p className="text-sm font-bold text-[#02A7BB]">1000+ Families</p>
                </div>
              </div>
            </motion.div>

            {/* Stats Badge - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -left-4 sm:left-4 bottom-32 sm:bottom-36 z-20 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#EF4444] px-4 py-3 shadow-2xl"
            >
              <p className="text-2xl font-black text-white">13+</p>
              <p className="text-xs font-semibold text-white/90">Countries</p>
            </motion.div>
          </motion.div>

          {/* RIGHT - Trust Cards Grid */}
         <motion.div
  variants={container}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-2 gap-5 sm:grid-cols-2"
>
  {TRUST_ITEMS.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.heading}
        variants={cardVariants}
        whileHover={{
          y: -8,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.20)",
          transition: { duration: 0.3 },
        }}
        className={`
          group relative overflow-hidden rounded-2xl
          bg-gradient-to-br ${item.color}
          p-5 sm:p-6
          shadow-lg
          transition-all duration-300
        `}
      >
        {/* Smooth Background Texture */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.28),transparent_32%)]
            opacity-80
            blur-xl
            scale-110
          "
        />

        {/* Second Soft Glow */}
        <div
          className="
            pointer-events-none absolute
            -right-16 -top-16
            h-48 w-48
            rounded-full
            bg-white/15
            blur-3xl
            transition-transform duration-700
            group-hover:scale-125
          "
        />

        {/* Bottom Soft Shade */}
        <div
          className="
            pointer-events-none absolute
            -bottom-20 -left-16
            h-52 w-52
            rounded-full
            bg-black/10
            blur-3xl
          "
        />

        {/* Decorative Circle */}
        <div
          className="
            pointer-events-none absolute
            -right-10 -top-10
            h-28 w-28
            rounded-full
            bg-white/10
            blur-2xl
            transition-all duration-500
            group-hover:scale-150
            group-hover:bg-white/15
          "
        />

        {/* Content */}
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          className="
            relative z-10 mb-5
            flex h-14 w-14 items-center justify-center
            rounded-xl
            bg-white/15
            shadow-lg
            backdrop-blur-sm
            ring-1 ring-white/20
          "
        >
          <Icon
            size={24}
            className="text-white"
            strokeWidth={2.5}
          />
        </motion.div>

        <h3
          className="
            relative z-10 mb-2.5
            text-base sm:text-lg
            font-bold
            leading-tight
            text-white
          "
        >
          {item.heading}
        </h3>

        <p
          className="
            relative z-10
            text-sm
            hidden
            lg:block
            leading-relaxed
            text-white/85
          "
        >
          {item.body}
        </p>

        {/* Bottom Shine */}
        <div
          className="
            pointer-events-none absolute
            bottom-0 left-0 right-0
            h-px
            bg-white/20
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />
      </motion.div>
    );
  })}
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
