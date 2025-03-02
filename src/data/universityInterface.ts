
export interface University {
  id: number;
  name: string;
  shortName: string;
  location: string;
  city: string;
  state: string;
  type: 'Public' | 'Private' | 'Deemed';
  established: number;
  accreditation: string;
  rating: number;
  ranking: number;
  fees: {
    min: number;
    max: number;
  };
  courses: number[];
  facilities: string[];
  imageUrl: string;
  description: string;
  website: string;
  views: number;
  isPopular: boolean;
}
