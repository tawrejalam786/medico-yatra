"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Are these resources actually free, or is there a hidden cost?",
    answer: "Genuinely free. There is no payment required to access any guide, checklist, or tool on this page. We ask for your contact details so we can share the resources and follow up if you have questions — not to charge you anything."
  },
  {
    question: "Do I need to fill the form separately for each guide?",
    answer: "No — one form gives you access to the entire resource library, including all 30 country guides, licensing/exam preparation resources, visa checklists, loan guides, and SOP templates."
  },
  {
    question: "Will a counsellor contact me after I download these resources?",
    answer: "Likely yes, but only to check if the resources answered your questions and to see if you'd find a free counselling session helpful. You are never obligated to proceed further, and you can simply use the resources on your own if that's all you need right now."
  },
  {
    question: "Are the country guides the same as the information on the country pages?",
    answer: "The downloadable guides are designed as consolidated, save-and-share PDF versions of the information across our country pages — useful for sharing with family members or referring back to without needing internet access."
  },
  {
    question: "Is the education loan guide specific to any one lender or bank?",
    answer: "No — the guide covers the general landscape of education loan options (secured vs unsecured, government schemes, private lenders) so you understand your options before approaching any specific lender. For loan assistance specifically, our Future Yatra group offers dedicated guidance — ask your counsellor."
  },
  {
    question: "Can I use the SOP template directly, or does it need to be customised?",
    answer: "The SOP template is a structural guide and writing framework — it is not meant to be used as-is. Every SOP should be personalised to your specific story, goals, and target programme. We recommend using it as a starting structure, not a final draft."
  },
  {
    question: "Are the FMGE/NExT and USMLE resources sufficient on their own, or do I need coaching?",
    answer: "The free guides give you a solid understanding of exam structure, pattern, and a self-study roadmap. For most students, especially those balancing this alongside a demanding MBBS abroad course load, structured live coaching provides significantly more support than self-study alone. The guides are a good starting point either way."
  },
  {
    question: "Do the visa checklists guarantee my visa will be approved if I follow them?",
    answer: "No — visa decisions rest entirely with the relevant immigration authority. The checklists help you prepare a complete, well-organised application, which generally improves your chances, but cannot guarantee approval."
  },
  {
    question: "How often are these resources updated?",
    answer: "We review and update resources periodically as regulations, fees, and requirements change. However, given how frequently some details (NMC status, immigration rules, exchange rates) change, always verify current information directly with official sources before making final decisions, even when using our guides."
  },
  {
    question: "I'm not sure if I want MBBS or another healthcare course — can these resources help me decide?",
    answer: "Yes — the resource library includes guides across both MBBS abroad and other healthcare courses (Nursing, Pharmacy, Physiotherapy, and more), so you can explore multiple options before narrowing down. The form also asks what you're exploring, so we can point you toward the most relevant starting guides."
  },
  {
    question: "How do I get started?",
    answer: "Fill in the form above to get instant access to the full resource library. If you'd like to discuss your specific situation afterward, you can book a free counselling session — no pressure, no obligation."
  }
];

export default function ResourcesFAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0263CC]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#02A7BB]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4DA5EC]/10 border border-[#4DA5EC]/20 mb-6">
            <HelpCircle size={16} className="text-[#4DA5EC]" />
            <span className="text-sm font-bold text-[#4DA5EC]">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] mb-5">
            Free Resources —{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          
          <p className="text-lg text-[#64748B] max-w-3xl mx-auto">
            Everything you need to know about accessing and using our free healthcare study abroad resources.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFAQ === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-[#0263CC] shadow-[0_20px_40px_rgba(2,99,204,0.15)]' 
                    : 'border-[#E2E8F0] hover:border-[#0263CC]/30 shadow-lg'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#0263CC]/20"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-base sm:text-lg text-[#0F172A] leading-tight pr-4">
                      {faq.question}
                    </h3>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      {isOpen ? (
                        <Minus size={20} className="text-[#0263CC]" />
                      ) : (
                        <Plus size={20} className="text-[#94A3B8]" />
                      )}
                    </motion.div>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-0">
                        <div className="border-t border-[#E2E8F0] pt-6">
                          <p className="text-[#64748B] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <div className="bg-gradient-to-br from-[#F8FBFF] to-[#F1F7FC] rounded-2xl border border-[#E2E8F0] p-8">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
              Still Have Questions?
            </h3>
            
            <p className="text-lg text-[#64748B] mb-6 max-w-2xl mx-auto">
              Our counsellors are here to help. Book a free consultation or reach out via WhatsApp for immediate support.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919876543210"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#02A7BB] text-[#02A7BB] font-semibold hover:bg-[#02A7BB] hover:text-white transition-all duration-300 active:scale-95"
              >
                💬 Chat on WhatsApp
              </a>
              
              <button
                onClick={() => window.location.href = '/counselling'}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0263CC] to-[#4DA5EC] text-white font-semibold shadow-[0_10px_30px_rgba(2,99,204,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,99,204,0.4)] transition-all duration-300 active:scale-95"
              >
                <HelpCircle size={18} />
                Book Free Counselling
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}