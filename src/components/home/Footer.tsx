
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="col-span-1 md:col-span-1 text-center sm:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center sm:justify-start">
              <div className="rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center h-12 w-12">
                <img 
                  src="/lovable-uploads/6e60cc6f-3260-4b0d-a459-6dcda5dbfa07.png" 
                  alt="College Concierge Logo" 
                  className="h-12 w-12 object-contain p-0.5"
                />
              </div>
              <h3 className="text-xl font-bold text-[#1A5741]">College Concierge</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Your trusted guide to finding the perfect university and course in India.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Universities
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Compare
                </a>
              </li>
              <li>
                <Link to="/project-documentation" className="text-muted-foreground hover:text-primary">
                  Project Documentation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Resources */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Admission Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Scholarships
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Career Paths
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                support@collegeconcierge.in
              </li>
              <li className="text-muted-foreground">
                +91 1234567890
              </li>
              <li className="text-muted-foreground">
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 sm:mb-0 text-center sm:text-left">
            © 2023 CollegeConcierge. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
