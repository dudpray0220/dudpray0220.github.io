import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import type { Education } from '../../../types/resume';

export const EducationCard: React.FC<{ education: Education[] }> = ({ education }) => (
  <section id="education" className="mb-16 scroll-mt-8 sm:mb-24">
    <SectionTitle title="Education" />
    <ul className="grid gap-5 sm:grid-cols-2">
      {education.map((edu) => (
        <li key={edu.school} className="border-t border-gray-200 pt-4">
          <h3 className="font-bold text-gray-900">{edu.school}</h3>
          <p className="mt-1 text-sm text-gray-700">{edu.major}</p>
          <p className="mt-2 text-sm text-gray-600">{edu.period}</p>
        </li>
      ))}
    </ul>
  </section>
);
