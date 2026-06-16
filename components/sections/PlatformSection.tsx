import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import PlatformBadge from "@/components/common/PlatformBadge";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { platformCards } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function PlatformSection() {
  return (
    <section id="platforms" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Platforms"
          title="One supply chain, every screen"
          subtitle="Grazify is coming to mobile and desktop. Order, reorder, and manage procurement from wherever you run your business."
        />

        {/* Platform cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {platformCards.map((platform, index) => {
            const multi = platform.logos.length > 1;
            return (
              <Reveal key={platform.name} delay={index * 100}>
                <article className="tap-card flex h-full flex-col rounded-3xl border border-grazify-border bg-white p-7 text-center">
                  {/* Platform logos */}
                  <div className="flex min-h-[64px] items-center justify-center gap-2.5">
                    {platform.logos.map((logo) => (
                      <span
                        key={logo.label}
                        title={logo.label}
                        className={cn(
                          "grid place-items-center rounded-2xl bg-grazify-soft ring-1 ring-grazify-border",
                          multi ? "h-12 w-12 p-2.5" : "h-16 w-16 p-3.5",
                        )}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.label}
                          width={44}
                          height={44}
                          unoptimized
                          loading="eager"
                          className="h-full w-full object-contain"
                        />
                      </span>
                    ))}
                  </div>
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
            );
          })}
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
