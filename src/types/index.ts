export interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  projectType: string;
  domainTags: string[];
  techStack: string[];
  startDate?: string; // Format: "YYYY-MM" or "YYYY"
  endDate?: string; // Format: "YYYY-MM" or "YYYY", or "Present" for ongoing
  company?: {
    name: string;
    website?: string;
  };
  links?: {
    external?: string;
  };
  dedicatedPage?: string;
}

export interface ProjectsData {
  projects: Project[];
}

export interface SkillSet {
  skills: string[];
  color: string;
}

export interface SkillsData {
  skills: {
    [skillSetName: string]: SkillSet;
  };
}

export interface FilterState {
  type: string;
  domain: string;
  skillToggles: {
    technical: boolean;
    research: boolean;
    professional: boolean;
  };
}

export type Theme = 'light' | 'dark'; 