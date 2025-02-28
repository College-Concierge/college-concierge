
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, School, BookOpen, BarChart2, Users, Award } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { universities } from "@/data/universities";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const featuredUniversities = universities.slice(0, 4);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Searching for "${searchQuery}"...`);
      // In a real app, this would navigate to search results
      console.log("Search query:", searchQuery);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need For Your College Search</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-edu-teal/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <School className="h-6 w-6 text-edu-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">University Explorer</h3>
                <p className="text-muted-foreground">
                  Browse through detailed profiles of top universities across India with rankings, facilities, and admission criteria.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-edu-amber/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-edu-amber" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Course Finder</h3>
                <p className="text-muted-foreground">
                  Find the perfect course with our comprehensive database of programs, specializations, and curriculum details.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-edu-lightBlue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart2 className="h-6 w-6 text-edu-lightBlue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comparison Tools</h3>
                <p className="text-muted-foreground">
                  Compare universities and courses side by side to make informed decisions about your educational future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Universities */}
      <section className="py-16 px-4 md:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Universities</h2>
            <Button variant="outline" asChild>
              <Link to="/universities">View All Universities</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredUniversities.map((university) => (
              <Card key={university.id} className="overflow-hidden card-shadow">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={university.imageUrl} 
                    alt={university.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <Badge className="mb-2 bg-edu-teal text-white">{university.type}</Badge>
                  <h3 className="font-semibold text-lg mb-1">{university.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{university.location}</p>
                  <div className="flex items-center text-sm">
                    <Award className="h-4 w-4 mr-1 text-edu-amber" />
                    <span>Rank: {university.ranking}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your College Journey?</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Create an account to save your favorite universities, get personalized recommendations, and track application deadlines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Users className="mr-2 h-5 w-5" />
              Create Account
            </Button>
            <Button size="lg" variant="outline">
              Explore Universities
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
