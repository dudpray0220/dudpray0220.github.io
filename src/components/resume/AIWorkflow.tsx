import React from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export const AIWorkflow: React.FC = () => (
  <section id="workflow" className="mb-16 scroll-mt-8 sm:mb-24">
    <SectionTitle title="AI Workflow" />
    <div className="rounded-xl border border-teal-100 bg-teal-50/50 p-5 sm:p-8">
      <p className="max-w-4xl text-base leading-8 text-gray-800">
        개발할 때 Codex와 Claude Code를 상시 사용합니다. 코드베이스 탐색부터 구현, 리팩터링, 리뷰, 디버깅, 테스트까지 작업에 맞게 에이전트를 활용합니다.
      </p>
      <p className="mt-4 max-w-4xl text-base leading-8 text-gray-800">
        gstack의 planning·review·QA 워크플로를 함께 사용하고, 반복되는 실수와 프로젝트별 규칙은 AGENTS.md에 기록해 다음 작업에 반영합니다. 구현 후에는 실제 빌드·테스트·로그로 확인하고 문제가 있으면 다시 수정합니다.
      </p>
    </div>
  </section>
);
