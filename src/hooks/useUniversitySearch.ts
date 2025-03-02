
import { useState, useEffect } from 'react';
import { University } from '@/data/universityInterface';
import { searchUniversities } from '@/services/universityService';

interface UseUniversitySearchProps {
  initialSortBy?: 'popular' | 'top-ranked';
  initialLimit?: number;
}

export const useUniversitySearch = ({
  initialSortBy = 'popular',
  initialLimit = 6
}: UseUniversitySearchProps = {}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'top-ranked'>(initialSortBy);
  const [limit, setLimit] = useState(initialLimit);
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    // Simulate API call with a small delay
    const timer = setTimeout(() => {
      const results = searchUniversities(searchTerm, sortBy, limit);
      setUniversities(results);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchTerm, sortBy, limit]);
  
  return {
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    limit,
    setLimit,
    universities,
    loading,
    isEmptyResult: !loading && universities.length === 0,
    clearSearch: () => setSearchTerm('')
  };
};
