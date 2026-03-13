import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TherapeuticTargetsSection from "@/components/TherapeuticTargetsSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import BoneHealthSection from "@/components/BoneHealthSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClinicSection from "@/components/ClinicSection";
import LocationsSection from "@/components/LocationsSection";
import FaqSection from "@/components/FaqSection";
import FooterCta from "@/components/FooterCta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TherapeuticTargetsSection />
      <TreatmentsSection />
      <BoneHealthSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <ClinicSection />
      <LocationsSection />
      <FaqSection />
      <FooterCta />
    </div>
  );
};

export default Index;
