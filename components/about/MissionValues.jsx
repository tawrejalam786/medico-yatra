"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Users,
    Star,
    Heart,
} from "lucide-react";

const values = [
    {
        title: "Integrity",
        description:
            "We believe in honesty, transparency and ethical guidance.",
        icon: ShieldCheck,
        iconColor: "text-[#2563EB]",
        iconBg: "bg-blue-50",
        hover:
            "hover:shadow-[0_25px_60px_rgba(37,99,235,.18)]",
        glow: "from-blue-500/10 to-cyan-400/10",
    },
    {
        title: "Student First",
        description:
            "Every decision we make is in the best interest of students.",
        icon: Users,
        iconColor: "text-emerald-600",
        iconBg: "bg-emerald-50",
        hover:
            "hover:shadow-[0_25px_60px_rgba(16,185,129,.18)]",
        glow: "from-emerald-500/10 to-green-300/10",
    },
    {
        title: "Excellence",
        description:
            "We strive for excellence in service and continuous support.",
        icon: Star,
        iconColor: "text-amber-500",
        iconBg: "bg-amber-50",
        hover:
            "hover:shadow-[0_25px_60px_rgba(16,185,129,.18)]",
        glow: "from-amber-400/10 to-orange-400/10",
    },
    {
        title: "Empathy",
        description:
            "We understand students' dreams and challenges with care.",
        icon: Heart,
        iconColor: "text-rose-500",
        iconBg: "bg-rose-50",
        hover:
            "hover:shadow-[0_25px_60px_rgba(245,158,11,.18)]",
        glow: "from-rose-400/10 to-pink-400/10",
    },
];

export default function MissionValues() {
    return (
        <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

            {/* Background */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#F8FBFF] via-white to-[#F4F9FF]" />

            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#0263CC]/10 blur-[110px]" />

            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#4DA5EC]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6 sm:grid-cols-2">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                        className="lg:col-span-5"
                    >

                        <span className="text-[#0263CC] font-semibold tracking-widest uppercase text-sm">
                            Our Mission
                        </span>

                        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                            Empowering Future
                            <span className="text-[#0263CC]"> Healthcare Leaders</span>
                        </h2>

                        <div className="mt-5 h-1.5 w-16 rounded-full bg-[#0263CC]" />

                        <p className="mt-7 text-slate-600 text-base sm:text-lg leading-8 max-w-xl">
                            To make quality medical education abroad accessible,
                            affordable and transparent while supporting students at
                            every step of their academic journey.
                        </p>

                        {/* Illustration */}

                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative mx-auto mt-10 w-full max-w-md lg:max-w-lg"
                        >

                            <div className="absolute left-4 top-8 h-3 w-3 rounded-full bg-blue-400/40 animate-pulse" />

                            <div className="absolute right-8 top-20 h-4 w-4 rounded-full bg-emerald-400/40 animate-pulse" />

                            <div className="absolute bottom-10 left-12 h-2 w-2 rounded-full bg-orange-400/50 animate-pulse" />


                            <div className="relative mx-auto w-full max-w-[480px] lg:max-w-[560px]">
                                <Image
                                    src="/images/about/icons-degree.png"
                                    alt="Mission"
                                    width={600}
                                    height={450}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                            {/* Floating Badge */}

                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                className="absolute left-0 top-10 rounded-2xl bg-white p-3 shadow-xl"
                            >
                                🎯
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, 8, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                }}
                                className="absolute right-3 bottom-8 rounded-2xl bg-white p-3 shadow-xl"
                            >
                                🎓
                            </motion.div>

                        </motion.div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .8 }}
                        className="lg:col-span-7"
                    >

                        <span className="text-[#0263CC] font-semibold tracking-widest uppercase text-sm">
                            Our Values
                        </span>

                        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
                            What Makes Us Different
                        </h2>

                        <div className="mt-5 h-1.5 w-16 rounded-full bg-[#0263CC]" />

                        {/* Cards Grid */}

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 min-h-[260px] lg:min-h-[280px] tabIndex={0} focus-visible:ring-2
focus-visible:ring-[#0263CC]
focus-visible:ring-offset-2">

                            {values.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02,
                                        }}
                                        transition={{
                                            duration: .3,
                                        }}
                                        className={`
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/70
                    bg-white/90
                    backdrop-blur-xl
                    p-5
                    sm:p-6
                    lg:p-7
                    transition-all
                    duration-500
                    ${item.hover}
                    hover:-translate-y-2
                    `}
                                    >
                                        <div
                                            className={`absolute inset-0 rounded-[28px] p-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500`}
                                        >
                                            <div
                                                className={`absolute inset-0 rounded-[28px] bg-gradient-to-br ${item.glow}`}
                                            />
                                        </div>
                                        <div
                                            className={`
absolute
top-0
left-0
h-1
w-full
bg-gradient-to-r
${item.glow}
opacity-0
group-hover:opacity-100
transition
duration-500
`}
                                        />
                                        <div className="absolute -left-28 top-0 h-full w-16 rotate-12 bg-white/40 blur-xl transition-all duration-700 group-hover:left-[120%]" />

                                        <div className="relative z-10">

                                            <motion.div
                                                whileHover={{
                                                    rotate: 12,
                                                    scale: 1.08,
                                                }}
                                                transition={{
                                                    duration: 0.35,
                                                }}
                                                className={`
  relative
  flex
  h-16
  w-16
  items-center
  justify-center
  rounded-2xl
  ${item.iconBg}
  shadow-lg
`}
                                            >
                                                <Icon
                                                    className={item.iconColor}
                                                    size={30}
                                                />
                                            </motion.div>

                                            <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
                                                {item.title}
                                            </h3>

                                            <p className="mt-3 text-[15px] leading-7 text-slate-600">
                                                {item.description}
                                            </p>

                                        </div>

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