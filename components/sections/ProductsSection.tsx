import Container from "@/components/common/Container";
import IconTile from "@/components/common/IconTile";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import { productCategories } from "@/lib/constants";

export default function ProductsSection() {
  return (
    <section id="products" className="bg-grazify-mint py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Supply"
          title="Fresh categories sourced for your kitchen"
          subtitle="From everyday staples to custom business orders – every category is sourced directly from farms and producers, then quality checked before it reaches you."
        />

        {/* Product categories */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
            <Reveal key={category.title} delay={(index % 3) * 90}>
              <article className="tap-card group flex h-full items-start gap-4 rounded-3xl border border-grazify-border bg-white p-5">
                <IconTile className="h-14 w-14 text-2xl transition-colors group-hover:bg-grazify-primary/10">
                  <span aria-hidden="true">{category.emoji}</span>
                </IconTile>
                <div>
                  <h3 className="text-base font-bold text-ink">
                    {category.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {category.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
