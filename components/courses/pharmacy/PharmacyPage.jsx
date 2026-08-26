"use client";

import BottomCTA from "./BottomCTA";
import CareerDirections from "./CareerDirections";
import CourseOptions from "./CourseOptions";
import FamilySettlement from "./FamilySettlement";
import FaqSection from "./FaqSection";
import Hero from "./Hero";
import LeadCapture from "./LeadCapture";
import LicensingSection from "./LicensingSection";
import OtherCourses from "./OtherCourses";
import { Footer, Header, MobileStickyCTA } from "./PageShell";
import PharmacyJourney from "./PharmacyJourney";
import SalarySection from "./SalarySection";
import StudyPathway from "./StudyPathway";
import SupportSection from "./SupportSection";
import WhyPharmacy from "./WhyPharmacy";

export default function PharmacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 mt-2">
    
      <main>
        <Hero />
        <WhyPharmacy />
        <SalarySection />
        <FamilySettlement />
        <CourseOptions />
        <CareerDirections />
        <StudyPathway />
        <LicensingSection />
        <SupportSection />
        <PharmacyJourney />
        <OtherCourses />
        <LeadCapture />
        <FaqSection />
        <BottomCTA />
      </main>
    </div>
  );
}
