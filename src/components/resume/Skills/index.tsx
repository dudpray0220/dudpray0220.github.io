import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import { SkillSection } from './SkillSection';
import type { Skill } from '../../../types/resume';

export const Skills: React.FC<{ skills: Skill[] }> = ({ skills }) => (
  <section id="skills" className="mb-16 scroll-mt-8 sm:mb-24">
    <SectionTitle title="Skills" />
    <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
      {skills.map((skill) => <SkillSection key={skill.category} title={skill.category} items={skill.items} />)}
    </div>
  </section>
);
