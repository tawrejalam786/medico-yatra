"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, GraduationCap,
  Globe,
  Building2,
  User, } from "lucide-react";

export default function Hero() {
    return (
<section className="relative h-[580px] px-4 py-5 mt-15 overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-white to-[#EEF6FF]">
     {/* Background Blur */} 
     <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#0263CC]/10 blur-[120px]" /> 
     <div className="absolute -bottom-52 right-0 h-[450px] w-[450px] rounded-full bg-[#4DA6FF]/10 blur-[140px]" />
      {/* Grid Pattern */} 
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0263CC 1px, transparent 1px), linear-gradient(to right, #0263CC 1px, transparent 1px)", backgroundSize: "40px 40px", }} />

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(90deg,#ffffff 0%,rgba(255,255,255,.95) 32%,rgba(255,255,255,.75) 55%,rgba(255,255,255,.15) 100%)",
                }}
            />

            <div className="relative mx-auto max-w-7xl p pb-16 lg:px-8">
                {/* Breadcrumb
                <motion.nav
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    className="flex items-center gap-2 text-sm text-slate-500"
                >
                    <Link
                        href="/"
                        className="transition hover:text-[#0263CC]"
                    >
                        Home
                    </Link>

                    <ChevronRight size={15} />

                    <span className="font-medium text-slate-800">
                        Courses
                    </span>
                </motion.nav> */}

                {/* Hero Grid */}
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                    >
                        <div className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-[#0263CC]">
                            🌍 Study Medicine Abroad
                        </div>

                        <h1 className="max-w-xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">
                            Explore Our{" "}
                            <span className="bg-gradient-to-r from-[#0263CC] to-[#3B82F6] bg-clip-text text-transparent">
                                Medical Courses
                            </span>
                        </h1>

                        <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                            Choose from internationally recognized medical
                            programs and discover the perfect career path
                            with expert guidance, trusted universities and
                            transparent admissions.
                        </p>

                        {/* Stats Placeholder */}
                        <div className="mt-6">
                            {/* Replace with <HeroStats /> */}
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                {[
  {
    number: "5+",
    label: "Categories",
    icon: GraduationCap,
  },
  {
    number: "15+",
    label: "Countries",
    icon: Globe,
  },
  {
    number: "100+",
    label: "Universities",
    icon: Building2,
  },
  {
    number: "5000+",
    label: "Students",
    icon: User,
  },
].map((item) => {
  const Icon = item.icon;

  return (
    <div
      key={item.label}
      className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Icon + Number */}
      <div className="flex items-center justify-center gap-2">
        <Icon
          className={`${
            item.label === "Students" ? "w-7 h-7" : "w-6 h-6"
          } text-[#0263CC] shrink-0`}
          strokeWidth={2.3}
        />

        <span className="text-2xl font-bold text-[#0263CC]">
          {item.number}
        </span>
      </div>

      {/* Label */}
      <p className="mt-2 text-center text-base font-medium text-slate-600">
        {item.label}
      </p>
    </div>
  );
})}
                        </div>
                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        className="relative"
                    >
                        {/* Blue Circle */}
                        <div className="absolute right-12 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-[#0263CC]/15 to-[#60A5FA]/10 blur-3xl" />

                        {/* Search Card */}
                        {/* <motion.div
                            animate={{
                                y: [0, -6, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                            }}
                            className="absolute left-0 top-12 z-20 w-full max-w-sm rounded-[28px] border border-white/60 bg-white/90 p-7 shadow-2xl backdrop-blur-xl"
                        > */}
                            {/* Replace with <CourseSearchCard /> */}

                            {/* <h3 className="text-xl font-bold text-slate-900">
                                Find Your Course
                            </h3>

                            <div className="mt-6 space-y-4">
                                <div className="h-12 rounded-xl bg-slate-100" />
                                <div className="h-12 rounded-xl bg-slate-100" />
                                <div className="h-12 rounded-xl bg-slate-100" />

                                <div className="h-12 rounded-xl bg-[#0263CC]" />
                            </div>
                        </motion.div> */}

                        {/* Doctor */}
                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 6,
                            }}
                            className="relative ml-auto h-[565px] w-[420px]"
                        >
                            <Image
                                src="/images/courses/course-breadcrumb.png"
                                alt="Medical Student"
                                fill
                                priority
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}