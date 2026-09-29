export type Company = 'TmaxSoft' | 'TmaxGaia' | 'Tilon';

export interface Profile {
  name: string;
  role: string;
  eyebrow: string;
  headline: string;
  introduction: string[];
  github: string;
  email: string;
}

export interface Experience {
  company: Company;
  period: string;
  role: string;
  progression?: string;
  achievements: string[];
}

export interface Project {
  title: string;
  period: string;
  company: Company;
  summary: string;
  achievements: string[];
  stack: string[];
}

export interface PersonalProduct {
  title: string;
  description: string;
  achievements: string[];
  stack?: string[];
  projectUrl?: string;
  variant: 'featured' | 'compact';
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  school: string;
  major: string;
  period: string;
}

export interface ResumeData {
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  personalProducts: PersonalProduct[];
  skills: Skill[];
  education: Education[];
}
