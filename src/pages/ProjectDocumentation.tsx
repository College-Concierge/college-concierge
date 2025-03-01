
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Map, Layers, MessageSquare, ArrowRightLeft, Filter, ChevronLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomNavbar from "@/components/CustomNavbar";

const ProjectDocumentation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="min-h-screen bg-background">
      <CustomNavbar />
      <div className="container mx-auto py-8 px-4">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link to="/" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Project Documentation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our planning and design documents for the University & Course Discovery Platform
          </p>
        </motion.div>
        
        {/* Interactive Prototypes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Interactive Prototypes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/prototype/chatbot" className="group">
              <div className="border rounded-lg overflow-hidden bg-accent/5 hover:bg-accent/10 transition-colors h-full">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">AI Chatbot Interface</h4>
                  <p className="text-muted-foreground mb-4">Experience our AI assistant that helps students find universities and courses based on their preferences.</p>
                  <span className="text-primary flex items-center text-sm font-medium">
                    Try it now <ExternalLink className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/prototype/comparison" className="group">
              <div className="border rounded-lg overflow-hidden bg-accent/5 hover:bg-accent/10 transition-colors h-full">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <ArrowRightLeft className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">Comparison Tool</h4>
                  <p className="text-muted-foreground mb-4">Compare different universities side-by-side on various parameters to make informed decisions.</p>
                  <span className="text-primary flex items-center text-sm font-medium">
                    Try it now <ExternalLink className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
            
            <Link to="/prototype/filters" className="group">
              <div className="border rounded-lg overflow-hidden bg-accent/5 hover:bg-accent/10 transition-colors h-full">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Filter className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">Advanced Filters</h4>
                  <p className="text-muted-foreground mb-4">Use our powerful filtering system to narrow down universities based on multiple criteria.</p>
                  <span className="text-primary flex items-center text-sm font-medium">
                    Try it now <ExternalLink className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Phase 1: Planning & Discovery */}
          <motion.div variants={itemVariants}>
            <div className="p-6 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Phase 1: Planning</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/user-personas" className="flex items-center text-primary hover:underline">
                    <User className="h-4 w-4 mr-2" />
                    User Personas
                  </Link>
                </li>
                <li>
                  <Link to="/user-journeys" className="flex items-center text-primary hover:underline">
                    <Map className="h-4 w-4 mr-2" />
                    User Journeys
                  </Link>
                </li>
                <li>
                  <Link to="/wireframes" className="flex items-center text-primary hover:underline">
                    <Layers className="h-4 w-4 mr-2" />
                    Wireframes
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Phase 2: Design & Interactive Prototypes */}
          <motion.div variants={itemVariants}>
            <div className="p-6 bg-accent/10 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Phase 2: Prototypes</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/prototype/chatbot" className="flex items-center text-primary hover:underline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    AI Chatbot Interface
                  </Link>
                </li>
                <li>
                  <Link to="/prototype/comparison" className="flex items-center text-primary hover:underline">
                    <ArrowRightLeft className="h-4 w-4 mr-2" />
                    Comparison Tool
                  </Link>
                </li>
                <li>
                  <Link to="/prototype/filters" className="flex items-center text-primary hover:underline">
                    <Filter className="h-4 w-4 mr-2" />
                    Advanced Filters
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Phase 3: Development Progress */}
          <motion.div variants={itemVariants}>
            <div className="p-6 bg-muted/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Phase 3: Development</h3>
              <ul className="space-y-3">
                <li className="text-muted-foreground flex items-center">
                  <span className="inline-block w-4 h-4 rounded-full bg-muted-foreground/20 mr-2"></span>
                  Backend Setup (Coming Soon)
                </li>
                <li className="text-muted-foreground flex items-center">
                  <span className="inline-block w-4 h-4 rounded-full bg-muted-foreground/20 mr-2"></span>
                  Data Integration (Coming Soon)
                </li>
                <li className="text-muted-foreground flex items-center">
                  <span className="inline-block w-4 h-4 rounded-full bg-muted-foreground/20 mr-2"></span>
                  Frontend Components (Coming Soon)
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDocumentation;
