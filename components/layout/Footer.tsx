import { Leaf } from "lucide-react";
import Container from "@/components/common/Container";
import PlatformBadge from "@/components/common/PlatformBadge";
import { navLinks, platformCards } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-grazify-border bg-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-grazify-gradient text-white shadow-float">
                <Leaf className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight text-ink">
                Grazify
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              The Sustainable Path — From Farm to Business. Fresh, traceable,
              wholesale grocery supply sourced directly from farms and producers
              for food businesses.
            </p>
          </div>

          {/* Explore links */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold text-ink">Explore</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-grazify-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coming soon platforms */}
          <div>
            <h3 className="text-sm font-semibold text-ink">Coming Soon</h3>
            <ul className="mt-4 space-y-3">
              {platformCards.map((platform) => (
                <li
                  key={platform.name}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="text-sm text-muted">{platform.name}</span>
                  <PlatformBadge />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-grazify-border pt-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>© {year} Grazify. All rights reserved.</p>
          <p>Built for businesses only · B2B Grocery Supply</p>
        </div>
      </Container>
    </footer>
  );
}
