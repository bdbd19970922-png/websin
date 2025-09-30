// app/(site)/page.tsx
import nextDynamic from "next/dynamic";

// ✅ Swiper 쓰는 HeroCarousel은 클라이언트에서만 렌더(SSR 비활성)
const HeroCarousel = nextDynamic(() => import("@/components/HeroCarousel"), {
  ssr: false,
});

// ✅ 프리렌더(정적 생성) 끄기 → 요청마다 동적 렌더
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

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
