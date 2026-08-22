import RussiaHero from "./sections/RussiaHero";
import RussiaSnapshot from "./sections/RussiaSnapshot";
import AboutRussia from "./sections/AboutRussia";
import WhyRussia from "./sections/WhyRussia";
import Programmes from "./sections/Programmes";
import Universities from "./sections/Universities";
import StudentLife from "./sections/StudentLife";
import CostSection from "./sections/CostSection";
import Licensing from "./sections/Licensing";
import Journey from "./sections/Journey";
import LeadForm from "./sections/LeadForm";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import MobileStickyBar from "./MobileStickyBar";

export default function RussiaCountryPage() {
  return (
    <main className="overflow-x-hidden bg-white pb-20 text-slate-900 lg:pb-0">
      <RussiaHero />
      <RussiaSnapshot />
      <AboutRussia />
      <WhyRussia />
      <Programmes />
      <Universities />
      <StudentLife />
      <CostSection />
      <Licensing />
      <Journey />
      <LeadForm />
      <FAQ />
      <FinalCTA />
      <MobileStickyBar />
    </main>
  );
}
