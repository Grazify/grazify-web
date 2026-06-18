import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HashScroll from "@/components/common/HashScroll";
import HeroSection from "@/components/sections/HeroSection";
import SupplyChainSection from "@/components/sections/SupplyChainSection";
import ProductsSection from "@/components/sections/ProductsSection";
import BusinessTypesSection from "@/components/sections/BusinessTypesSection";
import QualitySection from "@/components/sections/QualitySection";
import PlatformSection from "@/components/sections/PlatformSection";
import AppPreviewSection from "@/components/sections/AppPreviewSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <HashScroll />
      {/* Keyboard / screen-reader users can jump straight past the navbar. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-grazify-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-float"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <SupplyChainSection />
        <ProductsSection />
        <BusinessTypesSection />
        <QualitySection />
        <PlatformSection />
        <AppPreviewSection />
        <WaitlistSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
