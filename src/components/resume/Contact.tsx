import React from 'react';
import { ArrowUpRight, Github, Mail } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';
import type { Profile } from '../../types/resume';

export const Contact: React.FC<{ profile: Profile }> = ({ profile }) => (
  <footer id="contact" className="scroll-mt-8 border-t border-gray-200 pt-12">
    <SectionTitle title="Contact" />
    <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-teal-700">
      <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 break-all hover:text-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">
        <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />{profile.email}
      </a>
      <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700">
        <Github aria-hidden="true" className="h-4 w-4" />GitHub <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </a>
    </div>
  </footer>
);
