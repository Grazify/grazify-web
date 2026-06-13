import { Building2, MapPin, Phone, Store } from "lucide-react";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import { businessTypes, heroChips } from "@/lib/constants";

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
              <form aria-label="Join the Grazify business waitlist" className="space-y-5">
                <div>
                  <label
                    htmlFor="business-name"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    Business name
                  </label>
                  <div className="flex items-center gap-2 rounded-2xl border border-grazify-border bg-grazify-soft px-4 focus-within:border-grazify-primary">
                    <Building2 className="h-4 w-4 text-muted" aria-hidden="true" />
                    <input
                      id="business-name"
                      name="business-name"
                      type="text"
                      autoComplete="organization"
                      placeholder="e.g. Parner Bhavan"
                      className="w-full bg-transparent py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    Phone number
                  </label>
                  <div className="flex items-center gap-2 rounded-2xl border border-grazify-border bg-grazify-soft px-4 focus-within:border-grazify-primary">
                    <Phone className="h-4 w-4 text-muted" aria-hidden="true" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-transparent py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="business-type"
                      className="mb-1.5 block text-sm font-semibold text-ink"
                    >
                      Business type
                    </label>
                    <div className="flex items-center gap-2 rounded-2xl border border-grazify-border bg-grazify-soft px-4 focus-within:border-grazify-primary">
                      <Store className="h-4 w-4 text-muted" aria-hidden="true" />
                      <select
                        id="business-type"
                        name="business-type"
                        defaultValue=""
                        className="w-full bg-transparent py-3 text-sm text-ink focus:outline-none"
                      >
                        <option value="" disabled>
                          Select type
                        </option>
                        {businessTypes.map((type) => (
                          <option key={type.label} value={type.label}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="mb-1.5 block text-sm font-semibold text-ink"
                    >
                      City
                    </label>
                    <div className="flex items-center gap-2 rounded-2xl border border-grazify-border bg-grazify-soft px-4 focus-within:border-grazify-primary">
                      <MapPin className="h-4 w-4 text-muted" aria-hidden="true" />
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="e.g. Pune"
                        className="w-full bg-transparent py-3 text-sm text-ink placeholder:text-muted focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button type="button" className="btn-primary w-full py-3.5">
                  Join Waitlist
                </button>

                <p className="text-center text-xs text-muted">
                  Grazify is a B2B platform. We&apos;ll only reach out about
                  business supply access.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
