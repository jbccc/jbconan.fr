export interface Education {
  id: string;
  school: string;
  location: string;
  degree: string;
  degreeType: string;
  description: string;
  gpa: string;
  startDate?: string;
  endDate?: string;
}

export const educationData: Education[] = [
  {
    id: 'berkeley',
    school: 'UC Berkeley',
    location: 'Berkeley',
    degree: "Master's thesis",
    degreeType: 'Graduate Research',
    description: 'Neural network interpretability for Clinical Trials',
    gpa: '4.0/4.0',
    endDate: '2025'
  },
  {
    id: 'eth',
    school: 'ETH Zürich',
    location: 'Zurich',
    degree: 'Master of Science',
    degreeType: 'Graduate',
    description: 'Applied Mathematics',
    gpa: '3.8/4.0',
    endDate: '2025'
  },
  {
    id: 'epfl',
    school: 'EPFL',
    location: 'Lausanne',
    degree: 'Bachelor of Science',
    degreeType: 'Undergraduate',
    description: 'Mathematics',
    gpa: '3.4/4.0',
    endDate: '2022'
  }
];