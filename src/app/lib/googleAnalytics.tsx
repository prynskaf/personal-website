"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_TRACKING_ID = "G-Z4L11XRBMS";

declare global {
  interface Window {
    gtag: (
      command: string,
      target: string,
      params?: { [key: string]: string }
    ) => void;
    dataLayer: Array<{
      [key: string]: string | number | object;
    }>;
  }
}

// Function to track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Google Analytics Component
const GoogleAnalytics = () => {
  const pathname = usePathname(); 

  useEffect(() => {
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]); 

  return (
    <>
      {/* Load Google Analytics script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      {/* Initialize Google Analytics */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
