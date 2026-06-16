import { ChevronDown } from "lucide-react";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { faqs } from "@/lib/constants";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-grazify-mint py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Everything business owners ask before joining the Grazify waitlist."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={(index % 3) * 80}>
              <details className="tap-card group rounded-3xl border border-grazify-border bg-white px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-base font-semibold text-ink sm:text-lg">
                    {faq.question}
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-grazify-light text-grazify-dark transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
