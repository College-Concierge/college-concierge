
import { University } from '@/data/universityInterface';
import { 
  universities, 
  publicUniversities, 
  privateUniversities, 
  deemedUniversities 
} from '@/data/universities';

export const getPopularUniversities = (limit: number = 6): University[] => {
  return [...universities]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
};

export const getTopRankedUniversities = (limit: number = 6): University[] => {
  return [...universities]
    .sort((a, b) => a.ranking - b.ranking)
    .slice(0, limit);
};

export const searchUniversities = (
  searchTerm: string,
  sortBy: 'popular' | 'top-ranked' = 'popular',
  limit: number = 6
): University[] => {
  const filtered = universities.filter(uni => 
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (sortBy === 'popular') {
    return [...filtered].sort((a, b) => b.views - a.views).slice(0, limit);
  } else {
    return [...filtered].sort((a, b) => a.ranking - b.ranking).slice(0, limit);
  }
};

export const getUniversityById = (id: number): University | undefined => {
  return universities.find(uni => uni.id === id);
};

export const getUniversitiesByState = (state: string): University[] => {
  return universities.filter(uni => uni.state === state);
};

export const getUniversitiesByType = (type: 'Public' | 'Private' | 'Deemed'): University[] => {
  return universities.filter(uni => uni.type === type);
};

// New utility functions for pre-categorized universities
export const getPublicUniversities = (limit?: number): University[] => {
  return limit ? publicUniversities.slice(0, limit) : publicUniversities;
};

export const getPrivateUniversities = (limit?: number): University[] => {
  return limit ? privateUniversities.slice(0, limit) : privateUniversities;
};

export const getDeemedUniversities = (limit?: number): University[] => {
  return limit ? deemedUniversities.slice(0, limit) : deemedUniversities;
};

// Function to get universities by multiple types
export const getUniversitiesByTypes = (types: Array<'Public' | 'Private' | 'Deemed'>): University[] => {
  return universities.filter(uni => types.includes(uni.type));
};

export const getUniversitiesByCourseId = (courseId: number): University[] => {
  return universities.filter(uni => uni.courses.includes(courseId));
};

// Enhanced search with type filtering
export const advancedSearch = (
  params: {
    searchTerm?: string,
    types?: Array<'Public' | 'Private' | 'Deemed'>,
    states?: string[],
    minRanking?: number,
    maxRanking?: number,
    sortBy?: 'popular' | 'top-ranked' | 'fees-low-to-high' | 'fees-high-to-low',
    limit?: number
  }
): University[] => {
  let filtered = [...universities];
  
  // Filter by search term
  if (params.searchTerm) {
    filtered = filtered.filter(uni => 
      uni.name.toLowerCase().includes(params.searchTerm!.toLowerCase()) ||
      uni.location.toLowerCase().includes(params.searchTerm!.toLowerCase())
    );
  }
  
  // Filter by types
  if (params.types && params.types.length > 0) {
    filtered = filtered.filter(uni => params.types!.includes(uni.type));
  }
  
  // Filter by states
  if (params.states && params.states.length > 0) {
    filtered = filtered.filter(uni => params.states!.includes(uni.state));
  }
  
  // Filter by ranking range
  if (params.minRanking !== undefined) {
    filtered = filtered.filter(uni => uni.ranking >= params.minRanking!);
  }
  if (params.maxRanking !== undefined) {
    filtered = filtered.filter(uni => uni.ranking <= params.maxRanking!);
  }
  
  // Sort results
  if (params.sortBy) {
    switch (params.sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'top-ranked':
        filtered.sort((a, b) => a.ranking - b.ranking);
        break;
      case 'fees-low-to-high':
        filtered.sort((a, b) => a.fees.min - b.fees.min);
        break;
      case 'fees-high-to-low':
        filtered.sort((a, b) => b.fees.max - a.fees.max);
        break;
    }
  }
  
  // Apply limit
  if (params.limit) {
    filtered = filtered.slice(0, params.limit);
  }
  
  return filtered;
};
