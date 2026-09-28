import React from 'react';
import type { Experience } from '../../../types/resume';

export const ExperienceCard: React.FC<Experience> = ({ company, period, role, progression, achievements }) => {
  return (
    <article className="border-t border-gray-200 py-7 first:border-0 first:pt-0 sm:py-9">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="mb-1 text-xl font-bold text-gray-900 sm:text-2xl">{company}</h3>
          <p className="font-semibold text-teal-700">{role}</p>
          {progression && <p className="mt-2 text-sm font-medium leading-6 text-gray-600">{progression}</p>}
        </div>
        <span className="shrink-0 text-sm font-medium text-gray-600">
          {period}
        </span>
      </div>
      <ul className="max-w-4xl space-y-3">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-700">
            <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span className="flex-1 leading-7">{achievement}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
