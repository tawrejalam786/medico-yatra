import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";

// Load Poppins via next/font (Manjari is loaded via @import in globals.css
// because it is not available in the next/font Google catalogue)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.medicoyatra.com"),
  title: {
    default: "Study Healthcare Courses Abroad (MBBS, Nursing & more) | Medico Yatra",
    template: "%s | Medico Yatra",
  },
  description:
    "Specialist guidance for healthcare careers abroad — MBBS, Dentistry, Nursing, Pharmacy, Physiotherapy & more. Find your country in 30 seconds, or book free counselling. NMC-recognised universities, FMGE/NExT & USMLE coaching.",
  keywords: [
    "healthcare courses abroad",
    "medical courses abroad for Indian students",
    "study MBBS abroad",
    "nursing abroad for Indian students",
    "BDS abroad",
    "pharmacy abroad",
    "physiotherapy abroad",
    "NMC recognised universities",
    "FMGE NExT coaching",
    "USMLE guidance",
    "healthcare career abroad",
    "Medico Yatra",
    "Future Yatra",
  ],
  authors: [{ name: "Medico Yatra — Future Yatra Private Limited" }],
  creator: "Future Yatra Private Limited",
  publisher: "Future Yatra Private Limited",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.medicoyatra.com",
    siteName: "Medico Yatra",
    title: "Study Healthcare Courses Abroad (MBBS, Nursing & more) | Medico Yatra",
    description:
      "Specialist guidance for healthcare careers abroad — MBBS, Dentistry, Nursing, Pharmacy, Physiotherapy & more. Find your country in 30 seconds, or book free counselling.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medico Yatra — Healthcare Career Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Healthcare Courses Abroad | Medico Yatra",
    description:
      "Specialist guidance for healthcare careers abroad — MBBS, Dentistry, Nursing, Pharmacy, Physiotherapy & more.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.medicoyatra.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        {/*
          Manjari is loaded via @import in globals.css.
          Preconnect to Google Fonts for performance.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Manjari is not in the next/font catalogue — load via standard <link> tag */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-white text-ink min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
