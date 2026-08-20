"use client";

import TrustStrip from "@/components/courses/usmle/TrustStrip";
import TwoPathsSection from "@/components/courses/usmle/TwoPathsSection";
import UnderstandingUSMLE from "@/components/courses/usmle/UnderstandingUSMLE";
import USMLEHero from "@/components/courses/usmle/USMLEHero";

const UsmleHeroPage = () => {
    const designCom = (
        <>
           <USMLEHero />
           <TrustStrip />
           <TwoPathsSection />
           <UnderstandingUSMLE />
        </>
    )
    return designCom;
}

export default UsmleHeroPage;