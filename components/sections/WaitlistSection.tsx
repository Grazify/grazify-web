import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import WaitlistForm from "@/components/sections/WaitlistForm";
import { heroChips } from "@/lib/constants";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-20 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-grazify-border bg-white shadow-card">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Waitlist copy */}
            <div className="relative overflow-hidden bg-grazify-gradient p-8 text-white sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(#ffffff 1.4px, transparent 1.4px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative">
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                  Ready to simplify your grocery supply?
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                  Join the Grazify business waitlist and be the first to access
                  direct farm-to-business grocery supply.
                </p>
                <ul className="mt-8 space-y-3">
                  {heroChips.map((chip) => (
                    <li key={chip.label} className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-sm">
                        {chip.emoji}
                      </span>
                      <span className="text-sm font-medium text-white/90">
                        {chip.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Waitlist form */}
            <Reveal className="p-8 sm:p-10">
              <WaitlistForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
