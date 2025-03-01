import React, { useState } from 'react';
import { 
  ArrowRightLeft, 
  Search, 
  School, 
  Trash2, 
  Plus, 
  ChevronDown, 
  ChevronUp,
  CheckCircle, 
  XCircle,
  Info
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle,
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { universities, University as ImportedUniversity } from '@/data/universities';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

const criteriaOptions = [
  { id: 'ranking', label: 'Ranking' },
  { id: 'fees', label: 'Tuition Fees' },
  { id: 'placement', label: 'Placement Rate' },
  { id: 'faculty', label: 'Faculty Quality' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'location', label: 'Location' },
  { id: 'courses', label: 'Courses Offered' },
  { id: 'student_ratio', label: 'Student-Faculty Ratio' },
  { id: 'research', label: 'Research Opportunities' },
  { id: 'hostels', label: 'Hostel Facilities' },
];

type University = {
  id: number;
  name: string;
  type: string;
  location: string;
  ranking: number;
  imageUrl: string;
  fees?: string;
  placement?: string;
  faculty?: number;
  infrastructure?: number;
  courses?: number;
  student_ratio?: string;
  research?: number;
  hostels?: number;
};

const ComparisonToolPrototype = () => {
  const [selectedUniversities, setSelectedUniversities] = useState<University[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<ImportedUniversity[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCriteria, setSelectedCriteria] = useState<string[]>(['ranking', 'fees', 'placement']);
  const [expandedCriteria, setExpandedCriteria] = useState<Record<string, boolean>>({});

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    
    setTimeout(() => {
      const results = universities.filter(uni => 
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 800);
  };

  const addUniversity = (university: ImportedUniversity) => {
    if (selectedUniversities.length < 3 && !selectedUniversities.some(uni => uni.id === university.id)) {
      const enhancedUniversity: University = {
        ...university,
        fees: `₹${Math.floor(Math.random() * 500000) + 100000}/year`,
        placement: `${Math.floor(Math.random() * 30) + 70}%`,
        faculty: Math.floor(Math.random() * 5) + 3,
        infrastructure: Math.floor(Math.random() * 5) + 3,
        courses: Math.floor(Math.random() * 100) + 50,
        student_ratio: `1:${Math.floor(Math.random() * 15) + 5}`,
        research: Math.floor(Math.random() * 5) + 1,
        hostels: Math.floor(Math.random() * 5) + 1,
      };
      
      setSelectedUniversities([...selectedUniversities, enhancedUniversity]);
      setSearchResults([]);
      setSearchTerm('');
    }
  };

  const removeUniversity = (id: number) => {
    setSelectedUniversities(selectedUniversities.filter(uni => uni.id !== id));
  };

  const toggleCriteria = (criteriaId: string) => {
    if (selectedCriteria.includes(criteriaId)) {
      setSelectedCriteria(selectedCriteria.filter(id => id !== criteriaId));
    } else {
      setSelectedCriteria([...selectedCriteria, criteriaId]);
    }
  };

  const toggleCriteriaExpansion = (criteriaId: string) => {
    setExpandedCriteria({
      ...expandedCriteria,
      [criteriaId]: !expandedCriteria[criteriaId]
    });
  };

  const getBestForCriterion = (criteriaId: string) => {
    if (selectedUniversities.length < 2) return null;
    
    let bestUniId: number | null = null;
    
    switch(criteriaId) {
      case 'ranking':
        bestUniId = selectedUniversities.reduce((best, uni) => 
          !best || uni.ranking < selectedUniversities.find(u => u.id === best)!.ranking ? uni.id : best
        , null as number | null);
        break;
      case 'fees':
        bestUniId = selectedUniversities.reduce((best, uni) => {
          if (!best) return uni.id;
          const bestFee = parseInt(selectedUniversities.find(u => u.id === best)!.fees!.replace(/[^\d]/g, ''));
          const currentFee = parseInt(uni.fees!.replace(/[^\d]/g, ''));
          return currentFee < bestFee ? uni.id : best;
        }, null as number | null);
        break;
      case 'placement':
        bestUniId = selectedUniversities.reduce((best, uni) => {
          if (!best) return uni.id;
          const bestRate = parseInt(selectedUniversities.find(u => u.id === best)!.placement!);
          const currentRate = parseInt(uni.placement!);
          return currentRate > bestRate ? uni.id : best;
        }, null as number | null);
        break;
      case 'faculty':
      case 'infrastructure':
      case 'research':
      case 'hostels':
        bestUniId = selectedUniversities.reduce((best, uni) => {
          if (!best) return uni.id;
          const bestValue = selectedUniversities.find(u => u.id === best)![criteriaId as keyof University] as number;
          const currentValue = uni[criteriaId as keyof University] as number;
          return currentValue > bestValue ? uni.id : best;
        }, null as number | null);
        break;
      case 'courses':
        bestUniId = selectedUniversities.reduce((best, uni) => {
          if (!best) return uni.id;
          const bestValue = selectedUniversities.find(u => u.id === best)!.courses!;
          const currentValue = uni.courses!;
          return currentValue > bestValue ? uni.id : best;
        }, null as number | null);
        break;
      case 'student_ratio':
        bestUniId = selectedUniversities.reduce((best, uni) => {
          if (!best) return uni.id;
          const bestRatio = parseInt(selectedUniversities.find(u => u.id === best)!.student_ratio!.split(':')[1]);
          const currentRatio = parseInt(uni.student_ratio!.split(':')[1]);
          return currentRatio < bestRatio ? uni.id : best;
        }, null as number | null);
        break;
      default:
        return null;
    }
    
    return bestUniId;
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">University Comparison Tool</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Compare up to 3 universities side by side to make an informed decision about your educational future
        </p>
      </motion.div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ArrowRightLeft className="mr-2 h-5 w-5 text-primary" />
            Select Universities to Compare
          </CardTitle>
          <CardDescription>
            Search and add up to 3 universities for detailed comparison
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex gap-2 mb-4">
            <Input
              placeholder="Search universities by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit" disabled={!searchTerm.trim() || isSearching}>
              {isSearching ? (
                <span className="flex items-center">
                  <span className="animate-spin mr-1">⌛</span> Searching...
                </span>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </>
              )}
            </Button>
          </form>
          
          {searchResults.length > 0 && (
            <div className="border rounded-md mb-4 max-h-60 overflow-y-auto">
              <ul className="divide-y">
                {searchResults.map((uni) => (
                  <li key={uni.id} className="p-3 hover:bg-muted/50 flex justify-between items-center">
                    <div className="flex items-center">
                      <School className="h-4 w-4 mr-2 text-primary" />
                      <div>
                        <p className="font-medium">{uni.name}</p>
                        <p className="text-xs text-muted-foreground">{uni.location}</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => addUniversity(uni)}
                      disabled={selectedUniversities.some(selected => selected.id === uni.id) || selectedUniversities.length >= 3}
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className={`border border-dashed ${selectedUniversities[index] ? 'border-border' : 'border-muted'}`}>
                <CardContent className="p-4 flex flex-col items-center justify-center min-h-[200px]">
                  {selectedUniversities[index] ? (
                    <div className="text-center">
                      <div className="relative w-16 h-16 mx-auto mb-3">
                        <img 
                          src={selectedUniversities[index].imageUrl} 
                          alt={selectedUniversities[index].name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <h3 className="font-medium mb-1">{selectedUniversities[index].name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{selectedUniversities[index].location}</p>
                      <Badge variant="outline" className="mb-4">Rank: {selectedUniversities[index].ranking}</Badge>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => removeUniversity(selectedUniversities[index].id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                        <School className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">
                        {index === 0 ? (
                          "Search and add a university"
                        ) : (
                          selectedUniversities.length >= index 
                            ? "Add another university" 
                            : "Add university (optional)"
                        )}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {selectedUniversities.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-primary" />
              Comparison Criteria
            </CardTitle>
            <CardDescription>
              Select the criteria you want to compare between the universities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-6">
              {criteriaOptions.map((criteria) => (
                <Badge
                  key={criteria.id}
                  variant={selectedCriteria.includes(criteria.id) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleCriteria(criteria.id)}
                >
                  {criteria.label}
                </Badge>
              ))}
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-3 bg-muted/50 border-b font-medium text-muted-foreground">Criteria</th>
                    {selectedUniversities.map((uni) => (
                      <th key={uni.id} className="text-left p-3 bg-muted/50 border-b font-medium">{uni.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {selectedCriteria.map((criteriaId) => {
                    const criteria = criteriaOptions.find(c => c.id === criteriaId)!;
                    const bestUniId = getBestForCriterion(criteriaId);
                    
                    return (
                      <React.Fragment key={criteriaId}>
                        <tr className="border-b hover:bg-muted/30">
                          <td className="p-3 flex items-center justify-between">
                            <span>{criteria.label}</span>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6"
                              onClick={() => toggleCriteriaExpansion(criteriaId)}
                            >
                              {expandedCriteria[criteriaId] ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </Button>
                          </td>
                          {selectedUniversities.map((uni) => {
                            let value: React.ReactNode;
                            let ratingStars: React.ReactNode;
                            
                            switch(criteriaId) {
                              case 'ranking':
                                value = `#${uni.ranking} in India`;
                                break;
                              case 'fees':
                                value = uni.fees || 'N/A';
                                break;
                              case 'placement':
                                value = uni.placement || 'N/A';
                                break;
                              case 'faculty':
                              case 'infrastructure':
                              case 'research':
                              case 'hostels':
                                const rating = uni[criteriaId as keyof University] as number || 0;
                                ratingStars = (
                                  <div className="flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <div key={i} className={`w-4 h-4 ${i < rating ? 'text-edu-amber' : 'text-muted'}`}>★</div>
                                    ))}
                                  </div>
                                );
                                value = ratingStars;
                                break;
                              case 'courses':
                                value = uni.courses ? `${uni.courses} courses` : 'N/A';
                                break;
                              case 'student_ratio':
                                value = uni.student_ratio || 'N/A';
                                break;
                              case 'location':
                                value = uni.location;
                                break;
                              default:
                                value = 'N/A';
                            }
                            
                            return (
                              <td 
                                key={uni.id} 
                                className={`p-3 ${bestUniId === uni.id ? 'bg-primary/5' : ''}`}
                              >
                                <div className="flex items-center">
                                  {bestUniId === uni.id && selectedUniversities.length > 1 && (
                                    <span className="mr-2 text-primary">★</span>
                                  )}
                                  {value}
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                        {expandedCriteria[criteriaId] && (
                          <tr className="bg-muted/20 text-xs">
                            <td colSpan={selectedUniversities.length + 1} className="p-3">
                              <div className="flex items-start">
                                <Info className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                                <div>
                                  {criteriaId === 'ranking' && (
                                    <p>Ranking represents the institution's position in national rankings. Lower numbers indicate better ranking.</p>
                                  )}
                                  {criteriaId === 'fees' && (
                                    <p>Average tuition fees per academic year. Does not include accommodation or other expenses.</p>
                                  )}
                                  {criteriaId === 'placement' && (
                                    <p>Percentage of students who received job placements through campus recruitment in the previous academic year.</p>
                                  )}
                                  {criteriaId === 'faculty' && (
                                    <p>Rating based on faculty qualifications, experience, and student feedback. 5 stars indicate excellence.</p>
                                  )}
                                  {criteriaId === 'infrastructure' && (
                                    <p>Rating of campus facilities including classrooms, laboratories, libraries, and other amenities.</p>
                                  )}
                                  {criteriaId === 'courses' && (
                                    <p>Total number of undergraduate and postgraduate courses offered by the institution.</p>
                                  )}
                                  {criteriaId === 'student_ratio' && (
                                    <p>The ratio of faculty members to students. Lower ratios generally indicate more individual attention.</p>
                                  )}
                                  {criteriaId === 'research' && (
                                    <p>Rating based on research output, citations, and funding received for research projects.</p>
                                  )}
                                  {criteriaId === 'hostels' && (
                                    <p>Rating of on-campus accommodation facilities based on quality, amenities, and student feedback.</p>
                                  )}
                                  {criteriaId === 'location' && (
                                    <p>Geographic location of the institution, which may affect accessibility, climate, and lifestyle.</p>
                                  )}
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setSelectedCriteria(criteriaOptions.map(c => c.id))}>
              Select All Criteria
            </Button>
            <Button variant="outline" onClick={() => setSelectedCriteria([])}>
              Clear Selection
            </Button>
            <Button>
              Generate Detailed Report
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ComparisonToolPrototype;
