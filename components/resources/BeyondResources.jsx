"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileSearch, University, FileCheck, Stethoscope, HeadphonesIcon } from "lucide-react";
import Button from "@/components/ui/Button";

const comparisonData = [
  {
    stage: "Country Selection",
    guideGives: "General comparison data",
    counsellingAdds: "A shortlist matched specifically to your profile and priorities"
  },
  {
    stage: "University Selection", 
    guideGives: "Representative lists",
    counsellingAdds: "Verified, current NMC/accreditation status for your specific options"
  },
  {
    stage: "Documentation",
    guideGives: "Generic checklists",
    counsellingAdds: "Checklist tailored to your specific university and country requirements"
  },
  {
    stage: "Visa",
    guideGives: "General requirement overview", 
    counsellingAdds: "Document review and application support, in partnership with ApplyVisa Yatra"
  },
  {
    stage: "Licensing Prep",
    guideGives: "Self-study roadmap",
    counsellingAdds: "Structured live online coaching integrated with your actual academic calendar"
  },
  {
    stage: "Ongoing Support",
    guideGives: "A one-time download",
    counsellingAdds: "A continuous point of contact throughout your studies abroad"
  }
];

const icons = [
  FileSearch,
  University, 
  FileCheck,
  FileSearch,
  Stethoscope,
  HeadphonesIcon
];

export default function BeyondResources() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F8FBFF] to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#4DA5EC]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#02A7BB]/5 rounded-full blur-3xl" />

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
            These Guides Are a Starting Point —{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Not the Whole Journey
            </span>
          </h2>
          
          <p className="text-lg text-[#64748B] max-w-4xl mx-auto leading-relaxed">
            Free resources can take you a long way in understanding your options — but every student's situation is different, and generic guides can't replace a conversation about your specific NEET score, budget, academic profile, and goals.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-3xl border border-[#E2E8F0] shadow-xl overflow-hidden mb-12"
        >
          {/* Table Header */}
          <div className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
              <div className="font-bold text-lg">Stage</div>
              <div className="font-bold text-lg">What a Guide Gives You</div>
              <div className="font-bold text-lg">What Medico Yatra's Counselling Adds</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#E2E8F0]">
            {comparisonData.map((row, index) => {
              const Icon = icons[index];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="px-8 py-6 hover:bg-[#F8FBFF] transition-colors duration-200"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    
                    {/* Stage */}
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-[#0263CC]/10">
                        <Icon size={20} className="text-[#0263CC]" />
                      </div>
                      <span className="font-bold text-[#0F172A]">{row.stage}</span>
                    </div>

                    {/* Guide Gives */}
                    <div className="text-[#64748B] text-sm leading-relaxed">
                      {row.guideGives}
                    </div>

                    {/* Counselling Adds */}
                    <div className="text-[#0F172A] text-sm font-medium leading-relaxed">
                      {row.counsellingAdds}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Value Proposition Cards */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          
          {/* Free Resources Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#F1F7FC] to-[#E8F4FD] rounded-2xl border border-[#E2E8F0] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#02A7BB]/10">
                <FileSearch size={24} className="text-[#02A7BB]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">Free Resources</h3>
            </div>
            
            <ul className="space-y-3 text-[#64748B]">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#02A7BB] mt-2 flex-shrink-0" />
                <span>Comprehensive information across all topics</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#02A7BB] mt-2 flex-shrink-0" />
                <span>Self-paced learning and planning</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#02A7BB] mt-2 flex-shrink-0" />
                <span>No time commitments or obligations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#02A7BB] mt-2 flex-shrink-0" />
                <span>Perfect for initial research and planning</span>
              </li>
            </ul>
          </motion.div>

          {/* Counselling Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#0263CC] to-[#4DA5EC] rounded-2xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Personal Counselling</h3>
            </div>
            
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] mt-2 flex-shrink-0" />
                <span>Personalized recommendations based on your profile</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] mt-2 flex-shrink-0" />
                <span>Real-time updates on university status and requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] mt-2 flex-shrink-0" />
                <span>Application support and document review</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4] mt-2 flex-shrink-0" />
                <span>Ongoing support throughout your journey</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-gradient-to-br from-[#F8FBFF] to-[#F1F7FC] rounded-2xl border border-[#E2E8F0] p-8"
        >
          <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
            Ready to Take the Next Step?
          </h3>
          
          <p className="text-lg text-[#64748B] mb-8 max-w-3xl mx-auto">
            Whether you want to start with our free resources or dive straight into personalized counselling, we're here to support your healthcare study abroad journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById('resource-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#0263CC] text-[#0263CC] font-semibold hover:bg-[#0263CC] hover:text-white transition-all duration-300 active:scale-95"
            >
              <FileSearch size={18} />
              Get Free Resources First
            </button>
            
            <Button href="/counselling" variant="primary" size="lg" className="flex items-center gap-2">
              <MessageCircle size={18} />
              Book Your Free Counselling Session
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}