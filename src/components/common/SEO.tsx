import { Metadata } from "next";
import { SITE_CONFIG } from "@/utils/constants";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  noindex?: boolean;
}

export function generateSEO({
  title,
  description,
  keywords,
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonical,
  noindex = false,
}: SEOProps = {}): Metadata {
  const pageTitle = title 
    ? `${title} | ${SITE_CONFIG.name}` 
    : SITE_CONFIG.title;
  
  const pageDescription = description || SITE_CONFIG.description;
  const pageKeywords = keywords || [...SITE_CONFIG.keywords];
  const pageUrl = canonical ? `${SITE_CONFIG.url}${canonical}` : SITE_CONFIG.url;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: ogType as "website" | "article",
      locale: "en_US",
      url: pageUrl,
      siteName: SITE_CONFIG.name,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: SITE_CONFIG.googleVerificationCode,
    },
  };
}

