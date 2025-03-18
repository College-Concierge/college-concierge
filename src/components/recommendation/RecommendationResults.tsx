
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Check, Clock, Download, BarChart, Users, FileText, Sparkles, ChevronRight, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import SectionContainer from '@/components/layout/SectionContainer';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { University } from '@/data/universityInterface';

interface RecommendationResultsProps {
  universities: University[];
  userInputs: any;
  onStartOver: () => void;
}

const RecommendationResults = ({ universities, userInputs, onStartOver }: RecommendationResultsProps) => {
  const [view, setView] = useState<'matches' | 'details'>('matches');
  const [activeTab, setActiveTab] = useState('all');
  
  if (universities.length === 0) {
    return (
      <SectionContainer className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="h-20 w-20 mx-auto bg-muted rounded-full flex items-center justify-center mb-6">
              <BarChart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-4">No Matches Found</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We couldn't find any universities matching your criteria. Try adjusting your preferences.
            </p>
            <Button onClick={onStartOver} className="flex items-center mx-auto">
              <RotateCw className="mr-2 h-4 w-4" /> Try Again with Different Criteria
            </Button>
          </div>
        </div>
      </SectionContainer>
    );
  }

  const handleDownloadReport = () => {
    toast.success('Report downloaded', {
      description: 'Your personalized recommendation report has been downloaded'
    });
  };

  const handleContactExpert = () => {
    toast.success('Request received', {
      description: 'Our education expert will contact you shortly'
    });
  };

  // Get top 3 matches for the highlight section
  const topMatches = universities.slice(0, 3);
  
  // Filter universities based on active tab
  const filteredUniversities = activeTab === 'all' 
    ? universities
    : universities.filter(uni => uni.type.toLowerCase() === activeTab);

  return (
    <SectionContainer className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Badge variant="outline" className="mb-2">
              <Sparkles className="h-3.5 w-3.5 mr-1 text-primary" />
              AI Powered Recommendations
            </Badge>
            <h1 className="text-3xl font-bold">Your Perfect University Matches</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onStartOver} className="flex items-center">
              <RotateCw className="mr-2 h-4 w-4" /> Start Over
            </Button>
            <Button variant="outline" onClick={handleDownloadReport} className="flex items-center">
              <Download className="mr-2 h-4 w-4" /> Download Report
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Information Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Your Preferences</h3>
                <div className="space-y-4">
                  {userInputs.educationLevel && (
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Education Level</p>
                        <p className="font-medium">{userInputs.educationLevel === 'ug' ? 'Undergraduate' : 
                                                   userInputs.educationLevel === 'pg' ? 'Postgraduate' : 
                                                   userInputs.educationLevel === 'executive' ? 'Executive Education' : 'Doctorate'}</p>
                      </div>
                    </div>
                  )}
                  
                  {userInputs.courseInterest && (
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Course Interest</p>
                        <p className="font-medium">{userInputs.courseInterest}</p>
                      </div>
                    </div>
                  )}
                  
                  {userInputs.specializations && userInputs.specializations.length > 0 && (
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Specializations</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {userInputs.specializations.map((spec, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {userInputs.budget && (
                    <div className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Budget</p>
                        <p className="font-medium">{userInputs.budget.replace('_', ' ').replace('L', ' Lakh')}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                  <Button 
                    onClick={handleContactExpert} 
                    className="w-full"
                  >
                    Connect with Expert
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    Our education experts can help you make the right choice
                  </p>
                </div>
                
                <Separator className="my-6" />
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Why College Concierge?</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      AI-powered personalized recommendations
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Verified university information
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Dedicated counseling support
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                      Application assistance
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recommendation Results */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-3">Top Recommendations for You</h2>
              <p className="text-muted-foreground mb-6">
                Based on your preferences, these universities are your best matches
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {topMatches.map((uni, index) => (
                  <motion.div
                    key={uni.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardContent className="p-4 flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <Badge className="bg-primary/90">#{index + 1} Match</Badge>
                          <div className="flex items-center">
                            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm ml-1 font-medium">{uni.rating}</span>
                          </div>
                        </div>
                        
                        <h3 className="font-semibold line-clamp-2 mb-2">{uni.name}</h3>
                        
                        <div className="text-xs text-muted-foreground mb-3 flex-grow">
                          <div className="flex items-center mb-1">
                            <Badge variant="outline" className="text-xs">
                              {uni.type}
                            </Badge>
                            <span className="mx-2">•</span>
                            <span>Est. {uni.established}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>3-4 Years</span>
                            <span className="mx-2">•</span>
                            <span>Rank #{uni.ranking}</span>
                          </div>
                        </div>
                        
                        <Link to={`/university/${uni.id}`}>
                          <Button 
                            variant="outline" 
                            className="w-full text-xs h-8"
                          >
                            View Details <ChevronRight className="h-3 w-3 ml-1" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">All Recommended Universities</h2>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="public">Public</TabsTrigger>
                  <TabsTrigger value="private">Private</TabsTrigger>
                  <TabsTrigger value="deemed">Deemed</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value={activeTab} className="mt-0">
                <div className="space-y-4">
                  {filteredUniversities.length === 0 ? (
                    <p className="text-center py-8 text-muted-foreground">
                      No universities found in this category
                    </p>
                  ) : (
                    filteredUniversities.map((uni, index) => (
                      <motion.div
                        key={uni.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row gap-4">
                              <div className="flex-shrink-0 w-full md:w-32 h-20 rounded-md overflow-hidden">
                                <img 
                                  src={uni.imageUrl} 
                                  alt={uni.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              
                              <div className="flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                  <h3 className="font-semibold">{uni.name}</h3>
                                  <div className="flex items-center">
                                    <Badge className="mr-2" variant={uni.type === 'Public' ? 'default' : uni.type === 'Private' ? 'secondary' : 'outline'}>
                                      {uni.type}
                                    </Badge>
                                    <div className="flex items-center">
                                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                      <span className="text-sm ml-1 font-medium">{uni.rating}/5</span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm mb-4">
                                  <div>
                                    <p className="text-muted-foreground">Location</p>
                                    <p>{uni.location}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Established</p>
                                    <p>{uni.established}</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Rank</p>
                                    <p>#{uni.ranking} in India</p>
                                  </div>
                                  <div>
                                    <p className="text-muted-foreground">Fees (Approx)</p>
                                    <p>₹{uni.fees.min.toLocaleString()} - ₹{uni.fees.max.toLocaleString()}</p>
                                  </div>
                                </div>
                                
                                <div className="flex flex-col md:flex-row gap-2">
                                  <Link to={`/university/${uni.id}`} className="flex-grow">
                                    <Button 
                                      variant="default" 
                                      className="w-full"
                                    >
                                      View Details
                                    </Button>
                                  </Link>
                                  <Button 
                                    variant="outline" 
                                    className="flex-grow"
                                    onClick={() => {
                                      toast.success('Application started', {
                                        description: `You've started an application for ${uni.name}`
                                      });
                                    }}
                                  >
                                    Apply Now
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default RecommendationResults;
