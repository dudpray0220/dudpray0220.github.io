import React from 'react';

interface TagProps {
  text: string;
  variant?: 'skill' | 'tech';
}

export const Tag: React.FC<TagProps> = ({ text, variant = 'skill' }) => {
  const styles = {
    skill: 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm',
    tech: 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 hover:shadow-sm',
  };

  return (
    <span
      className={`
       px-3 py-1 rounded-lg text-sm font-medium
       ${styles[variant]}
       transition-all duration-200 
     `}
    >
      {text}
    </span>
  );
};
