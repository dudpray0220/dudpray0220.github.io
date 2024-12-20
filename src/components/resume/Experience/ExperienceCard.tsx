import React from 'react';
import type { Experience } from '../../../types/resume';

export const ExperienceCard: React.FC<Experience> = ({ company, period, role, achievements }) => {
  return (
    <div className="group p-6 rounded-lg hover:bg-gray-50 transition-all">
      <div className="flex justify-between items-baseline mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{company}</h3>
          <p className="text-indigo-600 font-semibold">{role}</p>
        </div>
        <span className="text-base font-medium text-gray-600 bg-gray-50 px-4 py-1.5 rounded-full">
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
