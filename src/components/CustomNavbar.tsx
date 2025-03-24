
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRightLeft, Filter, FileText, Users, Map, Layers, ChevronDown, Sparkles, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full border-b ${isScrolled ? 'bg-background/95' : 'bg-background'} backdrop-blur transition-colors duration-200`}>
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <motion.div 
              className="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center h-12 w-12"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/lovable-uploads/204a6e1d-8c62-46c0-a118-9bb7b7bb99f7.png" 
                alt="College Concierge Logo" 
                className="h-11 w-11 object-cover p-0.5"
                loading="eager"
              />
            </motion.div>
            <span className="font-bold text-base sm:text-lg text-[#1A5741] hidden sm:inline">College Concierge</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
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
          {/* AI Recommendations Button */}
          <Button 
            size={isMobile ? "sm" : "default"}
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 font-medium shadow-md hover:shadow-lg transition-all px-2 sm:px-3" 
            asChild
          >
            <Link to="/recommendations" className="flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5" />
              <span className={isMobile ? "hidden" : "inline-block"}>AI College Finder</span>
            </Link>
          </Button>
          
          <Button variant="outline" size="sm" asChild className="hidden sm:flex">
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/login">Login</Link>
          </Button>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border py-3 px-4 bg-background/95 backdrop-blur">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="px-2 py-1.5 rounded-md text-sm font-medium hover:bg-muted" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            
            <div className="px-2 py-1 text-sm font-medium">Documentation</div>
            <div className="pl-4 flex flex-col space-y-2">
              <Link to="/user-personas" className="px-2 py-1 text-sm rounded-md hover:bg-muted flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Users className="h-4 w-4" /> User Personas
              </Link>
              <Link to="/user-journeys" className="px-2 py-1 text-sm rounded-md hover:bg-muted flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Map className="h-4 w-4" /> User Journeys
              </Link>
              <Link to="/wireframes" className="px-2 py-1 text-sm rounded-md hover:bg-muted flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Layers className="h-4 w-4" /> Wireframes
              </Link>
              <Link to="/project-documentation" className="px-2 py-1 text-sm rounded-md hover:bg-muted flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <FileText className="h-4 w-4" /> Project Documentation
              </Link>
            </div>
            
            <div className="px-2 py-1 text-sm font-medium">Prototypes</div>
            <div className="pl-4 flex flex-col space-y-2">
              <Link to="/prototype/chatbot" className="px-2 py-1 text-sm rounded-md hover:bg-muted flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <MessageSquare className="h-4 w-4" /> AI Chatbot
              </Link>
              <Link to="/prototype/comparison" className="px-2 py-1 text-sm rounded-md hover:bg-muted flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <ArrowRightLeft className="h-4 w-4" /> Comparison Tool
              </Link>
              <Link to="/prototype/filters" className="px-2 py-1 text-sm rounded-md hover:bg-muted flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Filter className="h-4 w-4" /> Advanced Filters
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Button variant="outline" size="sm" asChild className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default CustomNavbar;
