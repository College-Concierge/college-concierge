
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { universities } from "@/data/universities";

const FeaturedUniversities = () => {
  const featuredUniversities = universities.slice(0, 4);
  
  return (
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
  );
};

export default FeaturedUniversities;
