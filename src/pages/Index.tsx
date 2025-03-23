
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FeaturedUniversities from "@/components/home/FeaturedUniversities";
import CtaSection from "@/components/home/CtaSection";
import DocumentationSection from "@/components/home/DocumentationSection";
import Footer from "@/components/home/Footer";
import ChatbotInterface from "@/components/chatbot/ChatbotInterface";
import CustomNavbar from "@/components/CustomNavbar";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ExploreUniversitiesSection from "@/components/home/ExploreUniversitiesSection";
import { toast } from "sonner";
import "@/App.css";

const Index = () => {
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const visitedBefore = localStorage.getItem('visitedBefore');
    if (!visitedBefore) {
      // Show welcome toast if it's the first visit
      setTimeout(() => {
        toast.success(
          "Welcome to College Concierge", 
          { 
            description: "Your AI-powered companion for finding the perfect university",
            duration: 5000 
          }
        );
        localStorage.setItem('visitedBefore', 'true');
      }, 1500);
    }
    setHasVisited(visitedBefore === 'true');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <CustomNavbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ExploreUniversitiesSection />
        <FeaturedUniversities />
        <TestimonialsSection />
        <CtaSection />
        <DocumentationSection />
      </main>
      <Footer />
      <ChatbotInterface initialOpen={false} />
    </div>
  );
};

export default Index;
