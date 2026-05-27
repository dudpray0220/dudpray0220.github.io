import React from 'react';
import type { Education } from '../../../types/resume';

export const EducationCard: React.FC<{ education: Education[] }> = ({ education }) => {
  return (
    <div className="mb-12 sm:mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Education</h2>
      <ul className="space-y-6">
        {education.map((edu, idx) => (
          <li key={idx} className="group rounded-lg transition-all sm:p-6 sm:hover:bg-gray-50">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.school}</h3>
                <p className="text-indigo-600 font-semibold">{edu.major}</p>
              </div>
              <span className="w-fit shrink-0 rounded-full bg-gray-50 px-4 py-1.5 text-base font-medium text-gray-600">
                {edu.period}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
