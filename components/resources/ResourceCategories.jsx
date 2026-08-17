"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  GraduationCap, 
  Plane, 
  DollarSign, 
  FileText, 
  Luggage,
  ChevronDown,
  Download,
  ArrowRight
} from "lucide-react";

const categories = [
  {
    id: "country-guides",
    icon: Globe,
    title: "Country Guides",
    emoji: "🌍",
    color: "from-[#0263CC] to-[#4DA5EC]",
    description: "Comprehensive guides for every study destination",
    image: "/images/resources/ban1.jpg",
    resourceCount: 30,
    resources: [
      "15 MBBS destination guides (Russia, Georgia, Kazakhstan, etc.)",
      "15 Healthcare program guides (USA, UK, Australia, Canada)",
      "Country comparison tables and rankings",
      "Cost of living and lifestyle information"
    ]
  },
  {
    id: "licensing-exam",
    icon: GraduationCap,
    title: "Exam Preparation",
    emoji: "📚",
    color: "from-[#02A7BB] to-[#4ECDC4]",
    description: "Complete preparation roadmaps for medical licensing",
    image: "/images/resources/fmge-next.jpg",
    resourceCount: 8,
    resources: [
      "FMGE/NExT preparation strategy and timeline",
      "USMLE step-by-step guide and requirements",
      "NCLEX-RN preparation for nursing students",
      "Country-specific licensing comparisons"
    ]
  },
  {
    id: "visa-immigration",
    icon: Plane,
    title: "Visa & Immigration",
    emoji: "✈️",
    color: "from-[#7C3AED] to-[#A855F7]",
    description: "Everything for visa applications and immigration",
    image: "/images/resources/visa-docs.jpg",
    resourceCount: 12,
    resources: [
      "Student visa checklists for all countries",
      "Interview preparation and common questions",
      "Post-study work visa opportunities",
      "Permanent residency pathway guides"
    ]
  },
  {
    id: "finance-loans",
    icon: DollarSign,
    title: "Finance & Loans",
    emoji: "💰",
    color: "from-[#059669] to-[#10B981]",
    description: "Financial planning and education loan guidance",
    image: "/images/resources/education-loan.jpg",
    resourceCount: 6,
    resources: [
      "Education loan application process",
      "Cost planning worksheets and budgeting",
      "Currency and remittance guidance",
      "Scholarship opportunities overview"
    ]
  },
  {
    id: "application-docs",
    icon: FileText,
    title: "Applications & Documents",
    emoji: "📝",
    color: "from-[#DC2626] to-[#EF4444]",
    description: "Templates and guides for all applications",
    image: "/images/resources/visa-docs.jpg",
    resourceCount: 10,
    resources: [
      "SOP templates and writing guidelines",
      "Letter of recommendation guidance",
      "Complete document checklists",
      "NEET eligibility certificate process"
    ]
  },
  {
    id: "pre-departure",
    icon: Luggage,
    title: "Pre-Departure Planning",
    emoji: "🧳",
    color: "from-[#EA580C] to-[#F97316]",
    description: "Essential preparation before traveling abroad",
    image: "/images/resources/career-guide.jpg",
    resourceCount: 8,
    resources: [
      "Pre-departure comprehensive checklist",
      "First 30 days abroad survival guide",
      "Packing essentials and climate guides",
      "Banking and accommodation setup tips"
    ]
  }
];

export default function ResourceCategories() {
  const [activeCategory, setActiveCategory] = useState("country-guides");

  const activeData = categories.find(cat => cat.id === activeCategory) || categories[0];
  const Icon = activeData.icon;

  return (
    <section id="resource-categories" className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-[#0263CC]/5 to-[#02A7BB]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-bl from-[#4DA5EC]/5 to-[#34D399]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Browse Resources by{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive guides, checklists, and tools organized by topic. Everything you need for a successful study abroad journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Resource Categories</h3>
              
              <div className="space-y-3">
                {categories.map((category, index) => {
                  const CategoryIcon = category.icon;
                  const isActive = activeCategory === category.id;

                  return (
                    <motion.button
                      key={category.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full group flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 ${
                        isActive 
                          ? 'border-[#0263CC] bg-gradient-to-r from-[#0263CC]/5 to-[#02A7BB]/5 shadow-lg' 
                          : 'border-slate-200 hover:border-[#0263CC]/30 bg-white hover:shadow-md'
                      }`}
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg ${!isActive && 'group-hover:scale-110'} transition-transform duration-300`}>
                        <CategoryIcon size={20} strokeWidth={2.5} />
                      </div>
                      
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-slate-900">{category.title}</span>
                          <span className="text-sm">{category.emoji}</span>
                        </div>
                        <div className="text-xs text-slate-500">{category.resourceCount} resources</div>
                      </div>
                      
                      <ArrowRight size={16} className={`text-slate-400 transition-all duration-300 ${isActive ? 'text-[#0263CC] translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active Category Display */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl"
              >
                {/* Header Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeData.color} opacity-80 z-10`} />
                   <img
                      src={activeData.image}
                      alt="Free resource"
                      className=" w-full h-full object-cover object-center shadow-2xl "
                    />
                  <div className="absolute inset-0 opacity-20" 
                       style={{
                         backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                         backgroundSize: "20px 20px"
                       }} 
                  />
                  
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4 inline-block border border-white/30">
                        <Icon size={40} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{activeData.title}</h3>
                      <p className="text-white/90">{activeData.description}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Download size={20} className="text-[#0263CC]" />
                      What's Included ({activeData.resourceCount} resources)
                    </h4>
                    
                    <div className="grid gap-3 sm:grid-cols-2">
                      {activeData.resources.map((resource, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#0263CC] mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-700">{resource}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => document.getElementById('resource-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#0263CC] to-[#02A7BB] text-white font-semibold transition-all duration-300 hover:from-[#0251a8] hover:to-[#0299a3] active:scale-95 group"
                  >
                    <Download size={20} className="group-hover:animate-bounce" />
                    Get These Resources Free
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}