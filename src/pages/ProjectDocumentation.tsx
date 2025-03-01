
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Map, Layers, MessageSquare, ArrowRightLeft, Filter, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <p className="text-muted-foreground">
            Explore our planning and design documents for the University & Course Discovery Platform
          </p>
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
