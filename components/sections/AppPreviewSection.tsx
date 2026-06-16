import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import AppScreenshot from "@/components/screens/AppScreenshot";
import { previewScreens } from "@/lib/constants";

export default function AppPreviewSection() {
  return (
    <section className="bg-grazify-mint py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Inside The App"
          title="A clean ordering experience, end to end"
          subtitle="A look at how businesses browse, order, and track their fresh supply on Grazify – home listings, categories, cart, and orders."
        />

        {/* App preview gallery */}
        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-grazify-gradient opacity-[0.08] blur-3xl"
          />
          <div className="relative grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {previewScreens.map((screen, index) => (
              <Reveal key={screen.id} delay={(index % 3) * 90}>
                <figure className="flex flex-col items-center">
                  <AppScreenshot
                    src={screen.src}
                    alt={screen.alt}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 320px"
                    className="h-[380px] w-full max-w-[300px] sm:h-[440px]"
                  />
                  <figcaption className="mt-5 max-w-xs text-center">
                    <h3 className="text-base font-bold text-ink">
                      {screen.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {screen.caption}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
