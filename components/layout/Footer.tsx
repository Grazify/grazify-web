import { Mail } from "lucide-react";
import Container from "@/components/common/Container";
import IconTile from "@/components/common/IconTile";
import Logo from "@/components/common/Logo";
import PlatformBadge from "@/components/common/PlatformBadge";
import { navLinks, platformCards } from "@/lib/constants";
import { siteConfig } from "@/lib/site";

/* Shared footer column heading – small, uppercase, tracked to match the brand
   lockup's tagline treatment. */
function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">
      {children}
    </h3>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-grazify-border bg-white">
      <Container className="py-14">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-[1.6fr_0.9fr_1.15fr_1.4fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              The Sustainable Path – From Farm to Business. Fresh, traceable,
              wholesale grocery supply sourced directly from farms and producers
              for food businesses.
            </p>
          </div>

          {/* Explore links */}
          <nav aria-label="Footer">
            <ColumnHeading>Explore</ColumnHeading>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-grazify-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coming soon platforms */}
          <div>
            <ColumnHeading>Coming Soon</ColumnHeading>
            <ul className="mt-4 space-y-2.5">
              {platformCards.map((platform) => (
                <li
                  key={platform.name}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="whitespace-nowrap text-sm text-muted">
                    {platform.name}
                  </span>
                  <PlatformBadge label="Soon" className="shrink-0" />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ColumnHeading>Get in touch</ColumnHeading>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Questions about business supply? We&apos;d love to hear from you.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="tap-card group mt-4 flex items-center gap-3 rounded-2xl border border-grazify-border bg-grazify-soft p-3"
            >
              <IconTile variant="gradient" rounded="rounded-xl" className="h-10 w-10">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </IconTile>
              <span className="flex min-w-0 flex-col">
                <span className="text-[11px] font-medium uppercase tracking-wide text-muted">
                  Email us
                </span>
                <span className="truncate text-sm font-semibold text-ink transition-colors group-hover:text-grazify-primary">
                  {siteConfig.email}
                </span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-grazify-border pt-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built for businesses only · {siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
