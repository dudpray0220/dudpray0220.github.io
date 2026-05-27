import type { NextPage } from 'next';
import {
  Header,
  About,
  Experience,
  PersonalProducts,
  Projects,
  Skills,
  EducationCard,
} from '../components/resume';
import { resumeData } from '../data/resumeData';

const Home: NextPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 font-sans sm:px-8 sm:py-16 lg:px-12">
      <Header profile={resumeData.profile} />
      <About about={resumeData.profile.about} />
      <Experience experiences={resumeData.experiences} />
      <PersonalProducts products={resumeData.personalProducts} />
      <Projects projects={resumeData.projects} />
      <Skills skills={resumeData.skills} />
      <EducationCard education={resumeData.education} />
    </main>
  );
};

export default Home;
