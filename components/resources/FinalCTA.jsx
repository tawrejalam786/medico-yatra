"use client";

import { motion } from "framer-motion";
import { Download, MessageCircle, ArrowRight, Sparkles, Users, BookOpen, Globe } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    text: "30+ comprehensive guides"
  },
  {
    icon: Globe,
    text: "15 countries covered"
  },
  {
    icon: Users,
    text: "Trusted by 5000+ families"
  }
];

const links = [
  {
    category: "Country Guides",
    links: [
      { text: "Study MBBS Abroad — Country Guide", href: "/countries" },
      { text: "Study Healthcare Abroad — Country Guide", href: "/courses" }
    ]
  },
  {
    category: "Licensing & Exam Pages", 
    links: [
      { text: "FMGE / NExT Coaching", href: "/fmge-next-coaching" },
      { text: "USMLE Coaching", href: "/usmle-coaching" }
    ]
  },
  {
    category: "Sister Brand Resources",
    links: [
      { text: "Education Loan Assistance — University Yatra", href: "#" },
      { text: "Visitor, Spouse & Family Visa Guidance — ApplyVisa Yatra", href: "#" },
      { text: "IELTS / OET / Language Test Preparation — Academic Yatra", href: "#" }
    ]
  }
];

export default function FinalCTA() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0263CC] via-[#0263CC] to-[#02A7BB] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4DA5EC]/20 rounded-full blur-3xl" />
      
      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <Sparkles size={16} className="text-[#4ECDC4]" />
            <span className="text-sm font-bold text-white">FINAL CALL TO ACTION</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Get Every Guide You Need —{" "}
            <span className="bg-gradient-to-r from-[#4ECDC4] via-white to-[#4DA5EC] bg-clip-text text-transparent">
              One Form, Instant Access
            </span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed">
            Whether you're just starting to explore your options or you're deep into comparing universities, these resources are built to support you at every stage — honestly, without hype, and without a paywall.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                    <Icon size={24} />
                  </div>
                  <span className="font-semibold">{feature.text}</span>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={() => document.getElementById('resource-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-[#0263CC] font-black text-lg shadow-[0_20px_40px_rgba(255,255,255,.25)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(255,255,255,.35)] active:scale-95"
            >
              <Download size={24} className="group-hover:animate-bounce" />
              Get Instant Access to All Resources
            </button>

            <a
              href="https://wa.me/919876543210"
              className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm active:scale-95"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Internal Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border-t border-white/20 pt-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Explore More from Medico Yatra
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Discover additional resources and services to support your healthcare education journey.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6"
              >
                <h4 className="text-lg font-bold text-white mb-4">
                  {section.category}
                </h4>
                
                <div className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className="block text-white/80 hover:text-white text-sm font-medium hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                    >
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      {link.text}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 pt-8 border-t border-white/20"
        >
          <p className="text-white/60 text-sm max-w-4xl mx-auto leading-relaxed">
            <strong>Compliance Disclaimer:</strong> All guides, checklists, and figures provided are for general informational and planning purposes only. Regulations, fees, NMC-approved status, immigration rules, and exchange rates change frequently. Always verify current information directly with official sources before making final decisions. Future Yatra Private Limited provides educational counselling and application support services. We do not guarantee admission, visa approval, loan approval, scholarship awards, or licensing/exam outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}