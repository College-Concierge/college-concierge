
import { University } from '@/data/universityInterface';
import { delhiUniversities } from './delhi-universities';
import { otherUniversities } from './other-universities';

// Combine all university arrays
export const universities: University[] = [
  ...delhiUniversities,
  ...otherUniversities
];

// Categorize universities by type
export const publicUniversities = universities.filter(uni => uni.type === 'Public');
export const privateUniversities = universities.filter(uni => uni.type === 'Private');
export const deemedUniversities = universities.filter(uni => uni.type === 'Deemed');

// Re-export individual university groups for more targeted imports
export { delhiUniversities } from './delhi-universities';
export { otherUniversities } from './other-universities';
