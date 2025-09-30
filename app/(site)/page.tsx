import HeroCarousel from "@/components/HeroCarousel";
import ServicesSummary from "@/components/ServicesSummary";
import PortfolioPreview from "@/components/PortfolioPreview";
import PriceSection from "@/components/PriceSection";
import ProcessTeaser from "@/components/ProcessTeaser";
import GuidesTeaser from "@/components/GuidesTeaser";
import ContactSection from "@/components/ContactSection";
import FloatingSns from "@/components/FloatingSns";

export default function Home(){
  return (<>
    <HeroCarousel />
    <ServicesSummary />
    <PortfolioPreview />
    <PriceSection />
    <ProcessTeaser />
    <GuidesTeaser />
    <ContactSection />
    <FloatingSns />
  </>);
}
