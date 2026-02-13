# 환경분쟁조정위원회 웹사이트

React + TypeScript + Vite 기반의 반응형 웹사이트

## 기술 스택

- React 18
- TypeScript
- Vite
- AOS (Animate On Scroll)
- CSS Variables

## 프로젝트 구조

```
환경분쟁조정위원회/
├── src/
│   ├── assets/
│   │   ├── fonts/              # PretendardGOV 폰트 파일 (woff2)
│   │   ├── images/             # 이미지 및 SVG 아이콘
│   │   └── files/              # 첨부 파일
│   ├── components/
│   │   ├── layout/             # 레이아웃 컴포넌트
│   │   │   ├── Container.tsx         # 컨테이너 래퍼
│   │   │   ├── Header.tsx/css        # 헤더 (메인 네비게이션)
│   │   │   ├── Footer.tsx/css        # 푸터
│   │   │   ├── Masthead.tsx/css      # 마스트헤드 (상단 유틸리티)
│   │   │   ├── Lnb.tsx/css           # 좌측 네비게이션 바
│   │   │   ├── Breadcrumb.tsx/css    # 브레드크럼
│   │   │   ├── PageHeader.tsx        # 페이지 헤더
│   │   │   ├── FloatingMenu.tsx/css  # 플로팅 메뉴
│   │   │   ├── ScrollToTop.tsx/css   # 상단 이동 버튼
│   │   │   ├── SimplePageLayout.tsx/css  # 단순 페이지 레이아웃
│   │   │   └── SubPageLayout.tsx     # 서브 페이지 레이아웃
│   │   ├── sections/           # 메인 페이지 섹션
│   │   │   ├── MainVisual.tsx/css    # 메인 비주얼
│   │   │   ├── Search.tsx/css        # 검색 섹션
│   │   │   ├── QuickMenu.tsx/css     # 퀵 메뉴
│   │   │   ├── Notices.tsx/css       # 공지사항
│   │   │   ├── Cases.tsx/css         # 사례 소개
│   │   │   ├── FAQ.tsx/css           # 자주 묻는 질문
│   │   │   └── Partners.tsx/css      # 협력 기관
│   │   └── ScrollToTop.tsx     # 전역 스크롤 투 탑
│   ├── pages/
│   │   ├── 001/                # 위원회 소개 페이지
│   │   │   ├── my-01.tsx             # 위원회 소개
│   │   │   ├── my-02.tsx             # 위원회
│   │   │   ├── Login.tsx             # 로그인 (일반)
│   │   │   ├── CommitteeLogin.tsx    # 조정위원용 로그인
│   │   │   └── login.css             # 로그인 스타일
│   │   ├── 002/                # 환경분쟁 페이지
│   │   │   ├── Env-01.tsx            # 제도안내
│   │   │   └── Env.css               # 제도안내 스타일
│   │   ├── 003/                # 분쟁조정 페이지
│   │   │   ├── Dma-01.tsx            # 인터넷신청
│   │   │   └── Dma.css               # 인터넷신청 스타일
│   │   ├── MainPage.tsx        # 메인 페이지
│   │   └── CommitteePurpose.tsx # 위원회 목적
│   ├── styles/
│   │   ├── variables.css       # CSS 변수 (컬러, 레이아웃)
│   │   ├── reset.css           # 리셋 스타일
│   │   ├── common.css          # 공통 스타일, 유틸리티, 전역 스타일
│   │   └── index.css           # 스타일 통합 파일
│   ├── App.tsx                 # 메인 App 컴포넌트 (라우팅)
│   ├── main.tsx                # 진입점
│   └── vite-env.d.ts           # Vite 타입 정의
├── public/                     # 정적 파일 (빈 디렉토리)
├── dist/                       # 빌드 결과물
├── index.html                  # HTML 템플릿
├── vite.config.ts              # Vite 설정
├── tsconfig.json               # TypeScript 설정
├── tsconfig.node.json          # Node용 TypeScript 설정
└── package.json                # 프로젝트 의존성
```

## 반응형 브레이크포인트

- **Mobile**: 0px ~ 767px
- **Tablet**: 768px ~ 1023px
- **Desktop**: 1024px ~ 1439px
- **Wide**: 1440px ~

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

http://localhost:3000에서 실행됩니다.

### 빌드

```bash
npm run build
```

### 프리뷰

```bash
npm run preview
```

## 컬러 시스템

프로젝트는 CSS Variables를 사용하여 컬러 시스템을 관리합니다.

### 사용 가능한 컬러

- **Gray Scale**: `--gray-50` ~ `--gray-800` (9단계)
- **Primary**: `--primary-50`, `--primary-70`, `--primary-100` ~ `--primary-900` (11단계)
- **Accent**: `--accent-50`, `--accent-70`, `--accent-100` ~ `--accent-900` (11단계)
- **Primary(2)**: `--primary2-30`, `--primary2-50`, `--primary2-100` ~ `--primary2-900` (10단계)
- **Secondary**: `--secondary-50` ~ `--secondary-900` (10단계)
- **Point Color**: `--point-color` (#7de1cf)
- **Line**: `--line-50` (#eef2f5), `--line-100` (#dcdee6)

### 사용 예시

```css
.button {
  background-color: var(--primary-600);
  color: var(--gray-50);
  border: 1px solid var(--line-100);
}

.highlight {
  color: var(--accent-700);
  background-color: var(--accent-50);
}
```

## 타이포그래피

반응형 타이포그래피는 `clamp()` 함수를 사용하여 구현되었습니다.

### 제목

- `h1`: 40px ~ 68px
- `h2`: 36px ~ 60px
- `h3`: 30px ~ 52px
- `h4`: 28px ~ 44px
- `h5`: 24px ~ 36px
- `h6`: 20px ~ 30px

### 본문

- `p`, `.txt`: 15px ~ 16px
- `span`, `.stxt`: 14px ~ 15px

## 폰트

PretendardGOV 폰트를 사용합니다.

### 사용 가능한 굵기

- Light (300) - `.font-light`
- Regular (400) - `.font-regular`
- Medium (500) - `.font-medium`
- SemiBold (600) - `.font-semibold`
- Bold (700) - `.font-bold`

## 레이아웃 컴포넌트

### Container

```tsx
import Container from "@/components/layout/Container";

<Container>
  <h1>컨텐츠</h1>
</Container>;
```

반응형 패딩이 자동으로 적용됩니다.

- Mobile: 20px
- Tablet: 40px
- Desktop: 60px

## 유틸리티 클래스

```css
.pc        /* 데스크탑(1024px 이상)에서만 표시 */
.mobile    /* 모바일에서만 표시 */
```

# edc-seoul
