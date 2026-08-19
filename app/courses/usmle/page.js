"use client";

import TrustStrip from "@/components/courses/usmle/TrustStrip";
import TwoPathsSection from "@/components/courses/usmle/TwoPathsSection";
import USMLEHero from "@/components/courses/usmle/USMLEHero";

const UsmleHeroPage = () => {
    const designCom = (
        <>
           <USMLEHero />
           <TrustStrip />
           <TwoPathsSection />
        </>
    )
    return designCom;
}

export default UsmleHeroPage;