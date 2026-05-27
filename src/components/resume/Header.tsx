import React from 'react';
import { Github } from 'lucide-react';
import { IconLink } from '../ui/IconLink';
import type { Profile } from '../../types/resume';

interface HeaderProps {
  profile: Profile;
}

export const Header: React.FC<HeaderProps> = ({ profile }) => {
  return (
    <header className="mb-12 border-b border-gray-200 pb-8 sm:mb-16">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="mb-2 break-words text-3xl font-bold text-gray-900 sm:text-4xl">
            {profile.name}
          </h1>
          <h2 className="text-xl text-gray-600">{profile.role}</h2>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <IconLink href={`https://${profile.github}`} icon={Github} text={profile.github} />
          {/* <IconLink href={`mailto:${profile.email}`} icon={Mail} text={profile.email} /> */}
        </div>
      </div>
    </header>
  );
};
