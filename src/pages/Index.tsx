import { Header } from "@/components/Header";
import { HeroSlider } from "@/components/HeroSlider";
import { LeadershipSection } from "@/components/LeadershipSection";
import { DevelopmentSection } from "@/components/DevelopmentSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { MembersSection } from "@/components/MembersSection";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <LeadershipSection />
        <DevelopmentSection />
        <ServicesSection />
        <StatsSection />
        <MembersSection />
        <GalleryPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
