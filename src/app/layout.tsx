import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.setkorp.com"),
  title: "Dubai Business Setup | Setkorp - #1 Freezone & Mainland Incorporation",
  description: "Launch your Dubai business in 14 days with Setkorp. Expert business incorporation, corporate banking, real estate & accounting for freezone and mainland setups in the UAE.",
  keywords: ["Dubai Business Setup", "Company Incorporation Dubai", "UAE Freezone License", "Mainland Business Setup Dubai", "Corporate Banking UAE", "Setkorp Business Consultancy"],
  authors: [{ name: "Setkorp Team" }],
  openGraph: {
    title: "Dubai Business Setup | Setkorp - #1 Freezone & Mainland Incorporation",
    description: "Launch your Dubai business in 14 days with Setkorp. Expert business incorporation, corporate banking, real estate & accounting.",
    url: "https://www.setkorp.com",
    siteName: "Setkorp",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Setkorp Dubai Business Setup",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Business Setup | Setkorp",
    description: "Launch your Dubai business in 14 days with Setkorp.",
    images: ["/og-image.webp"],
  },
  alternates: {
    canonical: "https://www.setkorp.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preload" href="/hero-section-video.webm" as="video" type="video/webm" fetchPriority="high" />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} antialiased text-slate-900 font-sans overflow-x-hidden`}
        style={{ backgroundColor: "#FDFDFD" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Setkorp Business Consultancy",
              "image": "https://www.setkorp.com/og-image.webp",
              "@id": "https://www.setkorp.com",
              "url": "https://www.setkorp.com",
              "telephone": "+97140000000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Business Bay, Premium Tower",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.185,
                "longitude": 55.275
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/setkorp",
                "https://twitter.com/setkorp"
              ]
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

