
import { Users, Map, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DocumentationSection = () => {
  return (
    <section className="py-10 px-4 md:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Project Phase 1 Documentation</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">User Personas</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Detailed profiles of our target users to guide product development and feature prioritization.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/user-personas">View User Personas</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Map className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">User Journeys</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Step-by-step paths users take to accomplish their goals on our platform.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/user-journeys">View User Journeys</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-edu-teal/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-edu-teal" />
                </div>
                <h3 className="font-semibold text-lg">Wireframes</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Visual representations of user interface layouts for key pages of the platform.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/wireframes">View Wireframes</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
