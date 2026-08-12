"use client";

import MBBSBenefits from "./MBBSBenefits";
import MBBSFAQ from "./MBBSFAQ";
import MBBSHero from "./MBBSHero";
import MBBSJourneyComparison from "./MBBSJourneyComparison";
import MBBSJourneySection from "./MBBSJourneySection";
import MBBSLeadCapture from "./MBBSLeadCapture";
import TopMBBSDestinations from "./TopMBBSDestinations";
import WhyMedicoYatra from "./WhyMedicoYatra";

export default function MBBSPage() {
  return (
    <main>
      <MBBSHero />

      <MBBSBenefits />

      <MBBSJourneyComparison />

      <TopMBBSDestinations />

      <WhyMedicoYatra />

      <MBBSJourneySection />

      <MBBSLeadCapture />

      <MBBSFAQ />
    </main>
  );
}