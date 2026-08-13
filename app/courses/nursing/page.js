import Hero from "@/components/courses/nursing/Hero";
import TrustStrip from "@/components/courses/nursing/TrustStrip";
import SalaryGuide from "@/components/courses/nursing/SalaryGuide";
import SettleFamily from "@/components/courses/nursing/SettleFamily";
import CareerPaths from "@/components/courses/nursing/CareerPaths";
import QualificationPath from "@/components/courses/nursing/QualificationPath";
import Licensing from "@/components/courses/nursing/Licensing";
import HowHelps from "@/components/courses/nursing/HowHelps";
import JourneyTimeline from "@/components/courses/nursing/JourneyTimeline";
import HealthcareCourses from "@/components/courses/nursing/HealthcareCourses";
import FirstStep from "@/components/courses/nursing/FirstStep";
import FAQ from "@/components/courses/nursing/FAQ";
import FinalCTA from "@/components/courses/nursing/FinalCTA";

export default function NursingPage() {
  return (
    <main className="overflow-hidden bg-slate-50 text-slate-900">
      {/* Hero Section - Full Width */}
      <Hero />

      {/* Trust Strip - Full Width */}
      <TrustStrip />

      {/* Main Content Container with Responsive Padding */}
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Salary Guide Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <SalaryGuide />
        </div>

        {/* Two Column Grid - Settle Family & Career Paths */}
        <div className="mb-8 grid gap-4 sm:mb-10 sm:gap-5 lg:mb-12 lg:grid-cols-2">
          <SettleFamily />
          <CareerPaths />
        </div>

        {/* Two Column Grid - Qualification & Licensing */}
        <div className="mb-8 grid gap-4 sm:mb-10 sm:gap-5 lg:mb-12 lg:grid-cols-2">
          <QualificationPath />
          <Licensing />
        </div>

        {/* How We Help Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <HowHelps />
        </div>

        {/* Journey Timeline Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <JourneyTimeline />
        </div>

        {/* Two Column Grid - Healthcare Courses & First Step */}
        <div className="mb-8 grid gap-4 sm:mb-10 sm:gap-5 lg:mb-12 lg:grid-cols-[1.35fr_.65fr]">
          <HealthcareCourses />
          <FirstStep />
        </div>

        {/* FAQ Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <FAQ />
        </div>

        {/* Final CTA Section */}
        <div className="mb-8 sm:mb-10">
          <FinalCTA />
        </div>
      </div>
    </main>
  );
}