import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import ScrollPath from "@/components/common/ScrollPath";
import SectionHeading from "@/components/common/SectionHeading";
import SupplyFlowVisual from "@/components/screens/SupplyFlowVisual";
import { supplySteps } from "@/lib/constants";

export default function SupplyChainSection() {
  return (
    <section id="supply-chain" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="The Sustainable Path"
          title="The sustainable path from farm to business"
          subtitle="Grazify sources directly from farmers and producers, checks quality, packs for freshness, and delivers straight to your business — no guesswork in between."
        />

        <Reveal className="mt-12">
          <SupplyFlowVisual />
        </Reveal>

        {/* Supply steps */}
        <div className="relative mt-14">
          <ScrollPath className="absolute left-0 right-0 top-8 hidden opacity-70 lg:block" />
          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supplySteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 90}>
                <li className="lift h-full rounded-3xl border border-grazify-border bg-white p-6 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-grazify-gradient text-white shadow-float">
                      <step.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="text-2xl font-bold text-grazify-light">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
