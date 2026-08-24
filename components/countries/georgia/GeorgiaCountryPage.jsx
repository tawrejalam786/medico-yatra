import GeorgiaHero from "./sections/GeorgiaHero";
import GeorgiaSnapshot from "./sections/GeorgiaSnapshot";
import AboutGeorgia from "./sections/AboutGeorgia";
import WhyGeorgia from "./sections/WhyGeorgia";
import Programmes from "./sections/Programmes";
import Universities from "./sections/Universities";
import StudentLife from "./sections/StudentLife";
import CostSection from "./sections/CostSection";
import Licensing from "./sections/Licensing";
import Journey from "./sections/Journey";
import LeadForm from "./sections/LeadForm";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import InternalLinks from "./sections/InternalLinks";
import MobileStickyBar from "./MobileStickyBar";

export default function GeorgiaCountryPage() {
  return (
    <main className="overflow-x-hidden bg-white pb-20 text-slate-900 lg:pb-0">
      <GeorgiaHero />
      <GeorgiaSnapshot />
      <AboutGeorgia />
      <WhyGeorgia />
      <Programmes />
      <Universities />
      <StudentLife />
      <CostSection />
      <Licensing />
      <Journey />
      <LeadForm />
      <FAQ />
      <FinalCTA />
      <InternalLinks />
      <MobileStickyBar />
    </main>
  );
}
