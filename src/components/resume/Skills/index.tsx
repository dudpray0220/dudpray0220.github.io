import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { SkillSection } from './SkillSection';

interface SkillsProps {
  skills: {
    language: string[];
    framework: string[];
    infrastructure: string[];
    database: string[];
    tools: string[];
    etc: string[];
  };
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="mb-16"> 
      <SectionTitle title="Skills" />
      <div className="space-y-6">
        <SkillSection title="Language" items={skills.language} />
        <SkillSection title="Framework & Library" items={skills.framework} />
        <SkillSection
          title="Infrastructure & Database"
          items={[...skills.infrastructure, ...skills.database]}
        />
        <SkillSection title="Tools & IDEs" items={skills.tools} />
        <SkillSection title="Etc" items={skills.etc} />
      </div>
    </section>
  );
};
