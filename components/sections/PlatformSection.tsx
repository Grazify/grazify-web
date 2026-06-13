import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import PlatformBadge from "@/components/common/PlatformBadge";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { platformCards } from "@/lib/constants";

export default function PlatformSection() {
  return (
    <section id="platforms" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Platforms"
          title="One supply chain, every screen"
          subtitle="Grazify is coming to mobile and desktop. Order, reorder, and manage procurement from wherever you run your business."
        />

        {/* Platform cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {platformCards.map((platform, index) => (
            <Reveal key={platform.name} delay={index * 100}>
              <article className="lift flex h-full flex-col rounded-3xl border border-grazify-border bg-white p-7 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-grazify-light text-grazify-dark">
                  <platform.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">
                  {platform.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {platform.description}
                </p>
                <div className="mt-5 flex justify-center">
                  <PlatformBadge />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a href="#waitlist" className="btn-primary">
            Get early access
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
