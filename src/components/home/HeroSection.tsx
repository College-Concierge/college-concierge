
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

  const waveVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-r from-primary/90 to-primary py-24 px-4 md:px-8 overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto text-center relative z-10"
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
      
      {/* Animated wave background */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <motion.svg 
          className="absolute bottom-0" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          width="2000"
          height="120"
          variants={waveVariants}
          animate="animate"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            fill="#FFFFFF"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            fill="#FFFFFF"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#FFFFFF"
          />
        </motion.svg>
      </div>
    </section>
  );
};

export default HeroSection;
