import React from 'react';
import { Tag } from '../../ui/Tag';
import type { Project, Company } from '../../../types/resume';

export const ProjectCard: React.FC<Project> = ({ title, period, achievements, stack, company }) => {
  const companyStyles: Record<Company, string> = {
    'Tmax Gaia': `
      bg-emerald-100 text-emerald-700
      border border-emerald-300
      shadow-sm
    `,
    Tilon: `
      bg-rose-100 text-rose-700
      border border-rose-300
      shadow-sm
    `,
  };

  return (
    <div className="group p-6 rounded-lg hover:bg-gray-50 transition-all mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span
            className={`
    ${companyStyles[company]}
    text-xs font-medium
    px-1 py-0.5
    rounded-md
    ml-2
  `}
          >
            {company}
          </span>
        </div>
        <span className="text-base font-medium text-gray-600 bg-gray-50 px-4 py-1.5 rounded-full">
          {period}
        </span>
      </div>
      <ul className="space-y-3 mb-6">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="text-gray-600 flex items-start gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
            <span className="flex-1 leading-relaxed">{achievement}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Tag key={tech} text={tech} variant="tech" />
        ))}
      </div>
    </div>
  );
};
