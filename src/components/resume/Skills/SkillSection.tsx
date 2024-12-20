import React from 'react';
import { Tag } from '../../ui/Tag';

interface SkillSectionProps {
  title: string;
  items: string[];
}

export const SkillSection: React.FC<SkillSectionProps> = ({ title, items }) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Tag key={item} text={item} />
        ))}
      </div>
    </div>
  );
};
