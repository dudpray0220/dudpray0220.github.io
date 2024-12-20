import React from 'react';
import { Tag } from '../../ui/Tag';

interface SkillSectionProps {
  title: string;
  items: string[];
}

export const SkillSection: React.FC<SkillSectionProps> = ({ title, items }) => {
  return (
    <div className="mb-10">
      <div className="pl-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <Tag key={item} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
