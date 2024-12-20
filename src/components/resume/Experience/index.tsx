import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { ExperienceCard } from './ExperienceCard';
import type { Experience as ExperienceType } from '../../../types/resume';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section className="mb-12">
      <SectionTitle title="Experience" />
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
};
