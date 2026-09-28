import React from 'react';
import { Tag } from '../../ui/Tag';
import type { Project } from '../../../types/resume';

export const ProjectCard: React.FC<Project> = ({ title, period, summary, achievements, stack, company }) => (
  <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 sm:p-7">
    <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-gray-600">
      <span>{company}</span><span aria-hidden="true">·</span><span>{period}</span>
    </div>
    <h3 className="text-xl font-bold leading-snug text-gray-900">{title}</h3>
    <p className="mt-3 leading-7 text-gray-700">{summary}</p>
    <ul className="mt-5 flex-1 space-y-3 border-t border-gray-100 pt-5">
      {achievements.map((achievement) => (
        <li key={achievement} className="flex gap-3 text-sm leading-6 text-gray-700">
          <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          <span>{achievement}</span>
        </li>
      ))}
    </ul>
    <div className="mt-6 flex flex-wrap gap-2">
      {stack.map((tech) => <Tag key={tech} text={tech} variant="tech" />)}
    </div>
  </article>
);
