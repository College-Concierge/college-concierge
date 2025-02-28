
import HeroSection from "@/components/home/HeroSection";
import DocumentationSection from "@/components/home/DocumentationSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedUniversities from "@/components/home/FeaturedUniversities";
import CtaSection from "@/components/home/CtaSection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <DocumentationSection />
      <FeaturesSection />
      <FeaturedUniversities />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
