import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/* Build-time sitemap. The site is a single-page app, so it advertises just the
   homepage; add entries here if standalone routes (e.g. /privacy) are added. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
