// src/data/resumeData.ts
import type { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  profile: {
    name: '배영현ㅋㅋTest',
    role: 'Frontend Developer',
    github: 'github.com/dudpray0220',
    email: 'qodudgus0220@naver.com',
    about: `커뮤니케이션 능력, 배우고자 하는 마음, 그리고 긍정적인 태도를 가지고 있는 프론트엔드 개발자 배영현 입니다.
    사용자 경험과 성능 최적화에 진심이며, 코드 리뷰를 통한 코드 개선을 좋아합니다.
    경제금융에서의 직종전환 그리고 C#에서 FrontEnd로의 전환을 한만큼 배워서 성장하고자하는 마음이 아주 큽니다.`,
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
      company: 'Tmax Gaia',
      period: '2023.09 ~ 2024.10',
      role: 'Frontend Developer',
      achievements: [
        '컴포넌트의 확장성, 유연성, 재사용성, 개발자 편의성, 리액트 디자인 패턴, 웹 접근성, 성능 최적화에 신경쓰며 개발',
        'Type을 중요시 여겨 무작정 새로 만들지 않고 omit, pick, extends 등을 최대한 활용하고, 타입단언을 지양하며 개발',
        '컴포넌트, 커스텀 훅 그리고 실제 비즈니스 로직이 담긴 Mobx 컨테이너의 로직 분리성을 중시하며 개발',
        'Jest, React Testing Library를 이용하여 테스트 코드를 중시하여 개발',
        '레거시 코드 및 성능 관련 다양한 버그를 식별하고 해결하여 성능 최적화와 유지보수성 향상',
      ],
    },
    {
      company: 'Tilon',
      period: '2021.10 ~ 2023.08',
      role: 'C# Developer -> Frontend Developer',
      achievements: [
        '입사 후 9개월 간 : 응용 프로그램 개발 + 서버 시스템 개발 및 관리',
        '9개월 ~ 1년 : 위 업무 및 프론트엔드 개발 병행',
        '이후 : 프론트엔드 개발',
        '다양한 업무를 해본 만큼 프로그래밍적 사고 및 리서치 능력이 뛰어남',
      ],
    },
    {
      company: '세경 하이테크',
      period: '2020.05 ~ 2020.08',
      role: '인사총무',
      achievements: ['개발 외 경험이지만, 이 경험을 통해 커뮤니케이션 능력을 많이 향상시킴'],
    },
  ],
  projects: [
    {
      title: 'UI 라이브러리 개발',
      company: 'Tmax Gaia',
      period: '2024.08 ~ 2024.09',
      achievements: [
        '개발 환경 구축(ESLint, Prettier, tsconfig, Vite, Storybook) 및 GitLab CI/CD 파이프라인 설정',
        'Jest 및 React Testing Library 기반의 테스트 환경 구축 및 테스트 커버리지 100% 확보',
        '트리쉐이킹 적용을 통한 빌드 최적화',
        '디자인 시스템 구현 회의 참여 및 개선사항 연구',
        'WAI-ARIA 가이드를 준수해 접근성 향상, Compound Component 패턴 등 리액트 디자인 패턴을 연구 및 이용하여 개발',
      ],
      stack: [
        'React',
        'TypeScript',
        'ESLint',
        'Prettier',
        'Vite',
        'Storybook',
        'GitLab CI/CD',
        'Figma',
      ],
    },
    {
      title: 'UI 컨트롤 컴포넌트 고도화',
      company: 'Tmax Gaia',
      period: '2023.10 ~ 2024.08',
      achievements: [
        '기존 BEM 네이밍 방식을 개선해 CSS Modules 도입, 클래스 충돌 문제 제거 및 코드 복잡도 감소',
        'WAI-ARIA 가이드를 준수해 접근성 향상',
        '불필요한 리렌더링을 수정하여 UI 응답 속도를 눈에 띄게 향상',
        '컴포넌트, 커스텀 훅, mobx 컨테이너를 이용하여 관심사 분리, 유지보수 시간 절약',
        '컴포넌트별 테스트 코드 작성 및 시나리오 커버리지 개선',
      ],
      stack: ['React', 'TypeScript', 'CSS Modules', 'WAI-ARIA', 'Jest', 'React Testing Library'],
    },
    {
      title: '툴팁 컨트롤 고도화',
      company: 'Tmax Gaia',
      period: '2023.12 ~ 2024.01',
      achievements: [
        '툴팁 컨테이너 클래스 모듈별로 추상화(word, cell, point, common)',
        '코드 가독성 대폭 향상, 툴팁 Types를 string union 타입으로 변환하여 유연성 확보',
        '각 모듈(cell, point, word)에서 사용하는 툴팁을 분리하여 모듈별로 관리할 수 있는 구조로 개선',
      ],
      stack: ['TypeScript', 'React'],
    },
    {
      title: '단축키 기능 고도화',
      company: 'Tmax Gaia',
      period: '2024.01 ~ 2024.02',
      achievements: [
        '자체 프레임워크를 기반으로 서식 복사 및 REDO 단축키 구현',
        'KeyTip 개발을 통한 웹 접근성 개선',
        'accesskey 속성이 아닌 자체 프레임워크를 이용하여 구현',
      ],
      stack: ['JavaScript', 'TypeScript'],
    },
    {
      title: '커서 고도화',
      company: 'Tmax Gaia',
      period: '2024.01 ~ 2024.03',
      achievements: [
        '서식 복사 커서: 리렌더링 문제를 해결하여 성능 최적화',
        'chromium 신·구 버전 모두에서 동작하도록 자체 커서 프레임워크 개선',
        'progress 커서: 자체 프레임워크의 이벤트 흐름 사이에 렌더링 되도록 브라우저 렌더링 사이클 분석 및 구현',
      ],
      stack: ['SCSS', 'JavaScript', 'TypeScript', 'React'],
    },
    {
      title: '오피스 Default GUI 변경',
      company: 'Tmax Gaia',
      period: '2024.06',
      achievements: [
        '스크롤바 수정: padding-box 속성을 활용하여 Google Docs와 유사한 스타일로 구현',
        'ribbon, toolpane, dialog, statusBar 등 전체 오피스 GUI 개선',
        'GUI 변경으로 사용자 경험 대폭 개선',
      ],
      stack: ['SCSS', 'React', 'TypeScript'],
    },
    {
      title: '오피스 드래그 시 프레임워크 고도화',
      company: 'Tmax Gaia',
      period: '2024.06 ~ 2024.07',
      achievements: [
        '문서 바깥 영역이나 앱 외부에 커서가 드래그 상태로 위치할 때 자동 스크롤 및 블록 셀렉션이 가능하도록 프레임워크 고도화',
        '자체 프레임워크 개선과 이벤트 리스너, 각종 훅, 쓰로틀링을 이용하여 성능 최적화',
        '성능 최적화와 시맨틱한 네이밍을 통해 유지보수성 향상',
      ],
      stack: ['JavaScript', 'TypeScript', 'React', 'lodash'],
    },
    {
      title: 'Dstation 웹 포털 CenterPost 개발',
      company: 'Tilon',
      period: '2023.01 ~ 2023.07',
      achievements: [
        'SPA 구조 최적화: Vue와 Vuex 및 페이지별 모듈화를 통해 대규모 프로젝트를 효율적으로 관리',
        'API 통신 오류 해결: QA 과정에서 통신 관련 주요 버그를 식별하고 수정, 안정적인 운영을 보장',
        'Vuex 모듈화: 전역 관리와 컴포넌트 모듈화를 통해 유지보수성을 크게 향상',
        'UI/UX 개선: HTML 시맨틱 태그 활용 및 레이아웃 컴포넌트화를 통해 사용자 경험을 최적화',
        '프론트엔드, 백엔드 팀원 14명과 협업하여 SPA 구조를 최적화',
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Vuex', 'GitHub'],
    },
    {
      title: '엔지니어 전용 웹 포털 개발',
      company: 'Tilon',
      period: '2023.07 ~ 2023.08',
      achievements: [
        '소규모 팀 리드: 4명으로 구성된 팀에서 프로젝트의 설계와 개발을 리드',
        '커스터마이징 포털 구현: 자사 솔루션을 엔지니어들이 현장에서 쉽게 커스터마이징할 수 있도록 설계 및 구현',
        '프로젝트 관리 및 협업: 팀 리딩을 통해 일정 100% 준수 및 주요 기한 내 성공적 출시',
      ],
      stack: ['HTML', 'CSS', 'JavaScript', 'Vue', 'Vuex', 'GitHub'],
    },
    {
      title: '자사 화상회의 솔루션 CenterFace, MeetingTown 개발',
      company: 'Tilon',
      period: '2022.05 ~ 2023.01',
      achievements: [
        '화상회의 솔루션 퍼블리싱 및 서버 구성 담당',
        '서버 배포 및 네트워크 구성 성공적 완료',
        '틸론 협력사 (SNA, PndINC)에 CenterFace 성공적 구축',
      ],
      stack: ['Linux', 'HTML', 'CSS', 'JavaScript', 'Nginx', 'GitHub', 'SSL Certification'],
    },
    {
      title: '자사 공식 홈페이지 개발 및 배포',
      company: 'Tilon',
      period: '2023.05 ~ 2023.08',
      achievements: [
        '새로운 디자인에 맞춰 홈페이지 개발',
        '서버 배포 및 네트워크 구성 성공적 완료',
      ],
      stack: ['Linux', 'HTML', 'CSS', 'JavaScript', 'Vue', 'Vuex', 'GitHub', 'Nginx'],
    },
    {
      title: 'MDM 솔루션 개발',
      company: 'Tilon',
      period: '2023.03 ~ 2023.05',
      achievements: [
        '오픈소스 MDM API 분석 및 통신 구현 (Headwind MDM)',
        '서버 구축 후 API 통신 성공',
        '프론트엔드 웹페이지 구축',
      ],
      stack: ['Linux', 'Vue', 'Vuex', 'Nginx', 'GitHub'],
    },
    {
      title: 'Estation vGPU 솔루션 개발',
      company: 'Tilon',
      period: '2022.03 ~ 2023.03',
      achievements: [
        'RockyLinux 기반 vGPU 서버 구축으로 고사양 엔지니어링 원격 작업 환경 구현',
        'vGPU 관련 기능 개발 및 라이선스 서버 이중화 구성',
        '자사 TechDay 성과 발표 및 코스닥 상장 감사 시연 담당',
        '다양한 Linux 배포판에서 NVIDIA vGPU 테스트 및 가이드 문서 작성',
      ],
      stack: ['Linux', 'OpenStack', 'AWS', 'KVM', 'C++'],
    },
    {
      title: '블록체인 네트워크 구축',
      company: 'Tilon',
      period: '2023.02 ~ 2023.03',
      achievements: [
        'Hyperledger Besu를 이용한 블록체인 네트워크 구축 및 시연',
        '코스닥 상장 감사 시 성공적 시연',
        '제주대 인턴 4명의 블록체인 프로젝트 리드',
        '프로젝트 로드맵 제시 및 문서화 주도',
      ],
      stack: ['Linux', 'Grafana', 'Hyperledger Besu'],
    },
  ],
  education: [
    {
      school: '한국폴리텍대학교 강서캠퍼스',
      major: '스마트금융과 (직종 전환)',
      period: '2021.03 ~ 2021.10',
    },
    {
      school: '한양대학교',
      major: '경제금융학부 학사 졸업',
      period: '2013.03 ~ 2020.02',
    },
    {
      school: '사우고등학교',
      major: '인문계 졸업',
      period: '2010.03 ~ 2013.02',
    },
  ],
};
