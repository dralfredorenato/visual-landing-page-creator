import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import TherapeuticTargetsSection from "@/components/TherapeuticTargetsSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import GoogleReviews from "@/components/GoogleReviews";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PainSection />
      <TherapeuticTargetsSection />
      <TreatmentsSection />
      <HowItWorksSection />
      <AboutSection />
      <DifferentialsSection />
      <GoogleReviews />
      <BlogPreviewSection />
      <ContactSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
