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
      className="flex min-w-0 items-center gap-2 text-gray-600 transition-colors hover:text-blue-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span className="break-all">{text}</span>
    </a>
  );
};
