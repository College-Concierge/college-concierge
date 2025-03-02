
import { University } from '@/data/universityInterface';
import { delhiUniversities } from './delhi-universities';
import { otherUniversities } from './other-universities';

// Combine all university arrays
export const universities: University[] = [
  ...delhiUniversities,
  ...otherUniversities
];

// Re-export individual university groups for more targeted imports
export { delhiUniversities } from './delhi-universities';
export { otherUniversities } from './other-universities';
