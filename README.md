# Resume Site

Next.js Pages Router와 Tailwind CSS로 만든 정적 이력서 사이트입니다.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub Pages static export

## Development

의존성을 설치하고 개발 서버를 실행합니다.

```bash
npm install
npm run dev
```

pnpm을 쓰려면 먼저 `pnpm install`을 실행한 뒤 `pnpm dev`로 열면 됩니다. 현재 저장소의 기준 lockfile은 `package-lock.json`입니다.

개발 서버 주소는 http://localhost:3000 입니다.

## Project Structure

- `src/pages/index.tsx`: 페이지 진입점
- `src/data/resumeData.ts`: 이력서 데이터
- `src/components/resume`: 이력서 섹션 컴포넌트
- `src/components/ui`: 공통 UI 컴포넌트
- `src/styles/globals.css`: Tailwind 전역 스타일 진입점

## Scripts

- `npm run dev`: 개발 서버 실행
- `npm run build`: `out/`에 정적 사이트 생성
- `npm run lint`: Next.js lint 실행
- `npm run deploy`: 빌드 후 `out/`을 GitHub Pages에 배포

## Deploy

`next.config.ts`의 `output: 'export'` 설정으로 정적 사이트를 생성합니다.

```bash
npm run deploy
```
