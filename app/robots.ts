import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/* robots.txt – allow all crawlers, disallow the API surface, and point to the
   sitemap. Generated at build time from the canonical site URL. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
