
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Book, Filter, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string, filters: Record<string, any>) => void;
  className?: string;
  placeholder?: string;
  fullWidth?: boolean;
}

const SearchBar = ({
  onSearch,
  className,
  placeholder = "Search universities and courses...",
  fullWidth = false,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: "",
    state: "",
    category: "",
    rating: "",
    fees: "",
  });

  const handleSearch = () => {
    onSearch(query, filters);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const resetFilters = () => {
    setFilters({
      type: "",
      state: "",
      category: "",
      rating: "",
      fees: "",
    });
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        fullWidth ? "w-full" : "max-w-lg",
        className
      )}
    >
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <Input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pl-10 pr-4 py-2 w-full bg-background border-input"
        />
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowFilters(true)}
            className="shrink-0"
          >
            <Filter className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filter Search Results</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">University Type</label>
              <div className="flex flex-wrap gap-2">
                {["Public", "Private", "Deemed"].map((type) => (
                  <Button
                    key={type}
                    variant={filters.type === type ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      handleFilterChange(
                        "type",
                        filters.type === type ? "" : type
                      )
                    }
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">State</label>
              <div className="flex flex-wrap gap-2">
                {["Delhi", "Karnataka", "Maharashtra", "Tamil Nadu", "Gujarat"].map(
                  (state) => (
                    <Button
                      key={state}
                      variant={filters.state === state ? "default" : "outline"}
                      size="sm"
                      onClick={() =>
                        handleFilterChange(
                          "state",
                          filters.state === state ? "" : state
                        )
                      }
                    >
                      {state}
                    </Button>
                  )
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Course Category</label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Engineering",
                  "Management",
                  "Medical",
                  "Law",
                  "Arts",
                  "Science",
                ].map((category) => (
                  <Button
                    key={category}
                    variant={
                      filters.category === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() =>
                      handleFilterChange(
                        "category",
                        filters.category === category ? "" : category
                      )
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Rating</label>
              <div className="flex flex-wrap gap-2">
                {["4+", "3+", "2+"].map((rating) => (
                  <Button
                    key={rating}
                    variant={filters.rating === rating ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      handleFilterChange(
                        "rating",
                        filters.rating === rating ? "" : rating
                      )
                    }
                  >
                    {rating} Stars
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Fees Range</label>
              <div className="flex flex-wrap gap-2">
                {["Low", "Medium", "High"].map((fees) => (
                  <Button
                    key={fees}
                    variant={filters.fees === fees ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      handleFilterChange(
                        "fees",
                        filters.fees === fees ? "" : fees
                      )
                    }
                  >
                    {fees}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={resetFilters}
                className="flex items-center gap-1"
              >
                <X className="h-3 w-3" />
                Reset
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  handleSearch();
                  setShowFilters(false);
                }}
                className="flex items-center gap-1"
              >
                <Search className="h-3 w-3" />
                Apply
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Button onClick={handleSearch} className="shrink-0">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
