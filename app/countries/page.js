import CountriesHero from "@/components/countries/CountriesHero";
import CountryExplorer from "@/components/countries/CountryExplorer";
import WhyStudyAbroad from "@/components/countries/WhyStudyAbroad";
import CountryConsultationCTA from "@/components/countries/CountryConsultationCTA";

export default function CountriesPage() {
  return (
    <main>
      <CountriesHero />

      <CountryExplorer />

      <WhyStudyAbroad />

      <CountryConsultationCTA />
    </main>
  );
}