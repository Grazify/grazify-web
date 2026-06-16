import Container from "@/components/common/Container";
import IconTile from "@/components/common/IconTile";
import Reveal from "@/components/common/Reveal";
import ScrollDrawPath from "@/components/common/ScrollDrawPath";
import SectionHeading from "@/components/common/SectionHeading";
import SupplyFlowVisual from "@/components/screens/SupplyFlowVisual";
import { supplySteps } from "@/lib/constants";

/* Vertical serpentine spine that draws itself down the timeline as the section
   scrolls past (see ScrollDrawPath). Weaves around the centre of an 80-wide,
   1000-tall viewBox; preserveAspectRatio="none" stretches it to the gutter. */
const SNAKE_PATH =
  "M40 0 C40 110 66 150 66 250 S14 350 14 450 S66 550 66 650 S14 750 14 850 S40 960 40 1000";

export default function SupplyChainSection() {
  return (
    <section id="supply-chain" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Sustainable Path"
          title="The sustainable path from farm to business"
          subtitle="Grazify sources directly from farmers and producers, checks quality, packs for freshness, and delivers straight to your business – no guesswork in between."
        />

        <Reveal className="mt-12">
          <SupplyFlowVisual />
        </Reveal>

        {/* Supply steps — vertical timeline with a snake spine that draws as
            you scroll down through the steps. */}
        <div className="relative mx-auto mt-14 max-w-2xl pl-14 sm:pl-24">
          <ScrollDrawPath
            d={SNAKE_PATH}
            viewBox="0 0 80 1000"
            strokeWidth={4}
            className="absolute inset-y-0 left-0 w-14 sm:w-20"
          />
          <ol className="space-y-6 sm:space-y-8">
            {supplySteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 90}>
                <li className="tap-card rounded-3xl border border-grazify-border bg-white p-6">
                  <div className="flex items-center gap-4">
                    <IconTile variant="gradient" className="h-12 w-12">
                      <step.icon className="h-6 w-6" aria-hidden="true" />
                    </IconTile>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.12em] text-grazify-primary">
                        Step {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-ink">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
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
