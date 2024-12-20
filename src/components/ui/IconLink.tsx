import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconLinkProps {
  href: string;
  icon: LucideIcon;
  text: string;
}

export const IconLink: React.FC<IconLinkProps> = ({ href, icon: Icon, text }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </a>
  );
};
