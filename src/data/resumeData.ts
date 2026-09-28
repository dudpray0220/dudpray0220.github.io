import type { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  profile: {
    name: '배영현',
    role: 'Frontend Engineer',
    eyebrow: '개발 경력 약 4년',
    headline: 'React·TypeScript로 기업용 WebAdmin과 웹 서비스를 개발해온 프론트엔드 엔지니어입니다.',
    introduction: [
      '티맥스소프트에서 JEUS·WebtoB WebAdmin을 개발했고, 현재는 JEUS의 Java·Servlet·HTTP 요청 처리까지 직접 분석·수정하고 있습니다.',
      '개인 서비스 Gensio는 Next.js로 개발해 실제 유료 결제가 발생하는 서비스로 운영하고 있습니다.',
    ],
    github: 'github.com/dudpray0220',
    email: 'qodudgus0220@naver.com',
  },
  experiences: [
    {
      company: 'Tmax Soft',
      period: '2025.06 ~ 현재',
      role: 'Frontend Engineer',
      progression: 'WebAdmin Frontend (2025.06~2026.04) → JEUS Servlet/WAS (2026.05~현재)',
      achievements: [
        'React·TypeScript로 JEUS·WebtoB WebAdmin의 설정·모니터링 화면을 개발했습니다. Figma 화면을 구현하고 서버 설정 모델을 API·DTO·UI에 연결했습니다.',
        'JEUS WebAdmin의 테이블 페이지 초기화 문제를 객체 참조 변경까지 추적해 수정하고, Server Log 조회의 로딩 표시·중복 요청 차단·오류 안내를 추가했습니다.',
        'WebtoB 6 Overview를 카드·섹션 단위로 나누고 event·history·license·ssl 도메인에 맞춰 구조를 정리했습니다.',
        '최근에는 JEUS의 Servlet·Valve 요청 흐름을 분석하고, 허용 요청에서 후속 Valve가 중복 호출되는 코드를 수정했습니다.',
      ],
    },
    {
      company: 'Tmax Gaia',
      period: '2023.09 ~ 2024.10',
      role: 'Frontend Developer',
      achievements: [
        'React·TypeScript 기반 오피스 UI와 공통 컴포넌트를 개발했습니다. 커서·드래그처럼 브라우저 이벤트와 렌더링 순서에 민감한 기능을 다뤘습니다.',
        '신·구 Chromium에서 동작하는 커서 구조를 개선하고, 문서 밖으로 드래그할 때 자동 스크롤과 블록 선택이 이어지도록 구현했습니다.',
        'CSS Modules와 접근성 속성을 적용하고, Vite·Storybook·Jest·React Testing Library를 사용해 UI 개발과 검증 환경을 구축했습니다.',
      ],
    },
    {
      company: 'Tilon',
      period: '2021.10 ~ 2023.08',
      role: 'C# Developer → Frontend Developer',
      achievements: [
        'C#·서버 시스템 업무에서 프론트엔드로 역할을 옮겨 Vue·Vuex 기반 웹 포털을 개발했습니다.',
        '페이지별 화면과 상태를 모듈화하고, QA에서 발견된 API 통신 문제를 수정했습니다.',
      ],
    },
  ],
  projects: [
    {
      title: 'JEUS WebAdmin 운영 UI 안정화',
      company: 'Tmax Soft',
      period: '2026.01 ~ 2026.08',
      summary: '운영 중 드러난 테이블 상태, 비동기 로그 조회, 설정 입력 문제를 수정했습니다.',
      achievements: [
        '체크박스 선택 뒤 페이지가 초기화되는 현상을 테이블에 전달되는 객체 참조 변경까지 추적하고 useMemo로 수정했습니다.',
        'Server Log 조회에 로딩 표시, 연속 클릭 차단, 지연 안내와 타임아웃 오류 표시를 추가했습니다.',
        'Listener 포트의 필수·중복 검증을 입력 필드에 표시하고, 저장하지 않은 설정을 서버에 적용할 때 경고를 띄웠습니다.',
      ],
      stack: ['React', 'TypeScript', 'Table', 'UX'],
    },
    {
      title: 'WebtoB 6 WebAdmin 신규 화면·구조 개발',
      company: 'Tmax Soft',
      period: '2026.01 ~ 2026.04',
      summary: 'Figma 기반 Overview와 설정 화면을 구현하고 조회 API·query·DTO를 연결했습니다.',
      achievements: [
        'widgets/overview에 몰려 있던 UI를 카드·섹션 단위로 나누고 event·history·license·ssl 도메인에 맞춰 구조를 정리했습니다.',
        'HTTP Header·Error Document·URL Rewrite·Access Policy 네 화면의 반복 목록 UI를 공통화했습니다.',
      ],
      stack: ['React', 'TypeScript', 'FSD', 'Figma'],
    },
    {
      title: '오피스 인터랙션 프레임워크 고도화',
      company: 'Tmax Gaia',
      period: '2024.01 ~ 2024.07',
      summary: '커서와 드래그처럼 브라우저 이벤트·렌더링 타이밍에 민감한 기능을 개발했습니다.',
      achievements: [
        '신·구 Chromium에서 동작하도록 커서 구조를 개선하고, progress 커서가 이벤트 처리 사이에 렌더링되도록 브라우저 렌더링 흐름을 분석했습니다.',
        '문서·브라우저 밖으로 드래그할 때도 자동 스크롤과 블록 선택이 이어지도록 이벤트 리스너와 throttling을 적용했습니다.',
      ],
      stack: ['React', 'TypeScript', 'Browser Events'],
    },
    {
      title: 'HTTP 요청을 Servlet/WAS 내부까지 추적',
      company: 'Tmax Soft',
      period: '2026.07 ~ 현재',
      summary: 'JEUS의 Servlet·Valve 호출과 HTTP 응답 생성 경로를 재현하고 코드로 확인했습니다.',
      achievements: [
        '허용 요청에서 다음 Valve가 두 번 호출되는 분기를 찾아 후속 호출을 한 곳으로 모았습니다.',
        'Content-Length와 Transfer-Encoding이 함께 출력되는 현상을 재현하고, 응답 헤더와 서버 내부 길이 상태가 달라지는 코드 경로를 추적했습니다.',
      ],
      stack: ['Java', 'Servlet', 'HTTP', 'Network'],
    },
  ],
  personalProducts: [
    {
      title: 'Gensio',
      label: 'Featured Product',
      description: 'Next.js·TypeScript 기반 AI 이미지 생성 서비스',
      achievements: [
        '기획부터 개발·배포까지 직접 진행하고 인증·결제·크레딧·이미지 생성 히스토리를 구현했습니다.',
        '실제 유료 결제가 발생한 서비스를 운영하며 결제 흐름과 AI API 비용을 관리하고 있습니다.',
      ],
      stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Payment', 'AI API'],
      projectUrl: 'https://gensio.app/',
      variant: 'featured',
    },
    {
      title: 'MallowDesk',
      label: 'Web Tools Collection',
      description: '13개의 웹 도구를 직접 만들어 배포·운영하고 있습니다.',
      achievements: ['출시 후 검색 유입과 실제 사용 흐름을 보며 UI와 SEO를 계속 손보고 있습니다.'],
      variant: 'compact',
    },
  ],
  skills: [
    { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Next.js', 'Vue', 'MobX', 'Vuex'] },
    { category: 'UI & Testing', items: ['Figma', 'Responsive UI', 'Accessibility', 'Jest', 'React Testing Library', 'Storybook'] },
    { category: 'Web Systems', items: ['Java', 'Servlet', 'HTTP', 'Network', 'Supabase', 'PostgreSQL'] },
    { category: 'Development', items: ['Git', 'Code Review', 'pnpm Monorepo', 'Vite'] },
    { category: 'AI Development', items: ['Codex', 'Claude Code'] },
    { category: 'Agent Workflow', items: ['gstack', 'AGENTS.md', 'Validation Loop'] },
  ],
  education: [
    { school: '한양대학교', major: '경제금융학부 학사', period: '2013.03 ~ 2020.02' },
    { school: '한국폴리텍대학교 강서캠퍼스', major: '스마트금융과 · 개발 직종 전환', period: '2021.03 ~ 2021.10' },
  ],
};
