
import { University } from '@/data/universityInterface';
import { universities } from '@/data/universities';

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

export const getUniversitiesByCourseId = (courseId: number): University[] => {
  return universities.filter(uni => uni.courses.includes(courseId));
};
