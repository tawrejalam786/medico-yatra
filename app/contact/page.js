"use client";

import BreadcrumbSection from "@/components/contact/BreadcrumbSection";
import ContactCTA from "@/components/contact/ContactCTA";
import ContactSection from "@/components/contact/ContactSection";
import GlobalOffices from "@/components/contact/GlobalOffices";

const Contact = () => {
    const ConDesign = (
        <>
          <BreadcrumbSection />
          <ContactSection />
          <GlobalOffices />
          <ContactCTA />
        </>
    )
    return ConDesign;
}

export default Contact;