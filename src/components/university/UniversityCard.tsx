
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Building, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { University } from '@/data/universityInterface';
import { toast } from "sonner";

interface UniversityCardProps {
  university: University;
}

const UniversityCard = ({ university }: UniversityCardProps) => {
  const handleClick = () => {
    toast.success(`University selected`, {
      description: `You've selected ${university.name}. View details for more information.`,
      duration: 3000
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group hover:shadow-md transition-all border border-muted">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={university.imageUrl} 
            alt={university.name} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end">
            <div className="p-4 w-full text-white">
              <Badge className="mb-2" variant={university.isPopular ? "default" : "secondary"}>
                {university.isPopular ? "Popular" : `Rank #${university.ranking}`}
              </Badge>
              <h3 className="text-lg font-semibold line-clamp-2">{university.name}</h3>
            </div>
          </div>
        </div>
        
        <CardContent className="flex-grow py-4">
          <div className="space-y-3">
            <div className="flex items-start text-sm">
              <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
              <span className="line-clamp-2">{university.location}</span>
            </div>
            <div className="flex items-start text-sm">
              <Building className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
              <span>{university.type} University, est. {university.established}</span>
            </div>
            <div className="flex items-start text-sm">
              <Award className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
              <span>{university.accreditation}</span>
            </div>
            <div className="flex items-start text-sm">
              <Users className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
              <span>{university.views.toLocaleString()} views</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            onClick={handleClick}
          >
            View Details <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default UniversityCard;
