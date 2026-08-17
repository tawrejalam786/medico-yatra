"use client";

import { motion } from "framer-motion";
import { Download, TrendingUp, Users, Star, ArrowRight, BookOpen, FileText, GraduationCap, Plane, DollarSign, Briefcase } from "lucide-react";

const featuredResources = [
  {
    title: "MBBS Abroad Complete Guide",
    description: "Everything you need to know about studying MBBS abroad - country comparisons, fees, and admission process.",
    downloads: "2,847",
    rating: 4.9,
    badge: "Most Popular",
    badgeColor: "bg-gradient-to-r from-[#0263CC] to-[#4DA5EC]",
    icon: GraduationCap,
    image: "/images/resources/mbbs.jpg",
    category: "Medical Education"
  },
  {
    title: "FMGE/NExT Preparation Roadmap", 
    description: "Step-by-step preparation strategy for medical licensing exams with study materials and timeline.",
    downloads: "1,923",
    rating: 4.8,
    badge: "Trending",
    badgeColor: "bg-gradient-to-r from-[#02A7BB] to-[#4ECDC4]",
    icon: BookOpen,
    image: "/images/resources/fmge-next.jpg",
    category: "Exam Preparation"
  },
  {
    title: "Education Loan Complete Guide",
    description: "Comprehensive guide to securing education loans for studying abroad including documentation and process.",
    downloads: "1,654",
    rating: 4.9,
    badge: "Essential",
    badgeColor: "bg-gradient-to-r from-[#059669] to-[#10B981]",
    icon: DollarSign,
    image: "/images/resources/education-loan.jpg",
    category: "Finance"
  },
  {
    title: "Student Visa Documentation",
    description: "Complete checklist and templates for student visa applications across all major study destinations.",
    downloads: "2,156",
    rating: 4.7,
    badge: "Time Saver",
    badgeColor: "bg-gradient-to-r from-[#7C3AED] to-[#A855F7]",
    icon: Plane,
    image: "/images/resources/visa-docs.jpg",
    category: "Visa & Immigration"
  },
  {
    title: "SOP Writing Templates",
    description: "Professional statement of purpose templates and writing guidelines for healthcare programs.",
    downloads: "3,241",
    rating: 4.8,
    badge: "Top Rated",
    badgeColor: "bg-gradient-to-r from-[#DC2626] to-[#EF4444]",
    icon: FileText,
    image: "/images/resources/sop-template.jpg",
    category: "Applications"
  },
  {
    title: "Career Planning Guide",
    description: "Post-graduation career paths, licensing requirements, and job opportunities in different countries.",
    downloads: "1,432",
    rating: 4.6,
    badge: "Comprehensive",
    badgeColor: "bg-gradient-to-r from-[#EA580C] to-[#F97316]",
    icon: Briefcase,
    image: "/images/resources/career-guide.jpg",
    category: "Career Planning"
  }
];

export default function FeaturedResources() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#0263CC]/5 to-[#02A7BB]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#4DA5EC]/5 to-[#34D399]/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#02A7BB]/10 to-[#0263CC]/10 border border-[#0263CC]/20 mb-6">
            <TrendingUp size={16} className="text-[#0263CC]" />
            <span className="text-sm font-semibold text-[#0263CC]">POPULAR RESOURCES</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Most Downloaded{" "}
            <span className="bg-gradient-to-r from-[#0263CC] to-[#02A7BB] bg-clip-text text-transparent">
              Study Guides
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Proven resources that have helped thousands of students successfully navigate their study abroad journey.
          </p>
        </motion.div>

        {/* Featured Resources Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {featuredResources.map((resource, index) => {
            const Icon = resource.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full ${resource.badgeColor} text-white text-xs font-semibold`}>
                  {resource.badge}
                </div>

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} z-10`} />
                  
                   <img
                      src={resource.image}
                      alt="Free resource"
                      className=" w-full h-full object-cover object-center shadow-2xl "
                    />
                  <div className="absolute inset-0 opacity-20" 
                       style={{
                         backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                         backgroundSize: "20px 20px"
                       }} 
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                      <Icon size={32} className="text-white mx-auto" />
                    </div>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute bottom-3 left-3 z-20">
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium border border-white/30">
                      {resource.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-[#0263CC] transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Users size={16} className="text-slate-400" />
                        <span className="text-sm font-semibold text-slate-700">{resource.downloads}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-amber-400 fill-current" />
                        <span className="text-sm font-semibold text-slate-700">{resource.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => document.getElementById('resource-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#0263CC] to-[#02A7BB] text-white font-semibold transition-all duration-300 hover:from-[#0251a8] hover:to-[#0299a3] active:scale-95"
                  >
                    <Download size={18} className="group-hover/btn:animate-bounce" />
                    Download Free
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#F8FBFF] to-[#F1F7FC] rounded-3xl border border-slate-200 p-8 lg:p-12"
        >
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#0263CC] to-[#4DA5EC] text-white">
                <Download size={32} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">50,000+</div>
              <p className="text-slate-600">Total Downloads</p>
            </div>
            
            <div>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#02A7BB] to-[#34D399] text-white">
                <Users size={32} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">10,000+</div>
              <p className="text-slate-600">Students Helped</p>
            </div>
            
            <div>
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#A855F7] text-white">
                <Star size={32} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">4.8/5</div>
              <p className="text-slate-600">Average Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}