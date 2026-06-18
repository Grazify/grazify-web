import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/site";
import "./globals.css";

/* Gilroy – only Light + ExtraBold are free, mapped across the weight range.
   Self-hosted via next/font/local so there is no runtime network request. */
const gilroy = localFont({
  src: [
    { path: "./fonts/Gilroy-Light.otf", weight: "300 500", style: "normal" },
    { path: "./fonts/Gilroy-ExtraBold.otf", weight: "600 800", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

const hashScrollBootstrap = `
(() => {
  const hash = window.location.hash;
  if (!hash || hash === "#" || hash === "#top" || hash === "#main-content") return;

  const root = document.documentElement;
  root.dataset.hashScroll = "pending";

  const clear = () => {
    delete root.dataset.hashScroll;
  };

  const target = () => {
    try {
      return document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch {
      return null;
    }
  };

  const align = () => {
    const node = target();
    if (!node) {
      clear();
      return;
    }

    node.scrollIntoView({ block: "start", behavior: "auto" });
    requestAnimationFrame(() => {
      node.scrollIntoView({ block: "start", behavior: "auto" });
      clear();
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", align, { once: true });
  } else {
    align();
  }

  window.addEventListener("load", () => {
    target()?.scrollIntoView({ block: "start", behavior: "auto" });
  }, { once: true });

  window.setTimeout(clear, 1200);
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "B2B grocery supply",
    "farm to business",
    "wholesale vegetables",
    "restaurant supply",
    "fresh produce supply",
    "food supply chain",
    "Grazify",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grazify – B2B Grocery Supply, From Farm to Business",
    description:
      "Fresh, traceable, wholesale grocery supply sourced directly from farms and delivered to your business.",
    url: siteConfig.url,
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      "The sustainable path from farm to business. Fresh, traceable, wholesale grocery supply for food businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#1B8A4B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gilroy.variable}>
      <head>
        <script
          id="hash-scroll-bootstrap"
          dangerouslySetInnerHTML={{ __html: hashScrollBootstrap }}
        />
      </head>
      <body className="min-h-screen font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
