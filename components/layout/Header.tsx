import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import { navLinks } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 pt-3 sm:pt-5">
      <Container>
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-4 rounded-full border border-white/60 bg-white/65 px-4 py-3.5 shadow-glass ring-1 ring-grazify-border/40 backdrop-blur-2xl backdrop-saturate-150 sm:px-6 sm:py-4"
        >
          {/* Logo */}
          <a
            href="#top"
            aria-label="Grazify — B2B Grocery Supply"
            className="flex items-center"
          >
            <Logo />
          </a>

          {/* Nav links */}
          <ul className="hidden items-center gap-1.5 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="whitespace-nowrap rounded-full px-4 py-2 text-[15px] font-semibold text-ink/85 transition-colors hover:bg-grazify-mint hover:text-grazify-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a href="#waitlist" className="btn-primary px-5 py-2.5 text-[15px]">
            Join Waitlist
          </a>
        </nav>
      </Container>
    </header>
  );
}
