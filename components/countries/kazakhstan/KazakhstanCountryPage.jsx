import KazakhstanHero from "./sections/KazakhstanHero";
import KazakhstanSnapshot from "./sections/KazakhstanSnapshot";
import AboutKazakhstan from "./sections/AboutKazakhstan";
import WhyKazakhstan from "./sections/WhyKazakhstan";
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

export default function KazakhstanCountryPage() {
  return (
    <main className="overflow-x-hidden bg-white pb-20 text-slate-900 lg:pb-0">
      <KazakhstanHero />
      <KazakhstanSnapshot />
      <AboutKazakhstan />
      <WhyKazakhstan />
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
