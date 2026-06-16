import Container from "@/components/common/Container";
import IconTile from "@/components/common/IconTile";
import Reveal from "@/components/common/Reveal";
import ScrollDrawPath from "@/components/common/ScrollDrawPath";
import SectionHeading from "@/components/common/SectionHeading";
import SupplyFlowVisual from "@/components/screens/SupplyFlowVisual";
import { supplySteps } from "@/lib/constants";

/* Straight vertical spine, centred in a 60-wide viewBox so every station node
   sits exactly on it. It draws itself down the timeline as the section scrolls
   (see ScrollDrawPath); preserveAspectRatio="none" stretches it to the gutter. */
const TIMELINE_PATH = "M30 0 L30 1000";

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
        <div className="relative mx-auto mt-14 max-w-3xl pl-10 sm:pl-14">
          <ScrollDrawPath
            d={TIMELINE_PATH}
            viewBox="0 0 60 1000"
            strokeWidth={5}
            className="absolute inset-y-6 left-0 w-10 [mask-image:linear-gradient(to_bottom,transparent,#000_5%,#000_95%,transparent)] sm:w-14"
          />
          <ol className="space-y-5">
            {supplySteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 90}>
                <li className="tap-card relative rounded-3xl border border-grazify-border bg-white p-6">
                  {/* Connector tick from the spine node into the card */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[-20px] top-12 h-0.5 w-5 -translate-y-1/2 bg-grazify-primary/30 sm:left-[-28px] sm:w-7"
                  />
                  {/* Station node on the spine, aligned with the icon row */}
                  <span
                    aria-hidden="true"
                    className="animate-pulse-ring absolute left-[-20px] top-12 block h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-grazify-gradient sm:left-[-28px]"
                  />
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
