"use client";

import CourseHero from "./sections/MBBSHero";
import MBBSBenefits from "./sections/MBBSBenefits";
import MBBSJourneyComparison from "./sections/MBBSJourneyComparison";
import WhyMedicoYatra from "./sections/WhyMedicoYatra";
import MBBSJourneySection from "./sections/MBBSJourneySection";
import MBBSLeadCapture from "./sections/MBBSLeadCapture";
import MBBSFAQ from "./sections/MBBSFAQ";
import TopMBBSDestinations from "./sections/TopMBBSDestinations";

export default function CourseDetailPage({ course }) {
  return (
    <main>
      {/* Hero */}
      {course.sections.hero?.enabled && (
        <CourseHero data={course.sections} />
      )}

      {/* benefits */}
      {course.sections.benefits?.enabled && (
        <MBBSBenefits data={course.sections.benefits} />
      )}

      {/* MBBSJourneyComparison */}
      {course.sections.journeyComparison?.enabled && (
        <MBBSJourneyComparison data={course.sections.journeyComparison} />
      )}

      {/* TopMBBSDestinations */}
      {course.sections.topDestinations?.enabled && (
        <TopMBBSDestinations data={course.sections.topDestinations} />
      )}

      {/* whyMedicoYatra */}
      {course.sections.whyMedicoYatra?.enabled && (
        <WhyMedicoYatra data={course.sections.whyMedicoYatra} />
      )}

      {/* journey */}
      {course.sections.journey?.enabled && (
        <MBBSJourneySection data={course.sections.journey} />
      )}

      {/* MBBSLeadCapture */}
      {course.sections.leadCapture?.enabled && (
        <MBBSLeadCapture data={course.sections.leadCapture} />
      )}

      {/* faq */}
      {course.sections.faq?.enabled && (
        <MBBSFAQ data={course.sections.faq} />
      )}
      
    </main>
  );
}