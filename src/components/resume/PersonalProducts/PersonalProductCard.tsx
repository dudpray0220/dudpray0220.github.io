import React from 'react';
import { Tag } from '../../ui/Tag';
import type { PersonalProduct } from '../../../types/resume';

export const PersonalProductCard: React.FC<PersonalProduct> = ({
  title,
  description,
  achievements,
  stack,
  projectUrl,
  projectUrlLabel,
}) => {
  return (
    <div className="group mb-8 rounded-lg transition-all sm:p-6 sm:hover:bg-gray-50">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-1 font-semibold text-indigo-600">{description}</p>
        {projectUrlLabel && (
          <p className="mt-2 text-sm font-medium text-gray-600">
            Project URL:{' '}
            {projectUrl ? (
              <a
                href={projectUrl}
                className="text-blue-600 transition-colors hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectUrlLabel}
              </a>
            ) : (
              <span>{projectUrlLabel}</span>
            )}
          </p>
        )}
      </div>
      <ul className="mb-6 space-y-3">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-600">
            <span className="mt-2 h-2 w-2 rounded-full bg-violet-500" />
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
