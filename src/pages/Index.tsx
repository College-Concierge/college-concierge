
import React, { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedUniversities from "@/components/home/FeaturedUniversities";
import CtaSection from "@/components/home/CtaSection";
import DocumentationSection from "@/components/home/DocumentationSection";
import Footer from "@/components/home/Footer";
import ChatbotInterface from "@/components/chatbot/ChatbotInterface";
import CustomNavbar from "@/components/CustomNavbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomNavbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <FeaturedUniversities />
        <CtaSection />
        <DocumentationSection />
      </main>
      <Footer />
      <ChatbotInterface />
    </div>
  );
};

export default Index;
