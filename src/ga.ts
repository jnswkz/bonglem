// src/ga.ts
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const GA_ID = "G-2NJ0JH4S11";

export function pageview(path: string) {
  if (!window.gtag) return;
  window.gtag("config", GA_ID, {
    page_path: path,
  });
}
