import type { NextPage } from 'next';
import { Header, About, Skills, Experience, Projects, EducationCard } from '../components/resume';
import { resumeData } from '../data/resumeData';

const Home: NextPage = () => {
  return (
    <main className="max-w-7xl mx-auto py-16 px-12 font-sans">
      <Header profile={resumeData.profile} />
      <About about={resumeData.profile.about} />
      <Skills skills={resumeData.skills} />
      <Experience experiences={resumeData.experiences} />
      <Projects projects={resumeData.projects} />
      <EducationCard education={resumeData.education} />
    </main>
  );
};

export default Home;
