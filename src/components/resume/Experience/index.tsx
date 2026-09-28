import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { ExperienceCard } from './ExperienceCard';
import type { Experience as ExperienceType } from '../../../types/resume';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="mb-16 scroll-mt-8 sm:mb-24">
      <SectionTitle title="Experience" />
      <div>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </div>
    </section>
  );
};
