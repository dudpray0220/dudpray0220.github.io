import React from 'react';

interface TagProps {
  text: string;
  variant?: 'skill' | 'tech';
}

export const Tag: React.FC<TagProps> = ({ text, variant = 'skill' }) => {
  const styles = {
    skill: 'bg-gray-50 text-gray-700',
    tech: 'bg-teal-50 text-teal-800',
  };

  return (
    <span
      className={`
       whitespace-nowrap px-3 py-1 rounded-lg text-sm font-medium
       ${styles[variant]}
     `}
    >
      {text}
    </span>
  );
};
