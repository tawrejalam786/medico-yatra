"use client";

import { motion } from "framer-motion";
import { FileText, Mail, MessageCircle, Shield, Clock, Users } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Fill in the form below",
    description: "Just your name, contact details, and a couple of quick questions about your situation, so we can tailor what's most relevant to you.",
    color: "from-[#0263CC] to-[#4DA5EC]"
  },
  {
    number: "2", 
    icon: Mail,
    title: "Receive instant access",
    description: "To the full resource library via email and WhatsApp, including all country guides, licensing resources, and planning tools.",
    color: "from-[#02A7BB] to-[#4ECDC4]"
  },
  {
    number: "3",
    icon: MessageCircle,
    title: "A Medico Yatra counsellor may follow up",
    description: "Not to pressure you, but to check if you have questions the guides didn't fully answer. You're never obligated to book anything further.",
    color: "from-[#059669] to-[#10B981]"
  }
];

const trustReasons = [
  {
    icon: Shield,
    title: "Privacy Protected",
    description: "Your information is used only to share these resources and relevant follow-up — never sold or shared externally."
  },
  {
    icon: Clock,
    title: "Genuine Effort",
    description: "These resources take real effort to create and maintain, and we'd rather have honest conversations with serious families."
  },
  {
    icon: Users,
    title: "Quality Over Quantity",
    description: "We prefer meaningful engagement with informed families rather than broadcasting to anonymous traffic."
  }
];

export default function HowToAccess() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0263CC]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#02A7BB]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] mb-5">
            How to Access —{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              It's Simple
            </span>
          </h2>
          
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            Three easy steps to get instant access to our complete library of healthcare study abroad resources.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-white font-black text-2xl mb-6 shadow-lg`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                    <Icon size={28} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-base text-[#64748B] leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-gradient-to-r from-[#E2E8F0] to-[#CBD5E1]" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Why We Ask For Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-[#F8FBFF] to-[#F1F7FC] rounded-2xl border border-[#E2E8F0] p-8 lg:p-10"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
              Why We Ask for Your Details
            </h3>
            <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
              We believe in transparency. Here's exactly why we request your information and how we use it.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {trustReasons.map((reason, index) => {
              const Icon = reason.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#0263CC]/10 text-[#0263CC]">
                      <Icon size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                    {reason.title}
                  </h4>
                  
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Statement */}
          <div className="mt-10 pt-8 border-t border-[#E2E8F0] text-center">
            <p className="text-base font-semibold text-[#0F172A] max-w-4xl mx-auto">
              We ask for your details because these resources take genuine effort to create and maintain, and because we'd rather have an honest conversation with serious, informed families than blast generic information at anonymous traffic.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.getElementById('resource-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0263CC] to-[#4DA5EC] text-white font-bold text-base shadow-[0_20px_40px_rgba(2,99,204,.3)] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(2,99,204,.4)] transition-all duration-300 active:scale-95"
          >
            <FileText size={20} />
            Ready to Get Started? Fill the Form Below
          </button>
        </motion.div>
      </div>
    </section>
  );
}