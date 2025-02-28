
import { Search } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Searching for "${searchQuery}"...`);
      // In a real app, this would navigate to search results
      console.log("Search query:", searchQuery);
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-primary/90 to-primary py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
          Find Your Perfect College Journey
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-slideUp">
          Discover top universities and courses across India. Make informed decisions about your education with comprehensive data and reviews.
        </p>
        
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto animate-slideUp">
          <Input
            type="text"
            placeholder="Search universities, courses, or locations..."
            className="flex-1 h-12 bg-white/95 border-0 focus-visible:ring-accent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" size="lg" className="h-12 px-8 bg-accent hover:bg-accent/90">
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </form>
      </div>
      <div className="wave-bg"></div>
    </section>
  );
};

export default HeroSection;
