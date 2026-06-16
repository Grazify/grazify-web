import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  IndianRupee,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/common/Container";
import DottedPattern from "@/components/common/DottedPattern";
import IconTile from "@/components/common/IconTile";
import Reveal from "@/components/common/Reveal";
import AppScreenshot from "@/components/screens/AppScreenshot";
import { heroChips, previewScreens } from "@/lib/constants";

const heroScreen = previewScreens.find((screen) => screen.id === "home")!;

type FloatingCard = {
  icon: LucideIcon;
  title: string;
  note: string;
  position: string;
  delay: string;
};

const floatingCards: FloatingCard[] = [
  {
    icon: BadgeCheck,
    title: "Quality checked",
    note: "Inspected at source",
    position: "-left-4 top-10 sm:-left-8",
    delay: "",
  },
  {
    icon: MapPin,
    title: "Traceable origin",
    note: "Know every farm",
    position: "-right-3 top-24 sm:-right-7",
    delay: "float-delay-1",
  },
  {
    icon: CalendarClock,
    title: "Scheduled delivery",
    note: "On-time, every time",
    position: "-left-3 bottom-20 sm:-left-7",
    delay: "float-delay-2",
  },
  {
    icon: IndianRupee,
    title: "Wholesale pricing",
    note: "Business-only rates",
    position: "-right-4 bottom-8 sm:-right-8",
    delay: "float-delay-3",
  },
];

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-x-clip">
      <DottedPattern className="left-1/2 top-10 h-72 w-72 -translate-x-1/2" />

      <Container className="relative grid items-center gap-10 py-10 lg:grid-cols-2 lg:gap-6 lg:py-14 xl:py-20">
        {/* Hero copy */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-grazify-border bg-white/70 px-4 py-1.5 text-sm font-medium text-grazify-dark backdrop-blur">
            🌾 Direct from farms • Built for businesses
          </span>

          <h1 className="mt-4 text-balance text-[2.15rem] font-bold leading-[1.1] tracking-tight text-ink sm:text-[2.6rem] lg:text-[2.6rem] xl:text-5xl">
            Fresh grocery supply,{" "}
            <span className="text-grazify-primary">from farm to business</span>
          </h1>

          <p className="mt-4 max-w-lg text-pretty text-[0.9rem] leading-relaxed text-muted sm:text-[0.95rem] lg:max-w-sm xl:max-w-md">
            Grazify connects local farms and food producers with restaurants,
            cafés, canteens, retail chains, and food businesses through reliable
            wholesale delivery of fresh, traceable ingredients.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#waitlist" className="btn-primary">
              Join Business Waitlist
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#supply-chain" className="btn-secondary">
              Explore Supply Flow
            </a>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {heroChips.map((chip, i) => (
              <li
                key={chip.label}
                className="animate-slide-up inline-flex items-center gap-2 rounded-full border border-grazify-border bg-white px-3.5 py-2 text-sm font-medium text-ink"
                style={{ animationDelay: `${i * 90}ms`, animationFillMode: "both" }}
              >
                <span aria-hidden="true">{chip.emoji}</span>
                {chip.label}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Hero screenshot – constrained so it never overflows the viewport */}
        <div className="relative mx-auto w-[200px] sm:w-[240px] lg:w-[255px] xl:w-[290px]">
          {/* Soft ambient halo for depth behind the device */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[115%] w-[150%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-grazify-primary/[0.07] blur-[64px]"
          />
          <div className="relative animate-float will-change-transform">
            <AppScreenshot
              src={heroScreen.src}
              alt={heroScreen.alt}
              priority
              sizes="(max-width: 640px) 55vw, (max-width: 1024px) 240px, 290px"
              className="aspect-[1332/2690] w-full"
            />

            {floatingCards.map((card) => (
              <div
                key={card.title}
                className={`absolute z-10 hidden items-center gap-2 rounded-2xl border border-grazify-border bg-white/92 px-3 py-2 shadow-card backdrop-blur-sm animate-float-soft will-change-transform sm:flex ${card.position} ${card.delay}`}
              >
                <IconTile rounded="rounded-xl" className="h-8 w-8">
                  <card.icon className="h-4 w-4" aria-hidden="true" />
                </IconTile>
                <span className="flex flex-col leading-tight">
                  <span className="whitespace-nowrap text-[12px] font-semibold text-ink">
                    {card.title}
                  </span>
                  <span className="whitespace-nowrap text-[10px] text-muted">
                    {card.note}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
