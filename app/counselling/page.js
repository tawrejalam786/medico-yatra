import CounsellingCTA from "@/components/counselling/CounsellingCTA";
import CounsellorsHero from "@/components/counselling/CounsellorsHero";
import CounsellorShowcase from "@/components/counselling/CounsellorShowcase";
import WhyTrustCounsellors from "@/components/counselling/WhyTrustCounsellors";

export default function CounsellorsPage() {
  return (
    <>
      <CounsellorsHero />

      <CounsellorShowcase />

       <WhyTrustCounsellors />

       <CounsellingCTA />
  </>
  );
}