import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { businessTypes } from "@/lib/constants";

export default function BusinessTypesSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Built For Business"
          title="Built for businesses that need freshness, consistency, and predictable supply."
          subtitle="If you run a kitchen, a store, or a food operation, Grazify is your direct line to dependable wholesale supply."
        />

        {/* Business types */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {businessTypes.map((type, index) => (
            <Reveal key={type.label} delay={(index % 4) * 80}>
              <article className="lift flex h-full flex-col rounded-3xl border border-grazify-border bg-white p-5 text-left">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-grazify-light text-2xl">
                  <span aria-hidden="true">{type.emoji}</span>
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">
                  {type.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {type.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
