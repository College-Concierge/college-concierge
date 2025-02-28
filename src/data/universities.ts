
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

export const universities: University[] = [
  {
    id: 1,
    name: 'Indian Institute of Technology Delhi',
    shortName: 'IIT Delhi',
    location: 'Hauz Khas, New Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Public',
    established: 1961,
    accreditation: 'NAAC A++',
    rating: 4.8,
    ranking: 1,
    fees: {
      min: 200000,
      max: 300000,
    },
    courses: [1, 2, 3, 4],
    facilities: ['Library', 'Sports Complex', 'Hostels', 'Labs', 'Cafeteria', 'Research Center'],
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'IIT Delhi is one of the premier engineering institutes in India. Established in 1961, it has consistently ranked among the top engineering colleges in various national and international rankings.',
    website: 'https://home.iitd.ac.in/',
    views: 25000,
    isPopular: true
  },
  {
    id: 2,
    name: 'Delhi University',
    shortName: 'DU',
    location: 'North Campus, New Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Public',
    established: 1922,
    accreditation: 'NAAC A++',
    rating: 4.5,
    ranking: 2,
    fees: {
      min: 10000,
      max: 100000,
    },
    courses: [5, 6, 7, 8],
    facilities: ['Library', 'Sports Ground', 'Auditorium', 'Cafeteria', 'Research Labs'],
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'The University of Delhi, informally known as Delhi University (DU), is a collegiate public central university located in Delhi, India. It was founded in 1922 by an Act of the Central Legislative Assembly.',
    website: 'http://www.du.ac.in/',
    views: 22000,
    isPopular: true
  },
  {
    id: 3,
    name: 'Indian Institute of Management Ahmedabad',
    shortName: 'IIM-A',
    location: 'Vastrapur, Ahmedabad',
    city: 'Ahmedabad',
    state: 'Gujarat',
    type: 'Public',
    established: 1961,
    accreditation: 'NAAC A++',
    rating: 4.9,
    ranking: 3,
    fees: {
      min: 2300000,
      max: 2500000,
    },
    courses: [9, 10, 11],
    facilities: ['Library', 'Sports Complex', 'Hostels', 'Auditorium', 'Research Center', 'Incubation Center'],
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Indian Institute of Management Ahmedabad is a premier business school located in Ahmedabad, Gujarat, India. It was established in 1961 and is consistently ranked as one of the top business schools in India and Asia.',
    website: 'https://www.iima.ac.in/',
    views: 18000,
    isPopular: true
  },
  {
    id: 4,
    name: 'Jawaharlal Nehru University',
    shortName: 'JNU',
    location: 'New Mehrauli Road, New Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Public',
    established: 1969,
    accreditation: 'NAAC A++',
    rating: 4.6,
    ranking: 4,
    fees: {
      min: 15000,
      max: 50000,
    },
    courses: [12, 13, 14],
    facilities: ['Library', 'Sports Complex', 'Hostels', 'Cafeteria', 'Research Labs'],
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Jawaharlal Nehru University is a public central university in New Delhi, India. It was established in 1969 and named after Jawaharlal Nehru, India\'s first Prime Minister.',
    website: 'https://www.jnu.ac.in/',
    views: 16000,
    isPopular: true
  },
  {
    id: 5,
    name: 'All India Institute of Medical Sciences',
    shortName: 'AIIMS Delhi',
    location: 'Ansari Nagar, New Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Public',
    established: 1956,
    accreditation: 'NAAC A++',
    rating: 4.9,
    ranking: 5,
    fees: {
      min: 6000,
      max: 100000,
    },
    courses: [15, 16, 17],
    facilities: ['Hospital', 'Library', 'Labs', 'Hostels', 'Sports Complex', 'Research Center'],
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'All India Institute of Medical Sciences (AIIMS) is a group of autonomous government public medical colleges of higher education. AIIMS New Delhi, the fore-runner parent excellence institution, was established in 1956.',
    website: 'https://www.aiims.edu/',
    views: 14000,
    isPopular: true
  },
  {
    id: 6,
    name: 'Birla Institute of Technology and Science',
    shortName: 'BITS Pilani',
    location: 'Pilani, Rajasthan',
    city: 'Pilani',
    state: 'Rajasthan',
    type: 'Private',
    established: 1964,
    accreditation: 'NAAC A',
    rating: 4.7,
    ranking: 6,
    fees: {
      min: 200000,
      max: 350000,
    },
    courses: [18, 19, 20],
    facilities: ['Library', 'Sports Complex', 'Hostels', 'Labs', 'Cafeteria', 'Research Center'],
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Birla Institute of Technology & Science, Pilani is an institute of higher education and a deemed university under Section 3 of the UGC Act 1956.',
    website: 'https://www.bits-pilani.ac.in/',
    views: 12000,
    isPopular: false
  },
  {
    id: 7,
    name: 'Manipal Academy of Higher Education',
    shortName: 'MAHE',
    location: 'Manipal, Karnataka',
    city: 'Manipal',
    state: 'Karnataka',
    type: 'Deemed',
    established: 1953,
    accreditation: 'NAAC A++',
    rating: 4.6,
    ranking: 7,
    fees: {
      min: 150000,
      max: 500000,
    },
    courses: [21, 22, 23],
    facilities: ['Library', 'Sports Complex', 'Hostels', 'Labs', 'Hospital', 'Research Center'],
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Manipal Academy of Higher Education is a deemed to be university located in Manipal, Karnataka, India. It was established in 1953 and was granted deemed to be university status in 1993.',
    website: 'https://manipal.edu/',
    views: 11000,
    isPopular: false
  },
  {
    id: 8,
    name: 'National Law School of India University',
    shortName: 'NLSIU',
    location: 'Nagarbhavi, Bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'Public',
    established: 1987,
    accreditation: 'NAAC A',
    rating: 4.8,
    ranking: 8,
    fees: {
      min: 200000,
      max: 300000,
    },
    courses: [24],
    facilities: ['Library', 'Moot Court', 'Hostels', 'Sports Complex', 'Cafeteria'],
    imageUrl: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'The National Law School of India University (NLSIU) is a public law school and a National Law University located in Bangalore, Karnataka. It was the first National Law University to be established in India.',
    website: 'https://www.nls.ac.in/',
    views: 9000,
    isPopular: false
  }
];
