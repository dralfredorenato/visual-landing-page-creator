import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import BoneHealthSection from "@/components/BoneHealthSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import ClinicSection from "@/components/ClinicSection";
import FaqSection from "@/components/FaqSection";
import FooterCta from "@/components/FooterCta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TreatmentsSection />
      <BoneHealthSection />
      <BenefitsSection />
      <AboutSection />
      <ClinicSection />
      <FaqSection />
      <FooterCta />
    </div>
  );
};

export default Index;
