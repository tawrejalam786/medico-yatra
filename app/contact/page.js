"use client";

import AvailabilitySection from "@/components/contact/AvailabilitySection";
// import BreadcrumbSection from "@/components/contact/BreadcrumbSection";
import ContactCTA from "@/components/contact/ContactCTA";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import CounsellingForm from "@/components/contact/CounsellingForm";
import GlobalOffices from "@/components/contact/GlobalOffices";
import QuickContactOptions from "@/components/contact/QuickContactOptions";
import WhatHappensNext from "@/components/contact/WhatHappensNext";

const Contact = () => {
    const ConDesign = (
        <>
          <ContactHero />
          {/* <BreadcrumbSection /> */}
          {/* <ContactSection /> */}
          <QuickContactOptions />
          <CounsellingForm />
          <WhatHappensNext />
          <GlobalOffices />
          <AvailabilitySection />
          <ContactFAQ />
          {/* <ContactCTA /> */}
        </>
    )
    return ConDesign;
}

export default Contact;