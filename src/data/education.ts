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
    id: 'graduate-school',
    school: 'Example University',
    location: 'City, State',
    degree: 'Master of Science',
    degreeType: 'Graduate',
    description: 'Computer Science with focus on Machine Learning',
    gpa: '3.9/4.0',
    startDate: '2022',
    endDate: '2024'
  },
  {
    id: 'undergraduate',
    school: 'Sample College',
    location: 'City, State',
    degree: 'Bachelor of Science',
    degreeType: 'Undergraduate',
    description: 'Software Engineering',
    gpa: '3.7/4.0',
    startDate: '2018',
    endDate: '2022'
  },
  {
    id: 'certification',
    school: 'Tech Institute',
    location: 'Online',
    degree: 'Professional Certificate',
    degreeType: 'Certification',
    description: 'Full Stack Web Development',
    gpa: 'Completed',
    endDate: '2023'
  }
];