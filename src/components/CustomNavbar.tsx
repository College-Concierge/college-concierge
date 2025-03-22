
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRightLeft, Filter, FileText, Users, Map, Layers, ChevronDown, Sparkles } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

const CustomNavbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <motion.div 
              className="h-10 w-10 overflow-hidden rounded-md"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/lovable-uploads/26fa40a3-5d48-46fc-9c60-d39b23278302.png" 
                alt="College Concierge Logo" 
                className="h-full w-full object-contain"
              />
            </motion.div>
            <span className="font-bold hidden sm:inline-block text-[#1A5741]">College Concierge</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
                Documentation <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/user-personas" className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> User Personas
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/user-journeys" className="flex items-center gap-2">
                  <Map className="h-4 w-4" /> User Journeys
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/wireframes" className="flex items-center gap-2">
                  <Layers className="h-4 w-4" /> Wireframes
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/project-documentation" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Project Documentation
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
                Prototypes <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/prototype/chatbot" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" /> AI Chatbot
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/prototype/comparison" className="flex items-center gap-2">
                  <ArrowRightLeft className="h-4 w-4" /> Comparison Tool
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/prototype/filters" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" /> Advanced Filters
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        
        <div className="flex items-center gap-2">
          {/* AI Recommendations Button - Always visible */}
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 font-medium shadow-md hover:shadow-lg transition-all" 
            asChild
          >
            <Link to="/recommendations" className="flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5" />
              AI College Finder
            </Link>
          </Button>
          
          <Button variant="outline" size="sm" asChild className="hidden sm:flex">
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/login">Login</Link>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/prototype/chatbot">AI Chatbot</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/prototype/comparison">Comparison Tool</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/prototype/filters">Advanced Filters</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/project-documentation">Documentation</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default CustomNavbar;
