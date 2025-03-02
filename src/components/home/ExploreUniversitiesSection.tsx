
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UniversityCard from '@/components/university/UniversityCard';
import SearchInput from '@/components/search/SearchInput';
import SectionHeader from '@/components/ui/section-header';
import SectionContainer from '@/components/layout/SectionContainer';
import { useUniversitySearch } from '@/hooks/useUniversitySearch';

const ExploreUniversitiesSection = () => {
  const { 
    searchTerm, 
    setSearchTerm, 
    sortBy, 
    setSortBy, 
    universities, 
    loading, 
    isEmptyResult, 
    clearSearch 
  } = useUniversitySearch();

  return (
    <SectionContainer className="bg-background" id="explore-universities">
      <SectionHeader 
        title="Explore Universities"
        description="Discover top-ranked universities across India and find your perfect match with our comprehensive database and advanced filters."
      />
      
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search universities..."
            className="w-full md:w-96"
          />
          
          <Tabs 
            value={sortBy} 
            onValueChange={(value) => setSortBy(value as 'popular' | 'top-ranked')} 
            className="w-full md:w-auto"
          >
            <TabsList>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="top-ranked">Top Ranked</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          {loading ? (
            // Loading placeholders
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-full">
                <div className="border rounded-lg h-full animate-pulse bg-muted/30">
                  <div className="h-48 rounded-t-lg bg-muted"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                    <div className="h-4 bg-muted rounded w-1/4"></div>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="h-10 bg-muted rounded"></div>
                  </div>
                </div>
              </div>
            ))
          ) : isEmptyResult ? (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-12 text-center">
              <p className="text-muted-foreground">No universities found matching your search criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={clearSearch}
              >
                Clear Search
              </Button>
            </div>
          ) : (
            universities.map((university) => (
              <UniversityCard key={university.id} university={university} />
            ))
          )}
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
    </SectionContainer>
  );
};

export default ExploreUniversitiesSection;
