"use client";

import Script from "next/script";
import { SITE_CONFIG } from "@/utils/constants";
import { initGA } from "@/lib/analytics";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (SITE_CONFIG.googleAnalyticsId) {
      initGA();
    }
  }, []);

  if (!SITE_CONFIG.googleAnalyticsId) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.googleAnalyticsId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE_CONFIG.googleAnalyticsId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

