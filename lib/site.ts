/**
 * Central site configuration – the single source of truth for brand identity,
 * canonical URL, and contact details.
 *
 * Import from here instead of hard-coding strings in components or metadata,
 * so a domain or email change only ever touches one file. All values here are
 * public by design; never put secrets (API tokens, list IDs) in this file –
 * those belong in environment variables read on the server only.
 */
export const siteConfig = {
  name: "Grazify",
  /** Used in <title> templates and OG/Twitter card titles. */
  title: "Grazify – B2B Grocery Supply",
  tagline: "B2B Grocery Supply",
  description:
    "Grazify is a B2B grocery supply platform connecting local farms and food producers directly to restaurants, cafés, hotels, retail chains and food businesses with fresh, traceable, wholesale ingredients and reliable delivery.",
  /** Canonical production origin – no trailing slash. */
  url: "https://grazify.farm",
  /** Public business contact address. */
  email: "grazify.farm@gmail.com",
} as const;

export type SiteConfig = typeof siteConfig;
