"use client"
import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import FutureYatraSection from "@/components/about/FutureYatraSection";
import MissionSection from "@/components/about/MissionSection";
import OurApproach from "@/components/about/OurApproach";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";
import OurValues from "@/components/about/OurValues";
import WhatMakesDifferent from "@/components/about/WhatMakesDifferent";
import WhatWeDo from "@/components/about/WhatWeDo";
import WhyParentsTrustUs from "@/components/about/WhyParentsTrustUs";

const AboutHeroPage = () => {
    const designCom = (
        <>
           <AboutHero />
           <OurStory />
           <MissionSection />
           <WhatMakesDifferent />
           <OurApproach />
           <OurValues />
           <WhatWeDo />
           <FutureYatraSection />
           <OurTeam />
           <WhyParentsTrustUs />
           <AboutCTA />
          
        </>
    )
    return designCom;
}

export default AboutHeroPage;