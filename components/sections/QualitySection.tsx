import { Check, ShieldCheck } from "lucide-react";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { qualityFeatures } from "@/lib/constants";

const dashboardRows = [
  { label: "Quality passed", value: "Inspected & graded" },
  { label: "Delivery scheduled", value: "Tomorrow, 11:30 AM" },
  { label: "Origin verified", value: "Partner farm tagged" },
];

export default function QualitySection() {
  return (
    <section id="quality" className="bg-grazify-mint py-20 sm:py-24">
      <Container>
        <SectionHeading
          align="left"
          eyebrow="Quality You Can Trust"
          title="Freshness your kitchen can depend on"
          subtitle="Every order moves through a transparent chain of checks — so what arrives at your business is consistent, traceable, and genuinely fresh."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Quality features */}
          <div className="grid gap-5 sm:grid-cols-2">
            {qualityFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={(index % 2) * 90}>
                <article className="lift h-full rounded-3xl border border-grazify-border bg-white p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-grazify-light text-grazify-dark">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Mini dashboard card */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-grazify-border bg-white p-6 shadow-card lg:sticky lg:top-28">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-grazify-gradient text-white shadow-float">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">
                      Today&apos;s supply status
                    </p>
                    <p className="text-xs text-muted">Order ORD-109DA29A</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-grazify-light px-3 py-1 text-xs font-semibold text-grazify-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-grazify-primary animate-pulse-ring" />
                  Live
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {dashboardRows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-grazify-border bg-grazify-soft px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-grazify-primary text-white">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-ink">
                        {row.label}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-muted">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl bg-grazify-gradient p-4 text-white">
                <p className="text-xs font-medium text-white/80">
                  Batch freshness score
                </p>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-2xl font-bold">A-Grade</span>
                  <span className="text-xs text-white/80">100% checks passed</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
