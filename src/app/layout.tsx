import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";
import { generateSEO } from "@/components/common/SEO";
import { SITE_CONFIG } from "@/utils/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = generateSEO();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/assets/logos/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/assets/logos/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logos/favicon.ico" />
        <link rel="shortcut icon" href="/assets/logos/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": SITE_CONFIG.name,
              "url": SITE_CONFIG.url,
              "logo": `${SITE_CONFIG.url}/logo.png`,
              "description": SITE_CONFIG.tagline,
              "foundingDate": SITE_CONFIG.foundingYear,
              "email": SITE_CONFIG.contact.email,
              "sameAs": Object.values(SITE_CONFIG.social).filter(Boolean),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": SITE_CONFIG.name,
              "image": `${SITE_CONFIG.url}/logo.png`,
              "url": SITE_CONFIG.url,
              "telephone": SITE_CONFIG.contact.phone || "+1-XXX-XXX-XXXX", // TODO: Update in constants.ts
              "address": {
                "@type": "PostalAddress",
                // TODO: Update these with your actual business address details
                "streetAddress": SITE_CONFIG.contact.address || "Business Address",
                "addressLocality": "City", // TODO: e.g., "Sydney"
                "addressRegion": "State", // TODO: e.g., "NSW"
                "postalCode": "00000", // TODO: Your actual postal code
                "addressCountry": "US" // TODO: e.g., "AU" for Australia
              },
              "geo": {
                "@type": "GeoCoordinates",
                // TODO: Add your actual business location coordinates for local SEO
                // Use Google Maps to find: Right-click on location > Copy coordinates
                "latitude": 0.0,  // TODO: Replace with actual latitude
                "longitude": 0.0  // TODO: Replace with actual longitude
              },
              "priceRange": "$$",
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
                "closes": "17:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": SITE_CONFIG.name,
              "url": SITE_CONFIG.url,
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${SITE_CONFIG.url}/search?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
