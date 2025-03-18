
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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

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
        
        {/* New AI Recommendation Banner */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/20 py-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-primary" />
                Find Your Perfect University Match with AI
              </h3>
              <p className="text-muted-foreground mt-1">
                Answer a few questions and get personalized university recommendations in just 2 minutes
              </p>
            </div>
            <Link to="/recommendations">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Sparkles className="h-4 w-4 mr-2" />
                Get AI Recommendations
              </Button>
            </Link>
          </div>
        </div>
        
        <FeaturesSection />
        <ExploreUniversitiesSection />
        <FeaturedUniversities />
        <TestimonialsSection />
        <CtaSection />
        <DocumentationSection />
      </main>
      <Footer />
      <ChatbotInterface initialOpen={!hasVisited} />
    </div>
  );
};

export default Index;
