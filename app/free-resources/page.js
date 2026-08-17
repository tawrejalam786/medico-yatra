import ResourcesHero from "@/components/resources/ResourcesHero";
import WhyFreeSection from "@/components/resources/WhyFreeSection";
import ResourceCategories from "@/components/resources/ResourceCategories";
import FeaturedResources from "@/components/resources/FeaturedResources";
import HowToAccess from "@/components/resources/HowToAccess";
import LeadCaptureForm from "@/components/resources/LeadCaptureForm";
import BeyondResources from "@/components/resources/BeyondResources";
import ResourcesFAQ from "@/components/resources/ResourcesFAQ";
import FinalCTA from "@/components/resources/FinalCTA";

export const metadata = {
  title: "Free Resources for MBBS & Healthcare Abroad Students | Medico Yatra",
  description: "Download free guides — country comparisons, FMGE/NExT prep, visa checklists, education loan guides & SOP templates. One form, full access. Medico Yatra.",
  keywords: ["mbbs abroad free resources", "free mbbs abroad guide", "study abroad checklist india", "fmge preparation guide free", "education loan guide study abroad", "sop template medical students"],
};

export default function FreeResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ResourcesHero />
      <WhyFreeSection />
      <ResourceCategories />
      <FeaturedResources />
      <HowToAccess />
      <LeadCaptureForm />
      <BeyondResources />
      <ResourcesFAQ />
      <FinalCTA />
    </main>
  );
}
