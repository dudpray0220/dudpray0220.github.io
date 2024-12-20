import React from 'react';
import type { Experience } from '../../../types/resume';

export const ExperienceCard: React.FC<Experience> = ({ company, period, role, achievements }) => {
  return (
    <div className="group">
      <div className="flex justify-between items-baseline mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{company}</h3>
          <p className="text-gray-600">{role}</p>
        </div>
        <span className="text-gray-500">{period}</span>
      </div>
      <ul className="space-y-2">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="text-gray-600 flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  );
};
