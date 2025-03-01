
import React, { useState } from 'react';
import { Filter, X, ChevronDown, ChevronUp, Sliders, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
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
  };
  
  // Apply filters (simulated)
  const applyFilters = () => {
    // This would normally trigger an API call or filter the data
    console.log('Applied filters:', {
      locations: selectedLocations,
      ranking: rankingRange,
      fees: feesRange,
      courses: selectedCourses,
      types: selectedTypes,
      search: searchTerm,
    });
  };
  
  // Count active filters
  const activeFilterCount = 
    selectedLocations.length + 
    (rankingRange[0] !== 1 || rankingRange[1] !== 100 ? 1 : 0) +
    (feesRange[0] !== 0 || feesRange[1] !== 10 ? 1 : 0) +
    selectedCourses.length +
    selectedTypes.length +
    (searchTerm ? 1 : 0);
  
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Find Your Perfect University</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Use our advanced filters to narrow down universities based on your preferences
        </p>
      </motion.div>
      
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
                    <Button className="w-full" onClick={() => {
                      applyFilters();
                      setIsMobileFiltersOpen(false);
                    }}>
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
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="ranking">Ranking: Low to High</SelectItem>
                  <SelectItem value="ranking-desc">Ranking: High to Low</SelectItem>
                  <SelectItem value="fees">Fees: Low to High</SelectItem>
                  <SelectItem value="fees-desc">Fees: High to Low</SelectItem>
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
          
          {/* Placeholder for results */}
          <div className="bg-muted/30 rounded-lg p-12 text-center">
            <h3 className="text-lg font-medium mb-2">Interactive Prototype</h3>
            <p className="text-muted-foreground mb-4">
              In the actual application, university results would be displayed here based on the selected filters.
            </p>
            <p className="text-muted-foreground">
              Try selecting different filters to see how the interface responds!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersPrototype;
