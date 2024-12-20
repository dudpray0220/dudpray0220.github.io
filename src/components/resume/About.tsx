import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

interface AboutProps {
  about: string;
}

export const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section className="mb-16"> {/* mb-16 통일 */}
      <SectionTitle title="About Me" />
      <p className="text-gray-600 leading-relaxed whitespace-pre-line">{about}</p>
    </section>
  );
};
