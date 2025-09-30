// app/(site)/page.tsx
import nextDynamic from "next/dynamic";

// ✅ Swiper 쓰는 HeroCarousel은 브라우저에서만 렌더(SSR 비활성)
const HeroCarousel = nextDynamic(() => import("@/components/HeroCarousel"), {
  ssr: false,
});

// ⛔️ 여기서는 export const dynamic / revalidate 절대 내보내지 말 것!
//    (layout.tsx 쪽 서버 컴포넌트에서만 라우트 옵션을 export 해야 함)

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
