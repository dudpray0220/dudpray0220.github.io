import React from 'react';
import { ArrowDownRight, ArrowUpRight, Github, Mail } from 'lucide-react';
import type { Profile } from '../../types/resume';

export const Header: React.FC<{ profile: Profile }> = ({ profile }) => (
  <header id="top" className="mb-14 border-b border-gray-200 pb-14 sm:mb-20 sm:pb-20">
    <div className="mb-14 flex flex-wrap items-center justify-between gap-5">
      <a href="#top" className="text-sm font-bold tracking-tight text-gray-900 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600">
        {profile.name}
      </a>
      <nav aria-label="페이지 섹션" className="hidden flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 sm:flex">
        <a className="hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-teal-600" href="#experience">Experience</a>
        <a className="hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-teal-600" href="#selected-work">Selected Work</a>
        <a className="hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-teal-600" href="#workflow">AI Workflow</a>
        <a className="hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-teal-600" href="#products">Products</a>
        <a className="hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-teal-600" href="#contact">Contact</a>
      </nav>
    </div>

    <div>
      <p className="mb-4 text-sm font-semibold tracking-wide text-teal-700">{profile.eyebrow}</p>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {profile.name}
        <span className="mt-3 block text-2xl font-medium text-gray-600 sm:text-3xl">{profile.role}</span>
      </h1>
      <p className="mt-8 text-2xl font-semibold leading-snug tracking-tight text-gray-900 xl:text-[27px]">
        {profile.headline}
      </p>
      <div className="mt-7 max-w-3xl space-y-2 text-base leading-8 text-gray-700 sm:text-lg">
        {profile.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <a href="#selected-work" className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
          작업 보기 <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
        </a>
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-teal-500 hover:text-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
          <Mail aria-hidden="true" className="h-4 w-4" /> 이메일
        </a>
        <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-gray-600 hover:text-teal-700 focus-visible:outline-2 focus-visible:outline-teal-700">
          <Github aria-hidden="true" className="h-4 w-4" /> GitHub <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </div>
  </header>
);
