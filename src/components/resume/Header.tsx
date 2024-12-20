import React from 'react';
import { Github, Mail } from 'lucide-react';
import { IconLink } from '../ui/IconLink';
import type { Profile } from '../../types/resume';

interface HeaderProps {
  profile: Profile;
}

export const Header: React.FC<HeaderProps> = ({ profile }) => {
  return (
    <header className="mb-16 pb-8 border-b border-gray-200"> 
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{profile.name}</h1>
          <h2 className="text-xl text-gray-600">{profile.role}</h2>
        </div>
        <div className="flex flex-col gap-2">
          <IconLink href={`https://${profile.github}`} icon={Github} text={profile.github} />
          <IconLink href={`mailto:${profile.email}`} icon={Mail} text={profile.email} />
        </div>
      </div>
    </header>
  );
};
