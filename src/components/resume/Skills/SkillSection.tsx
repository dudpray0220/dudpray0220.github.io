import React from 'react';
import { Tag } from '../../ui/Tag';

interface SkillSectionProps {
  title: string;
  items: string[];
}

export const SkillSection: React.FC<SkillSectionProps> = ({ title, items }) => {
  return (
    <div className="lg:grid lg:grid-cols-[170px_minmax(0,1fr)] lg:items-start lg:gap-6">
      <h3 className="mb-3 text-base font-bold text-gray-900 lg:mb-0 lg:py-1">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Tag key={item} text={item} />
        ))}
      </div>
    </div>
  );
};
