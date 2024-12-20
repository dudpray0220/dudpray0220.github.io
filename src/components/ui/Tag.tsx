import React from 'react';

interface TagProps {
  text: string;
  variant?: 'skill' | 'tech';
}

export const Tag: React.FC<TagProps> = ({ text, variant = 'skill' }) => {
  const styles = {
    skill: 'bg-gray-50 text-gray-700',
    tech: 'bg-blue-50 text-blue-600',
  };

  return <span className={`px-3 py-1 rounded-md text-sm ${styles[variant]}`}>{text}</span>;
};
