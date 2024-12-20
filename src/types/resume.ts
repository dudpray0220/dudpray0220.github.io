// src/types/resume.ts
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
}
