
import { University } from '@/data/universityInterface';
import { 
  universities,
  publicUniversities,
  privateUniversities,
  deemedUniversities
} from './universities/index';

// Re-export the University interface for backward compatibility
export type { University };

// Re-export the combined universities array
export { 
  universities,
  publicUniversities,
  privateUniversities,
  deemedUniversities
};
