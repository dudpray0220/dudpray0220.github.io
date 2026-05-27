import React from 'react';
import type { Experience } from '../../../types/resume';

export const ExperienceCard: React.FC<Experience> = ({ company, period, role, achievements }) => {
  return (
    <div className="group rounded-lg transition-all sm:p-6 sm:hover:bg-gray-50">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{company}</h3>
          <p className="text-indigo-600 font-semibold">{role}</p>
        </div>
        <span className="w-fit rounded-full bg-gray-50 px-4 py-1.5 text-base font-medium text-gray-600">
          {period}
        </span>
      </div>
      <ul className="space-y-3">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="text-gray-600 flex items-start gap-3">
            <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
            <span className="flex-1 leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
