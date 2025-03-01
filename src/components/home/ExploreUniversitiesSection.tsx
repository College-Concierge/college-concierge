
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { universities } from '@/data/universities';
import { ChevronRight, Search, MapPin, Buildings, Award, Users, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const ExploreUniversitiesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('popular');
  
  // Filter and sort universities based on search term and active tab
  const filteredUniversities = universities
    .filter(uni => 
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (activeTab === 'popular') {
        return b.views - a.views;
      } else if (activeTab === 'top-ranked') {
        return a.ranking - b.ranking;
      }
      return 0;
    })
    .slice(0, 6);
  
  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Universities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover top-ranked universities across India and find your perfect match
            with our comprehensive database and advanced filters.
          </p>
        </motion.div>
        
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="top-ranked">Top Ranked</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((university) => (
              <motion.div
                key={university.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full flex flex-col overflow-hidden group hover:shadow-md transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={university.imageUrl} 
                      alt={university.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
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
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{university.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Buildings className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{university.type} University, est. {university.established}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{university.accreditation}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{university.views.toLocaleString()} views</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Link to="/prototype/filters">
              <Button size="lg" className="gap-2">
                Explore All Universities
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreUniversitiesSection;
