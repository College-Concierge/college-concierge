
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, GraduationCap, MapPin, Eye, Calendar, IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";
import { University } from "@/data/universities";

interface UniversityCardProps {
  university: University;
  className?: string;
}

const UniversityCard = ({ university, className }: UniversityCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Link to={`/university/${university.id}`}>
      <Card 
        className={cn(
          "overflow-hidden transition-all hover:shadow-md card-shadow h-full flex flex-col",
          className
        )}
      >
        <div className="relative h-40 bg-gray-100 overflow-hidden">
          <img
            src={university.imageUrl}
            alt={university.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          {university.isPopular && (
            <div className="absolute top-3 left-3">
              <Badge variant="default" className="bg-accent text-white">
                Popular
              </Badge>
            </div>
          )}
        </div>
  
        <CardHeader className="p-4 pb-2">
          <div className="flex justify-between items-start">
            <div>
              <div className="chip chip-primary mb-2">{university.type}</div>
              <h3 className="font-semibold text-lg line-clamp-1">{university.name}</h3>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                <span>{university.city}, {university.state}</span>
              </div>
            </div>
            <div className="flex items-center bg-primary/10 px-2 py-1 rounded">
              <Star className="h-4 w-4 text-amber-500 mr-1" fill="currentColor" />
              <span className="font-medium text-sm">{university.rating.toFixed(1)}</span>
            </div>
          </div>
        </CardHeader>
  
        <CardContent className="p-4 pt-2 pb-4 flex-grow">
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-muted-foreground">
                <GraduationCap className="h-4 w-4 mr-1.5" />
                <span>Ranking</span>
              </div>
              <span className="font-medium">#{university.ranking} in India</span>
            </div>
  
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-muted-foreground">
                <IndianRupee className="h-4 w-4 mr-1.5" />
                <span>Avg. Fees Range</span>
              </div>
              <span className="font-medium">
                ₹{(university.fees.min / 1000).toFixed(0)}K - ₹{(university.fees.max / 1000).toFixed(0)}K
              </span>
            </div>
  
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1.5" />
                <span>Established</span>
              </div>
              <span className="font-medium">{university.established}</span>
            </div>
  
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-muted-foreground">
                <Eye className="h-4 w-4 mr-1.5" />
                <span>Views</span>
              </div>
              <span className="font-medium">{university.views.toLocaleString()}+</span>
            </div>
          </div>
        </CardContent>
  
        <CardFooter className="p-4 pt-0 border-t">
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default UniversityCard;
