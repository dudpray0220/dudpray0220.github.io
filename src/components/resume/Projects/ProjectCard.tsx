import React from 'react';
import { Tag } from '../../ui/Tag';
import type { Project } from '../../../types/resume';

export const ProjectCard: React.FC<Project> = ({ title, period, achievements, stack }) => {
  return (
    <div className="group">
      <div className="flex justify-between items-baseline mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <span className="text-gray-500">{period}</span>
      </div>
      <ul className="space-y-2 mb-4">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="text-gray-600 flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
            {achievement}
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
