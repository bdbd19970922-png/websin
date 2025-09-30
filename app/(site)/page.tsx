// app/(site)/page.tsx
import dynamic from "next/dynamic";

// ✅ HeroCarousel은 Swiper 사용 → SSR 비활성화
const HeroCarousel = dynamic(() => import("@/components/HeroCarousel"), {
  ssr: false,
});

import ServicesSummary from "@/components/ServicesSummary";
import PortfolioPreview from "@/components/PortfolioPreview";
import PriceSection from "@/components/PriceSection";
import ProcessTeaser from "@/components/ProcessTeaser";
import GuidesTeaser from "@/components/GuidesTeaser";
import ContactSection from "@/components/ContactSection";
import FloatingSns from "@/components/FloatingSns";

export default function SiteHome() {
  return (
    <>
      <HeroCarousel />
      <ServicesSummary />
      <PortfolioPreview />
      <PriceSection />
      <ProcessTeaser />
      <GuidesTeaser />
      <ContactSection />
      <FloatingSns />
    </>
  );
}
