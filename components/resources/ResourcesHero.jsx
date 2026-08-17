"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, BookOpen, FileText, CheckCircle2, Star, Users } from "lucide-react";
import Image from "next/image";

export default function ResourcesHero() {
  const scrollToForm = () => {
    document.getElementById('resource-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0263CC] via-[#0A5CC9] to-[#0D47A1]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-[#60A5FA]/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#4DA5EC] animate-pulse" />
              <span className="font-semibold text-sm text-white">Free Resources</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Everything You Need for{" "}
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#34D399] bg-clip-text text-transparent">
                Study Abroad
              </span>{" "}
              Success
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl"
            >
              Comprehensive guides, checklists, and templates to navigate your healthcare study abroad journey with confidence. All free, all in one place.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 mb-8 text-white/80"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#34D399]" />
                <span className="text-sm font-medium">50+ Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-[#FBBF24] fill-current" />
                <span className="text-sm font-medium">10,000+ Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-[#60A5FA]" />
                <span className="text-sm font-medium">5,000+ Students</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              onClick={scrollToForm}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-[#0263CC] font-bold text-lg shadow-[0_20px_40px_rgba(255,255,255,.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(255,255,255,.35)] active:scale-95"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Get Free Access Now
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Right Visual */}
          <div className="relative lg:pl-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-white/20 to-white/5">
                  {/* Placeholder pattern instead of image */}
                  <img
                      src="/images/colorful-overloaded-bullet-journal.jpg"
                      alt="Free resource"
                      className=" w-full h-full object-cover object-center shadow-2xl "
                    />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4DA5EC]/30 to-[#34D399]/30" />
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px)`,
                      backgroundSize: "30px 30px"
                    }}
                  />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <BookOpen size={20} className="text-[#0263CC]" />
                        <span className="font-semibold text-[#0263CC]">Study Guides</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Country comparisons, visa guides, and preparation materials
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-2">
                  <FileText size={20} className="text-[#02A7BB]" />
                  <span className="font-semibold text-gray-800 text-sm">50+ PDFs</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center gap-2">
                  <Download size={20} className="text-[#059669]" />
                  <span className="font-semibold text-gray-800 text-sm">Free Access</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
