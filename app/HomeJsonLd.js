/**
 * HomeJsonLd — Server Component
 * Injects JSON-LD structured data for the home page.
 * Using JSON.stringify with < → \u003c sanitisation to prevent XSS.
 */

import { FAQS } from "@/data/faqs";

export default function HomeJsonLd() {
  const baseUrl = "https://www.medicoyatra.com";

  // ── Organization ──────────────────────────────────────────────────────────
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${baseUrl}/#organization`,
    name: "Medico Yatra",
    alternateName: "Future Yatra Private Limited",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      width: 200,
      height: 60,
    },
    description:
      "Medico Yatra is a specialist healthcare-career guidance platform under Future Yatra Private Limited, helping students explore MBBS, Nursing, Dentistry, Pharmacy, Physiotherapy and allied health careers at NMC-recognised universities abroad.",
    sameAs: [
      "https://www.linkedin.com/company/medicoyatra",
      "https://www.facebook.com/medicoyatra",
      "https://www.instagram.com/medicoyatra",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi"],
    },
  };

  // ── WebSite + SearchAction ────────────────────────────────────────────────
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: "Medico Yatra",
    publisher: { "@id": `${baseUrl}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/countries?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // ── WebPage ───────────────────────────────────────────────────────────────
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    url: baseUrl,
    name: "Study Healthcare Courses Abroad (MBBS, Nursing & more) | Medico Yatra",
    description:
      "Specialist guidance for healthcare careers abroad — MBBS, Dentistry, Nursing, Pharmacy, Physiotherapy & more. Find your country in 30 seconds, or book free counselling.",
    isPartOf: { "@id": `${baseUrl}/#website` },
    publisher: { "@id": `${baseUrl}/#organization` },
    inLanguage: "en-IN",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
      ],
    },
  };

  // ── FAQPage ───────────────────────────────────────────────────────────────
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // Sanitise helper — replaces < with unicode escape to prevent XSS
  const safe = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safe(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safe(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safe(webpage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safe(faqPage) }}
      />
    </>
  );
}
