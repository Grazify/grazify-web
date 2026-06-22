"use client";

import { useEffect, useState } from "react";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import { navLinks } from "@/lib/constants";

export default function Header() {
  /* Firm up the glass once the page scrolls off the hero, so nav text stays
     legible over busy content while staying near-transparent at the top. */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-3 sm:pt-5">
      <Container>
        <nav
          aria-label="Primary"
          data-scrolled={scrolled}
          className="navbar-glass flex items-center justify-between gap-4 rounded-full px-4 py-3.5 sm:px-6 sm:py-4"
        >
          {/* Logo */}
          <a
            href="#top"
            aria-label="Grazify – B2B Grocery Supply"
            className="tap flex items-center"
          >
            <Logo />
          </a>

          {/* Nav links */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold text-ink/80 hover:bg-grazify-mint hover:text-grazify-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#waitlist" className="btn-primary px-5 py-2.5 text-sm">
            Join Waitlist
          </a>
        </nav>
      </Container>
    </header>
  );
}
