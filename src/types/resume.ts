export type Company = 'Tmax Gaia' | 'Tilon';

export interface Profile {
  name: string;
  role: string;
  github: string;
  email: string;
  about: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  period: string;
  role: string;
  achievements: string[];
}

export interface Project {
  title: string;
  period: string;
  achievements: string[];
  stack: string[];
  company: Company;
}

export interface Education {
  school: string;
  major: string;
  period: string;
}
export interface ResumeData {
  profile: Profile;
  skills: {
    language: string[];
    framework: string[];
    infrastructure: string[];
    database: string[];
    tools: string[];
    etc: string[];
  };
  experiences: Experience[];
  projects: Project[];
  education: Education[];
}
