import { Leaf } from "lucide-react";
import Container from "@/components/common/Container";
import { navLinks } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 pt-3 sm:pt-4">
      <Container>
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-4 rounded-full border border-grazify-border bg-white/80 px-4 py-2.5 shadow-glass backdrop-blur-xl sm:px-5"
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-grazify-gradient text-white shadow-float">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-ink">
                Grazify
              </span>
              <span className="text-[11px] font-medium text-muted">
                B2B Grocery Supply
              </span>
            </span>
          </a>

          {/* Nav links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-grazify-mint hover:text-grazify-dark"
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
