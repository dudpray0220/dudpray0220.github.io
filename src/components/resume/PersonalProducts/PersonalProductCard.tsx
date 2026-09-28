import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Tag } from '../../ui/Tag';
import type { PersonalProduct } from '../../../types/resume';

export const PersonalProductCard: React.FC<PersonalProduct> = ({
  title, label, description, achievements, stack, projectUrl, variant,
}) => {
  const featured = variant === 'featured';

  return (
    <article className={featured
      ? 'rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-8'
      : 'rounded-xl border border-gray-200 bg-white p-5 sm:p-6'}>
      <div className="flex flex-wrap items-center gap-3">
        <h3 className={featured ? 'text-2xl font-bold text-gray-900' : 'text-xl font-bold text-gray-900'}>{title}</h3>
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">{label}</span>
      </div>
      <p className="mt-3 font-medium leading-7 text-gray-800">{description}</p>
      <ul className={featured ? 'mt-5 max-w-4xl space-y-3' : 'mt-3 max-w-4xl'}>
        {achievements.map((achievement) => (
          <li key={achievement} className="flex gap-3 text-sm leading-7 text-gray-700 sm:text-base">
            <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
      {stack && <div className="mt-6 flex flex-wrap gap-2">
        {stack.map((tech) => <Tag key={tech} text={tech} variant="tech" />)}
      </div>}
      {projectUrl && <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">
        서비스 방문 <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </a>}
    </article>
  );
};
