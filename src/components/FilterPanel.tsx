
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { X, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterPanelProps {
  onFilterChange: (filters: Record<string, any>) => void;
  className?: string;
}

const FilterPanel = ({ onFilterChange, className }: FilterPanelProps) => {
  const [filters, setFilters] = useState({
    type: [],
    state: [],
    category: [],
    rating: 0,
    feesRange: [0, 2500000],
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const universityTypes = ["Public", "Private", "Deemed"];
  const states = ["Delhi", "Karnataka", "Maharashtra", "Tamil Nadu", "Gujarat", "Rajasthan"];
  const categories = [
    "Engineering", 
    "Management", 
    "Medical", 
    "Law", 
    "Arts", 
    "Science", 
    "Commerce"
  ];

  const handleTypeChange = (type: string) => {
    setFilters((prev) => {
      const newTypes = prev.type.includes(type)
        ? prev.type.filter((t) => t !== type)
        : [...prev.type, type];
      
      const updatedFilters = { ...prev, type: newTypes };
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const handleStateChange = (state: string) => {
    setFilters((prev) => {
      const newStates = prev.state.includes(state)
        ? prev.state.filter((s) => s !== state)
        : [...prev.state, state];
      
      const updatedFilters = { ...prev, state: newStates };
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const handleCategoryChange = (category: string) => {
    setFilters((prev) => {
      const newCategories = prev.category.includes(category)
        ? prev.category.filter((c) => c !== category)
        : [...prev.category, category];
      
      const updatedFilters = { ...prev, category: newCategories };
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const handleRatingChange = (value: number[]) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev, rating: value[0] };
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const handleFeesRangeChange = (value: number[]) => {
    setFilters((prev) => {
      const updatedFilters = { ...prev, feesRange: value };
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  const resetFilters = () => {
    const resetValue = {
      type: [],
      state: [],
      category: [],
      rating: 0,
      feesRange: [0, 2500000],
    };
    setFilters(resetValue);
    onFilterChange(resetValue);
  };

  const formatFeesValue = (value: number) => {
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)}L`;
    }
    return `₹${(value / 1000).toFixed(0)}K`;
  };

  const filterContent = (
    <>
      <div className="space-y-1">
        <h3 className="text-sm font-medium mb-2">University Type</h3>
        <div className="flex flex-wrap gap-2">
          {universityTypes.map((type) => (
            <Button
              key={type}
              variant={filters.type.includes(type) ? "default" : "outline"}
              size="sm"
              onClick={() => handleTypeChange(type)}
              className="text-xs h-7 px-2"
            >
              {type}
            </Button>
          ))}
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-1">
        <h3 className="text-sm font-medium mb-2">State</h3>
        <div className="flex flex-wrap gap-2">
          {states.map((state) => (
            <Button
              key={state}
              variant={filters.state.includes(state) ? "default" : "outline"}
              size="sm"
              onClick={() => handleStateChange(state)}
              className="text-xs h-7 px-2"
            >
              {state}
            </Button>
          ))}
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-1">
        <h3 className="text-sm font-medium mb-2">Course Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filters.category.includes(category) ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className="text-xs h-7 px-2"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Rating</h3>
        <div className="px-2">
          <Slider
            defaultValue={[filters.rating]}
            max={5}
            step={1}
            onValueChange={handleRatingChange}
            className="mt-2"
          />
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>Any</span>
            <span>{filters.rating > 0 ? `${filters.rating}+ stars` : "Any rating"}</span>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Fees Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={filters.feesRange}
            min={0}
            max={2500000}
            step={50000}
            onValueChange={handleFeesRangeChange}
            className="mt-2"
          />
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>{formatFeesValue(filters.feesRange[0])}</span>
            <span>{formatFeesValue(filters.feesRange[1])}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t">
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={resetFilters}
        >
          <X className="h-3.5 w-3.5 mr-1.5" />
          Reset Filters
        </Button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop filters */}
      <div className={cn("hidden md:block", className)}>
        <div className="sticky top-20 bg-card rounded-lg border p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Filters</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetFilters}
              className="h-8 px-2 text-xs"
            >
              Clear all
            </Button>
          </div>
          {filterContent}
        </div>
      </div>

      {/* Mobile filter button */}
      <div className="md:hidden fixed bottom-4 right-4 z-40">
        <Button
          className="rounded-full shadow-lg"
          size="icon"
          onClick={() => setShowMobileFilters(true)}
        >
          <Filter className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile filters slide-in panel */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-lg p-4 overflow-y-auto animate-slideRight">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-medium flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileFilters(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {filterContent}
          </div>
        </div>
      )}
    </>
  );
};

export default FilterPanel;
