"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Shield, CheckCircle, Phone, Mail, MapPin, GraduationCap, Sparkles } from "lucide-react";

const exploringOptions = [
  "MBBS Abroad",
  "Healthcare Courses Abroad", 
  "Both"
];

const statusOptions = [
  "Class 12",
  "NEET Appeared",
  "Graduate",
  "Other"
];

const benefits = [
  "30+ Country Guides (MBBS + Healthcare)",
  "FMGE/NExT & USMLE Preparation Roadmaps",
  "Complete Education Loan Guidance",
  "Visa Checklists for All Countries",
  "SOP Templates & Writing Guides",
  "Pre-Departure Planning Checklists"
];

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    exploring: "",
    status: "",
    preferredCountry: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const isValid = formData.name && formData.mobile && formData.email && formData.city && formData.exploring && formData.status;

  if (isSubmitted) {
    return (
      <section id="resource-form" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0263CC] to-[#02A7BB] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] text-white">
              <CheckCircle size={40} />
            </div>
            
            <h3 className="text-3xl font-black text-[#0F172A] mb-4">
              Success! Check Your Email & WhatsApp
            </h3>
            
            <p className="text-lg text-[#64748B] mb-6 max-w-2xl mx-auto">
              We've sent you instant access to all our free resources. You should receive the download links within the next few minutes.
            </p>
            
            <div className="bg-[#F1F7FC] rounded-xl p-6 border border-[#E2E8F0]">
              <p className="text-base font-semibold text-[#0263CC] mb-2">What's Next?</p>
              <p className="text-sm text-[#64748B]">
                A Medico Yatra counsellor may reach out to see if you have any questions about the guides. This is completely optional — you can use all the resources on your own if you prefer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="resource-form" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0263CC] to-[#02A7BB] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4DA5EC]/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Sparkles size={16} className="text-white" />
            <span className="text-sm font-bold text-white">INSTANT ACCESS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Get Instant Access to All Free Resources
          </h2>
          
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Fill in this form once to unlock every guide, checklist, and tool listed above — country guides, FMGE/NExT and USMLE resources, education loan guidance, visa checklists, SOP templates, and pre-departure planning.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              What You'll Get Instant Access To:
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="flex items-center gap-3 text-white/90"
                >
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#4ECDC4]">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={20} className="text-[#4ECDC4]" />
                <span className="font-bold text-white">Your Privacy is Protected</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Your details are used only to share these resources and relevant follow-up. We do not sell or share your information. No spam.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid gap-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:ring-2 focus:ring-[#0263CC]/20 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Mobile & Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Mobile (WhatsApp) *
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3 top-3.5 text-[#94A3B8]" />
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:ring-2 focus:ring-[#0263CC]/20 transition-all"
                        placeholder="+91 Your number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#0F172A] mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-3.5 text-[#94A3B8]" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:ring-2 focus:ring-[#0263CC]/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-[#0F172A] mb-2">
                    City *
                  </label>
                  <div className="relative">
                    <MapPin size={18} className="absolute left-3 top-3.5 text-[#94A3B8]" />
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-11 pr-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:ring-2 focus:ring-[#0263CC]/20 transition-all"
                      placeholder="Your city"
                    />
                  </div>
                </div>

                {/* Exploring Options */}
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-3">
                    Are You Exploring: *
                  </label>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {exploringOptions.map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="exploring"
                          value={option}
                          checked={formData.exploring === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#0263CC] border-[#CBD5E1] focus:ring-[#0263CC] focus:ring-2"
                        />
                        <span className="text-sm text-[#0F172A] font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Current Status */}
                <div>
                  <label className="block text-sm font-semibold text-[#0F172A] mb-3">
                    Current Status: *
                  </label>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {statusOptions.map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="status"
                          value={option}
                          checked={formData.status === option}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#0263CC] border-[#CBD5E1] focus:ring-[#0263CC] focus:ring-2"
                        />
                        <span className="text-sm text-[#0F172A] font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred Country */}
                <div>
                  <label htmlFor="preferredCountry" className="block text-sm font-semibold text-[#0F172A] mb-2">
                    Preferred Country (Optional)
                  </label>
                  <div className="relative">
                    <GraduationCap size={18} className="absolute left-3 top-3.5 text-[#94A3B8]" />
                    <input
                      type="text"
                      id="preferredCountry"
                      name="preferredCountry"
                      value={formData.preferredCountry}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border border-[#E2E8F0] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0263CC] focus:ring-2 focus:ring-[#0263CC]/20 transition-all"
                      placeholder="e.g., Russia, Georgia, UK..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={`w-full py-4 rounded-2xl font-bold text-base transition-all duration-300 ${
                    isValid && !isSubmitting
                      ? 'bg-gradient-to-r from-[#0263CC] to-[#4DA5EC] text-white shadow-[0_20px_40px_rgba(2,99,204,.3)] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(2,99,204,.4)] active:scale-95'
                      : 'bg-[#E2E8F0] text-[#94A3B8] cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Download size={20} />
                      Get Instant Access to All Resources
                    </div>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}