import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../../../types/resume';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="selected-work" className="mb-16 scroll-mt-8 sm:mb-24">
      <SectionTitle title="Selected Work" />
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
