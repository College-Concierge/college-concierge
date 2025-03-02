
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Award, Building, BookOpen, Users, Star, Globe, ExternalLink, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import SectionContainer from '@/components/layout/SectionContainer';
import { getUniversityById } from '@/services/universityService';
import { University } from '@/data/universityInterface';
import SectionHeader from '@/components/ui/section-header';

const UniversityDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [university, setUniversity] = useState<University | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      const universityData = getUniversityById(parseInt(id));
      
      if (universityData) {
        setUniversity(universityData);
        // Simulate API call with a brief delay
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } else {
        setIsLoading(false);
        toast.error('University not found', {
          description: 'We could not find the university you are looking for.',
        });
      }
    }
  }, [id]);

  const handleApplyNow = () => {
    toast.success('Application started', {
      description: `You've started an application for ${university?.name}`,
    });
  };

  const handleSaveToFavorites = () => {
    toast.success('University saved', {
      description: `${university?.name} has been added to your favorites`,
    });
  };

  if (isLoading) {
    return (
      <SectionContainer className="min-h-screen py-8">
        <div className="flex flex-col items-center justify-center h-64">
          <div className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-muted-foreground">Loading university details...</p>
        </div>
      </SectionContainer>
    );
  }

  if (!university) {
    return (
      <SectionContainer className="min-h-screen py-8">
        <div className="flex flex-col items-center justify-center h-64">
          <h2 className="text-2xl font-bold">University Not Found</h2>
          <p className="mt-2 text-muted-foreground">The university you are looking for could not be found.</p>
          <Button asChild className="mt-6">
            <Link to="/">Go back to homepage</Link>
          </Button>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer className="min-h-screen py-8">
      {/* Back Navigation */}
      <Button 
        variant="ghost" 
        className="mb-6" 
        asChild
      >
        <Link to="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Universities
        </Link>
      </Button>

      {/* Hero Section */}
      <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
        <img 
          src={university.imageUrl} 
          alt={university.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
          <Badge className="mb-2 self-start" variant={university.isPopular ? "default" : "secondary"}>
            {university.isPopular ? "Popular University" : `Rank #${university.ranking}`}
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{university.name}</h1>
          <div className="flex items-center text-white/90 text-sm md:text-base">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{university.location}</span>
            <span className="mx-2">•</span>
            <Building className="h-4 w-4 mr-1" />
            <span>{university.type} University</span>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white dark:bg-card rounded-lg p-4 border shadow-sm"
        >
          <div className="flex items-center mb-2">
            <Calendar className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-medium">Established</h3>
          </div>
          <p className="text-2xl font-bold">{university.established}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white dark:bg-card rounded-lg p-4 border shadow-sm"
        >
          <div className="flex items-center mb-2">
            <Award className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-medium">Accreditation</h3>
          </div>
          <p className="text-2xl font-bold">{university.accreditation}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white dark:bg-card rounded-lg p-4 border shadow-sm"
        >
          <div className="flex items-center mb-2">
            <Star className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-medium">Rating</h3>
          </div>
          <p className="text-2xl font-bold">{university.rating}/5.0</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-white dark:bg-card rounded-lg p-4 border shadow-sm"
        >
          <div className="flex items-center mb-2">
            <Users className="h-5 w-5 text-primary mr-2" />
            <h3 className="font-medium">Popularity</h3>
          </div>
          <p className="text-2xl font-bold">{university.views.toLocaleString()} views</p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Main Information */}
        <div className="lg:col-span-2 space-y-8">
          {/* About Section */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">About {university.shortName}</h2>
              <p className="text-muted-foreground mb-4">{university.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{university.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm text-muted-foreground">Type</p>
                    <p className="font-medium">{university.type} University</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm text-muted-foreground">Website</p>
                    <a 
                      href={university.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline flex items-center"
                    >
                      Visit Website <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-muted-foreground mr-2" />
                  <div>
                    <p className="text-sm text-muted-foreground">Fee Range</p>
                    <p className="font-medium">₹{university.fees.min.toLocaleString()} - ₹{university.fees.max.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Facilities Section */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Campus Facilities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {university.facilities.map((facility, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className="flex items-center p-3 border rounded-md hover:bg-accent"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <span>{facility}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  className="w-full" 
                  onClick={handleApplyNow}
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleSaveToFavorites}
                >
                  Save to Favorites
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="w-full"
                >
                  <a 
                    href={university.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    Visit Website
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Key Stats */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Key Statistics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">National Ranking</span>
                    <span className="font-medium">#{university.ranking}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full mt-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.max(5, 100 - university.ranking * 5)}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Student Rating</span>
                    <span className="font-medium">{university.rating}/5</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full mt-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${university.rating * 20}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-edu-amber rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Popularity Score</span>
                    <span className="font-medium">{Math.min(100, Math.floor(university.views / 300))}/100</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full mt-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(100, Math.floor(university.views / 300))}%` }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-edu-lightBlue rounded-full"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Similar Universities - Just a placeholder */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Similar Universities</h3>
              <p className="text-sm text-muted-foreground">These universities have similar programs and features</p>
              
              <div className="mt-4 space-y-3">
                {[1, 2, 3].map((i) => (
                  <Button key={i} variant="ghost" className="w-full justify-start text-left">
                    Similar University {i}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Universities Section */}
      <div className="mt-16">
        <SectionHeader 
          title="You Might Also Like" 
          description="Explore other universities that may interest you based on your preferences"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Placeholder for now, would be populated with actual related universities */}
          {[1, 2, 3].map((i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <Building className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium">Related University {i}</h4>
                    <p className="text-sm text-muted-foreground">New Delhi, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default UniversityDetail;
