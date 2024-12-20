import React from 'react';
import type { Education } from '../../../types/resume';

export const EducationCard: React.FC<{ education: Education[] }> = ({ education }) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Education</h2>
      <ul className="space-y-6">
        {education.map((edu, idx) => (
          <li key={idx} className="group p-6 rounded-lg hover:bg-gray-50 transition-all">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.school}</h3>
                <p className="text-indigo-600 font-semibold">{edu.major}</p>
              </div>
              <span className="text-base font-medium text-gray-600 bg-gray-50 px-4 py-1.5 rounded-full">
                {edu.period}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
