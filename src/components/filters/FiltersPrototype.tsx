import React, { useState, useEffect } from 'react';
import { Filter, X, ChevronDown, ChevronUp, Sliders, Search, Star, MapPin, Building, BookOpen, GraduationCap, Info, BookOpen as Course, ArrowUpDown, Check, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardFooter,
  CardDescription
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { motion, AnimatePresence } from 'framer-motion';
import { universities } from '@/data/universities';
import { toast } from 'sonner';
import CustomNavbar from '@/components/CustomNavbar';
import Footer from '@/components/home/Footer';

const locations = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Lucknow',
];

const courses = [
  'Computer Science',
  'Mechanical Engineering',
  'Electrical Engineering',
  'Civil Engineering',
  'Business Administration',
  'Medical Sciences',
  'Law',
  'Arts & Humanities',
  'Commerce',
  'Natural Sciences',
];

const universityTypes = [
  'Public',
  'Private',
  'Deemed',
  'Central',
  'State',
  'Autonomous',
];

const FiltersPrototype = () => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    location: true,
    ranking: true,
    fees: true,
    courses: true,
    type: true,
  });
  
  // Filter states
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [rankingRange, setRankingRange] = useState<number[]>([1, 100]);
  const [feesRange, setFeesRange] = useState<number[]>([0, 10]);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  
  // UI states
  const [showResults, setShowResults] = useState(false);
  const [filteredResults, setFilteredResults] = useState(universities);
  const [isLoading, setIsLoading] = useState(false);
  
  // For mobile filters
  const toggleMobileFilters = () => {
    setIsMobileFiltersOpen(!isMobileFiltersOpen);
  };
  
  // Toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section as keyof typeof expandedSections],
    });
  };
  
  // Handle location selection
  const toggleLocation = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter(item => item !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };
  
  // Handle course selection
  const toggleCourse = (course: string) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(item => item !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };
  
  // Handle type selection
  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(item => item !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setSelectedLocations([]);
    setRankingRange([1, 100]);
    setFeesRange([0, 10]);
    setSelectedCourses([]);
    setSelectedTypes([]);
    setSearchTerm('');
    setSortBy('relevance');
    
    toast.success("All filters cleared");
  };
  
  // Apply filters
  const applyFilters = () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Filter universities based on criteria
      let results = [...universities];
      
      // Apply search term filter
      if (searchTerm) {
        results = results.filter(uni => 
          uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          uni.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      // Apply location filter
      if (selectedLocations.length > 0) {
        results = results.filter(uni => 
          selectedLocations.some(loc => 
            uni.city.includes(loc) || uni.state.includes(loc) || uni.location.includes(loc)
          )
        );
      }
      
      // Apply ranking filter
      results = results.filter(uni => 
        uni.ranking >= rankingRange[0] && uni.ranking <= rankingRange[1]
      );
      
      // Apply fees filter (convert lakhs to actual values)
      results = results.filter(uni => 
        (uni.fees.min >= feesRange[0] * 100000 || uni.fees.max >= feesRange[0] * 100000) && 
        (uni.fees.min <= feesRange[1] * 100000 || uni.fees.max <= feesRange[1] * 100000)
      );
      
      // Apply type filter
      if (selectedTypes.length > 0) {
        results = results.filter(uni => 
          selectedTypes.includes(uni.type)
        );
      }
      
      // Sort results
      if (sortBy === 'ranking') {
        results.sort((a, b) => a.ranking - b.ranking);
      } else if (sortBy === 'ranking-desc') {
        results.sort((a, b) => b.ranking - a.ranking);
      } else if (sortBy === 'fees') {
        results.sort((a, b) => a.fees.min - b.fees.min);
      } else if (sortBy === 'fees-desc') {
        results.sort((a, b) => b.fees.min - a.fees.min);
      } else if (sortBy === 'popularity') {
        results.sort((a, b) => b.views - a.views);
      }
      
      setFilteredResults(results);
      setShowResults(true);
      setIsLoading(false);
      setIsMobileFiltersOpen(false);
      
      toast.success(`Found ${results.length} universities matching your criteria`);
    }, 1000);
  };
  
  // Count active filters
  const activeFilterCount = 
    selectedLocations.length + 
    (rankingRange[0] !== 1 || rankingRange[1] !== 100 ? 1 : 0) +
    (feesRange[0] !== 0 || feesRange[1] !== 10 ? 1 : 0) +
    selectedCourses.length +
    selectedTypes.length +
    (searchTerm ? 1 : 0);
  
  // Initialize with demo results on first load
  useEffect(() => {
    applyFilters();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <CustomNavbar />
      <div className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-muted/30 py-12 px-4 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Find Your Perfect University</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use our advanced filters to explore universities based on your preferences
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto py-8 px-4">
          {/* Mobile filter toggle button */}
          <div className="lg:hidden mb-6">
            <Button 
              onClick={toggleMobileFilters} 
              variant="outline" 
              className="w-full"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters sidebar - desktop view and mobile overlay */}
            <AnimatePresence>
              {(isMobileFiltersOpen || window.innerWidth >= 1024) && (
                <motion.div 
                  className={`lg:w-80 bg-background ${isMobileFiltersOpen ? 'fixed inset-0 z-50 p-4 overflow-y-auto' : 'relative'}`}
                  initial={{ x: isMobileFiltersOpen ? -300 : 0, opacity: isMobileFiltersOpen ? 0 : 1 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`sticky top-4 ${isMobileFiltersOpen ? 'pb-20' : ''}`}>
                    {isMobileFiltersOpen && (
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg">Filters</h3>
                        <Button variant="ghost" size="icon" onClick={toggleMobileFilters}>
                          <X className="h-5 w-5" />
                        </Button>
                      </div>
                    )}
                    
                    <Card className="mb-4">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-base">Search</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Input 
                            placeholder="Search universities..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-grow"
                          />
                          <Button size="icon" variant="ghost">
                            <Search className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="mb-4">
                      <CardHeader className="pb-2 cursor-pointer" onClick={() => toggleSection('location')}>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-base">Location</CardTitle>
                          {expandedSections.location ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </CardHeader>
                      {expandedSections.location && (
                        <CardContent className="max-h-60 overflow-y-auto">
                          <div className="grid grid-cols-1 gap-2">
                            {locations.map((location) => (
                              <div key={location} className="flex items-center">
                                <Checkbox 
                                  id={`location-${location}`} 
                                  checked={selectedLocations.includes(location)}
                                  onCheckedChange={() => toggleLocation(location)}
                                  className="mr-2"
                                />
                                <label 
                                  htmlFor={`location-${location}`}
                                  className="text-sm cursor-pointer flex-grow"
                                >
                                  {location}
                                </label>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                    
                    <Card className="mb-4">
                      <CardHeader className="pb-2 cursor-pointer" onClick={() => toggleSection('ranking')}>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-base">Ranking</CardTitle>
                          {expandedSections.ranking ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </CardHeader>
                      {expandedSections.ranking && (
                        <CardContent>
                          <div className="pt-4 pb-2">
                            <Slider 
                              value={rankingRange}
                              min={1}
                              max={100}
                              step={1}
                              onValueChange={setRankingRange}
                              className="mb-6"
                            />
                            <div className="flex justify-between text-sm">
                              <span>Top {rankingRange[0]}</span>
                              <span>to</span>
                              <span>Top {rankingRange[1]}</span>
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                    
                    <Card className="mb-4">
                      <CardHeader className="pb-2 cursor-pointer" onClick={() => toggleSection('fees')}>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-base">Fee Range (Lakhs)</CardTitle>
                          {expandedSections.fees ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </CardHeader>
                      {expandedSections.fees && (
                        <CardContent>
                          <div className="pt-4 pb-2">
                            <Slider 
                              value={feesRange}
                              min={0}
                              max={10}
                              step={0.5}
                              onValueChange={setFeesRange}
                              className="mb-6"
                            />
                            <div className="flex justify-between text-sm">
                              <span>₹{feesRange[0]} Lakhs</span>
                              <span>to</span>
                              <span>₹{feesRange[1]} Lakhs</span>
                            </div>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                    
                    <Card className="mb-4">
                      <CardHeader className="pb-2 cursor-pointer" onClick={() => toggleSection('courses')}>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-base">Courses</CardTitle>
                          {expandedSections.courses ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </CardHeader>
                      {expandedSections.courses && (
                        <CardContent className="max-h-60 overflow-y-auto">
                          <div className="grid grid-cols-1 gap-2">
                            {courses.map((course) => (
                              <div key={course} className="flex items-center">
                                <Checkbox 
                                  id={`course-${course}`} 
                                  checked={selectedCourses.includes(course)}
                                  onCheckedChange={() => toggleCourse(course)}
                                  className="mr-2"
                                />
                                <label 
                                  htmlFor={`course-${course}`}
                                  className="text-sm cursor-pointer flex-grow"
                                >
                                  {course}
                                </label>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                    
                    <Card className="mb-4">
                      <CardHeader className="pb-2 cursor-pointer" onClick={() => toggleSection('type')}>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-base">University Type</CardTitle>
                          {expandedSections.type ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </div>
                      </CardHeader>
                      {expandedSections.type && (
                        <CardContent>
                          <div className="grid grid-cols-1 gap-2">
                            {universityTypes.map((type) => (
                              <div key={type} className="flex items-center">
                                <Checkbox 
                                  id={`type-${type}`} 
                                  checked={selectedTypes.includes(type)}
                                  onCheckedChange={() => toggleType(type)}
                                  className="mr-2"
                                />
                                <label 
                                  htmlFor={`type-${type}`}
                                  className="text-sm cursor-pointer flex-grow"
                                >
                                  {type}
                                </label>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                    
                    <div className="flex flex-col gap-2">
                      <Button onClick={applyFilters}>
                        Apply Filters
                      </Button>
                      <Button variant="outline" onClick={clearAllFilters}>
                        Clear All
                      </Button>
                    </div>
                    
                    {isMobileFiltersOpen && (
                      <div className="fixed bottom-0 left-0 right-0 bg-background p-4 border-t">
                        <Button className="w-full" onClick={applyFilters}>
                          Apply Filters
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Results area */}
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <div className="flex items-center mb-4 sm:mb-0">
                  <h3 className="font-medium">Results</h3>
                  {activeFilterCount > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {activeFilterCount} filters applied
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Select 
                    value={sortBy} 
                    onValueChange={setSortBy}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="ranking">Ranking: Low to High</SelectItem>
                      <SelectItem value="ranking-desc">Ranking: High to Low</SelectItem>
                      <SelectItem value="fees">Fees: Low to High</SelectItem>
                      <SelectItem value="fees-desc">Fees: High to Low</SelectItem>
                      <SelectItem value="popularity">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline" size="icon">
                    <Sliders className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Active filters display */}
              {activeFilterCount > 0 && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedLocations.map(location => (
                    <Badge key={`badge-${location}`} variant="secondary" className="pl-2">
                      {location}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 ml-1 p-0"
                        onClick={() => toggleLocation(location)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                  
                  {(rankingRange[0] !== 1 || rankingRange[1] !== 100) && (
                    <Badge variant="secondary" className="pl-2">
                      Ranking: Top {rankingRange[0]}-{rankingRange[1]}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 ml-1 p-0"
                        onClick={() => setRankingRange([1, 100])}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  )}
                  
                  {(feesRange[0] !== 0 || feesRange[1] !== 10) && (
                    <Badge variant="secondary" className="pl-2">
                      Fees: ₹{feesRange[0]}-{feesRange[1]} Lakhs
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 ml-1 p-0"
                        onClick={() => setFeesRange([0, 10])}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  )}
                  
                  {selectedCourses.map(course => (
                    <Badge key={`badge-${course}`} variant="secondary" className="pl-2">
                      {course}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 ml-1 p-0"
                        onClick={() => toggleCourse(course)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                  
                  {selectedTypes.map(type => (
                    <Badge key={`badge-${type}`} variant="secondary" className="pl-2">
                      {type}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 ml-1 p-0"
                        onClick={() => toggleType(type)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  ))}
                  
                  {searchTerm && (
                    <Badge variant="secondary" className="pl-2">
                      Search: {searchTerm}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 ml-1 p-0"
                        onClick={() => setSearchTerm('')}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </Badge>
                  )}
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs"
                    onClick={clearAllFilters}
                  >
                    Clear all
                  </Button>
                </div>
              )}
              
              {/* Loading state */}
              {isLoading ? (
                <div className="py-12 flex justify-center items-center">
                  <div className="flex flex-col items-center">
                    <Loader className="h-8 w-8 animate-spin mb-2 text-primary" />
                    <p className="text-muted-foreground">Loading results...</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Results display */}
                  {showResults && (
                    <div className="space-y-4">
                      {filteredResults.length > 0 ? (
                        <>
                          {filteredResults.map((university) => (
                            <motion.div
                              key={university.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row">
                                  <div className="relative md:w-64 h-48 md:h-auto overflow-hidden">
                                    <img 
                                      src={university.imageUrl} 
                                      alt={university.name} 
                                      className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-2 left-2">
                                      <Badge className="bg-primary/90 hover:bg-primary">
                                        Rank #{university.ranking}
                                      </Badge>
                                    </div>
                                  </div>
                                  
                                  <div className="flex-grow p-6">
                                    <div className="flex items-start justify-between">
                                      <div>
                                        <h3 className="text-xl font-semibold">{university.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-2">
                                          <MapPin className="h-3.5 w-3.5 inline-block mr-1" />
                                          {university.location}
                                        </p>
                                      </div>
                                      <div className="flex items-center">
                                        <div className="flex items-center bg-primary/10 text-primary rounded-md px-2 py-1">
                                          <Star className="h-4 w-4 mr-1 fill-primary" />
                                          <span className="font-semibold">{university.rating}</span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <p className="my-3 text-sm line-clamp-2">{university.description}</p>
                                    
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                                      <div className="flex items-center text-sm">
                                        <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                                        <span>{university.type}</span>
                                      </div>
                                      <div className="flex items-center text-sm">
                                        <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                                        <span>Est. {university.established}</span>
                                      </div>
                                      <div className="flex items-center text-sm">
                                        <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                                        <span>{university.courses.length} Courses</span>
                                      </div>
                                      <div className="flex items-center text-sm">
                                        <Info className="h-4 w-4 mr-2 text-muted-foreground" />
                                        <span>{university.accreditation}</span>
                                      </div>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-1 mt-4">
                                      {university.facilities.slice(0, 4).map((facility, index) => (
                                        <Badge key={index} variant="outline" className="bg-muted/50">
                                          {facility}
                                        </Badge>
                                      ))}
                                      {university.facilities.length > 4 && (
                                        <Badge variant="outline" className="bg-muted/50">
                                          +{university.facilities.length - 4} more
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                  
                                  <div className="p-6 md:w-64 border-t md:border-t-0 md:border-l flex flex-col justify-between">
                                    <div>
                                      <p className="text-sm font-medium">Annual Fee</p>
                                      <p className="text-xl font-bold text-primary">
                                        ₹{(university.fees.min / 100000).toFixed(1)} - {(university.fees.max / 100000).toFixed(1)} Lakhs
                                      </p>
                                      <p className="text-xs text-muted-foreground mt-1">per year</p>
                                      
                                      <div className="mt-4">
                                        <Button variant="outline" size="sm" className="w-full mb-2">
                                          Compare
                                        </Button>
                                        <Button className="w-full">
                                          View Details
                                        </Button>
                                      </div>
                                    </div>
                                    
                                    <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
                                      <p>{university.views.toLocaleString()} students viewed</p>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            </motion.div>
                          ))}
                          
                          <div className="flex justify-center mt-8">
                            <div className="flex flex-col items-center">
                              <Button variant="outline" className="px-8">
                                Load More Results
                              </Button>
                              <p className="text-xs text-muted-foreground mt-2">
                                Showing {filteredResults.length} of {universities.length} universities
                              </p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-12 border rounded-lg bg-muted/20">
                          <Search className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                          <h3 className="text-xl font-medium mb-2">No Results Found</h3>
                          <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                            We couldn't find any universities that match your selected filters. 
                            Try adjusting your filters or search term.
                          </p>
                          <Button onClick={clearAllFilters}>
                            Clear All Filters
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FiltersPrototype;
