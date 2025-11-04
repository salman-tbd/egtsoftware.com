// Google Analytics 4 Setup

import { SITE_CONFIG } from "@/utils/constants";

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== "undefined" && SITE_CONFIG.googleAnalyticsId) {
    const now = new Date();
    window.gtag("js", now.toISOString());
    window.gtag("config", SITE_CONFIG.googleAnalyticsId, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const logPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", SITE_CONFIG.googleAnalyticsId, {
      page_path: url,
    });
  }
};

// Track events
export const logEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track custom events
export const trackButtonClick = (buttonName: string) => {
  logEvent("click", "Button", buttonName);
};

export const trackFormSubmission = (formName: string) => {
  logEvent("submit", "Form", formName);
};

export const trackLinkClick = (linkName: string) => {
  logEvent("click", "Link", linkName);
};

