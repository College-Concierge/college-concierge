
const Footer = () => {
  return (
    <footer className="bg-muted py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">College Concierge</h3>
            <p className="text-muted-foreground">
              Your personal guide to finding the perfect university and course in India.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Universities</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Courses</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Rankings</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Admission Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Scholarships</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Career Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Student Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">support@collegeconcierge.in</li>
              <li className="text-muted-foreground">+91 98765 43210</li>
              <li className="text-muted-foreground">Mumbai, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} College Concierge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
