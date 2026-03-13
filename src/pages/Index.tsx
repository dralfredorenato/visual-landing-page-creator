import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import TreatmentsSection from "@/components/TreatmentsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import FooterCta from "@/components/FooterCta";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProofStrip />
      <TreatmentsSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <FooterCta />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
