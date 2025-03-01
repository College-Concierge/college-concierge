
import { Award, MapPin, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { universities } from "@/data/universities";
import { motion } from "framer-motion";

const FeaturedUniversities = () => {
  const featuredUniversities = universities.slice(0, 4);
  
  return (
    <section className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4 sm:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Universities
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="outline" asChild>
              <Link to="/universities">View All Universities</Link>
            </Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredUniversities.map((university, index) => (
            <motion.div
              key={university.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden card-shadow h-full transition-transform hover:scale-[1.02]">
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={university.imageUrl} 
                    alt={university.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-edu-teal text-white">{university.type}</Badge>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg mb-1">{university.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{university.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-y-2">
                    <div className="flex items-center text-sm mr-4">
                      <Award className="h-4 w-4 mr-1 text-edu-amber" />
                      <span>Rank: {university.ranking}</span>
                    </div>
                    <div className="flex items-center text-sm mr-4">
                      <Users className="h-4 w-4 mr-1 text-edu-lightBlue" />
                      <span>Students: {Math.floor(Math.random() * 20000) + 5000}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 mr-1 text-edu-orange" />
                      <span>Rating: {(Math.random() * 2 + 3).toFixed(1)}/5</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to={`/universities/${university.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedUniversities;
