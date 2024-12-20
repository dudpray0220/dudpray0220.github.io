import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../../../types/resume';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section>
      <SectionTitle title="Projects" />
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};
