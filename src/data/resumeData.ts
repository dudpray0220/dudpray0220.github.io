// src/data/resumeData.ts
import type { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  profile: {
    name: '배영현',
    role: 'Frontend Developer',
    github: 'github.com/dudpray0220',
    email: 'qodudgus0220@naver.com',
    about: `사용자 경험과 성능 최적화에 진심인 3년차 프론트엔드 개발자입니다...`,
  },
  skills: {
    language: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    framework: ['React.js', 'Vue.js', 'Next.js', 'Tailwind CSS', 'Mobx'],
    infrastructure: ['AWS', 'nginx', 'Linux'],
    database: ['PostgreSQL', 'MySQL'],
    tools: ['Vim', 'GitHub', 'GitLab', 'VS Code', 'Webpack', 'Babel', 'Jest', 'Vite'],
    etc: ['Communication', 'Web Accessibility', 'Web Performance'],
  },
  experiences: [
    {
      company: 'Amazing Corp',
      period: '2022.03 - Present',
      role: 'Senior Frontend Developer',
      achievements: [
        '마이크로프론트엔드 아키텍처 설계 및 구현',
        '코어 디자인 시스템 개발 및 문서화',
        '프론트엔드 성능 최적화 프로젝트 리드',
      ],
    },
    {
      company: 'Tilon',
      period: '2021.10 - 2023.08',
      role: 'C# Developer -> Frontend Developer',
      achievements: [
        '마이크로프론트엔드 아키텍처 설계 및 구현',
        '코어 디자인 시스템 개발 및 문서화',
        '프론트엔드 성능 최적화 프로젝트 리드',
      ],
    },
  ],
  projects: [
    {
      title: '커머스 플랫폼 리뉴얼',
      period: '2023.01 - 2023.06',
      achievements: [
        'Next.js 기반 새로운 프론트엔드 아키텍처 설계',
        'MSW를 활용한 프론트엔드 테스트 환경 구축',
        'Core Web Vitals 40% 개선',
        '장바구니 전환율 25% 향상',
      ],
      stack: ['React', 'TypeScript', 'Next.js', 'Redux Toolkit'],
    },
  ],
};
