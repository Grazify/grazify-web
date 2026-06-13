import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
      <Header />
      <main>
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
