import React from 'react';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>;
};
