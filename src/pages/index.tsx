import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Header,
  Experience,
  PersonalProducts,
  Projects,
  Skills,
  EducationCard,
  AIWorkflow,
  Contact,
} from '../components/resume';
import { resumeData } from '../data/resumeData';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>배영현 | Frontend Engineer</title>
        <meta name="description" content="React·TypeScript로 기업용 WebAdmin과 웹 서비스를 개발해온 프론트엔드 엔지니어 배영현의 경력과 작업을 소개합니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="mx-auto max-w-6xl px-5 py-8 font-sans sm:px-8 sm:py-12 lg:px-12">
        <Header profile={resumeData.profile} />
        <Experience experiences={resumeData.experiences} />
        <Projects projects={resumeData.projects} />
        <AIWorkflow />
        <PersonalProducts products={resumeData.personalProducts} />
        <Skills skills={resumeData.skills} />
        <EducationCard education={resumeData.education} />
        <Contact profile={resumeData.profile} />
      </main>
    </>
  );
};

export default Home;
