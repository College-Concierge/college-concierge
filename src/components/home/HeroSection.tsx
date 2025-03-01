
import { Search } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Searching for "${searchQuery}"...`);
      // In a real app, this would navigate to search results
      console.log("Search query:", searchQuery);
    } else {
      toast.error("Please enter a search term");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-primary/90 to-primary py-24 px-4 md:px-8">
      <motion.div 
        className="max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          Find Your Perfect College Journey
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Discover top universities and courses across India. Make informed decisions about your education with comprehensive data and reviews.
        </motion.p>
        
        <motion.form 
          onSubmit={handleSearchSubmit} 
          className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <Input
            type="text"
            placeholder="Search universities, courses, or locations..."
            className="flex-1 h-12 bg-white/95 border-0 focus-visible:ring-accent text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" size="lg" className="h-12 px-8 bg-accent hover:bg-accent/90 text-white">
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </motion.form>

        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-3"
          variants={itemVariants}
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
            200+ Universities
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
            5000+ Courses
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
            Real Student Reviews
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
            AI-Powered Recommendations
          </span>
        </motion.div>
      </motion.div>
      <div className="wave-bg"></div>
    </section>
  );
};

export default HeroSection;
