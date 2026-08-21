"use client";

import FMGEExamStructure from "@/components/courses/fmge-next/FMGEExamStructure";
import FMGEFAQ from "@/components/courses/fmge-next/FMGEFAQ";
import FmgeHero from "@/components/courses/fmge-next/FmgeHero";
import FMGEJourneyRoadmap from "@/components/courses/fmge-next/FMGEJourneyRoadmap";
import FMGELeadCapture from "@/components/courses/fmge-next/FMGELeadCapture";
import FMGEOutcomes from "@/components/courses/fmge-next/FMGEOutcomes";
import FMGETrustStrip from "@/components/courses/fmge-next/FMGETrustStrip";
import FMGEUnderstanding from "@/components/courses/fmge-next/FMGEUnderstanding";
import HowMedicoYatraHelps from "@/components/courses/fmge-next/HowMedicoYatraHelps";
import OurMethodology from "@/components/courses/fmge-next/OurMethodology";
import ProgrammeIncludes from "@/components/courses/fmge-next/ProgrammeIncludes";
import USMLEPathway from "@/components/courses/fmge-next/USMLEPathway";
import WhyComparisonMatters from "@/components/courses/fmge-next/WhyComparisonMatters";
import WhyStudentsStruggle from "@/components/courses/fmge-next/WhyStudentsStruggle";


export default function FmgePage() {
  return (
       <>
         <FmgeHero />
         <FMGETrustStrip />
         <FMGEOutcomes />
         <FMGEUnderstanding />
         <WhyComparisonMatters />
         {/* <WhyStudentsStruggle /> */}
         <OurMethodology />
         <FMGEExamStructure />
         <ProgrammeIncludes />
         <USMLEPathway />
         <HowMedicoYatraHelps />
         <FMGEJourneyRoadmap />
         <FMGELeadCapture />
         <FMGEFAQ />
       </>
  );
}