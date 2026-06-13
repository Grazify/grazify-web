import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* Gilroy — only Light + ExtraBold are free, mapped across the weight range */
const gilroy = localFont({
  src: [
    { path: "./fonts/Gilroy-Light.otf", weight: "300 500", style: "normal" },
    { path: "./fonts/Gilroy-ExtraBold.otf", weight: "600 800", style: "normal" },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grazify.com"),
  title: {
    default: "Grazify — B2B Grocery Supply",
    template: "%s | Grazify",
  },
  description:
    "Grazify is a B2B grocery supply platform connecting local farms and food producers directly to restaurants, cafés, hotels, retail chains and food businesses with fresh, traceable, wholesale ingredients and reliable delivery.",
  keywords: [
    "B2B grocery supply",
    "farm to business",
    "wholesale vegetables",
    "restaurant supply",
    "fresh produce supply",
    "food supply chain",
    "Grazify",
  ],
  authors: [{ name: "Grazify" }],
  openGraph: {
    title: "Grazify — B2B Grocery Supply, From Farm to Business",
    description:
      "Fresh, traceable, wholesale grocery supply sourced directly from farms and delivered to your business.",
    type: "website",
    siteName: "Grazify",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grazify — B2B Grocery Supply",
    description:
      "The sustainable path from farm to business. Fresh, traceable, wholesale grocery supply for food businesses.",
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
      <body className="min-h-screen font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
