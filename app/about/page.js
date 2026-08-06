"use client"
import AboutHero from "@/components/about/AboutHero";
import AboutStats from "@/components/about/AboutStats";
import FounderSection from "@/components/about/FounderSection";
import MissionValues from "@/components/about/MissionValues";
import TeamSection from "@/components/about/TeamSection";
import WhyChoose from "@/components/about/WhyChoose";

const AboutHeroPage = () => {
    const designCom = (
        <>
           <AboutHero />
           <AboutStats />
           <FounderSection />
           <MissionValues />
           <WhyChoose />
           <TeamSection />
        </>
    )
    return designCom;
}

export default AboutHeroPage;