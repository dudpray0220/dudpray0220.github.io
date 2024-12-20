import React from 'react';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
    </div>
  );
};
