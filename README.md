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
│   │   └── fonts/              # PretendardGOV 폰트 파일
│   ├── components/
│   │   ├── layout/             # 레이아웃 컴포넌트 (Container, Header 등)
│   │   └── common/             # 공통 컴포넌트
│   ├── styles/
│   │   ├── variables.css       # CSS 변수 (컬러, 레이아웃)
│   │   ├── fonts.css           # 폰트 정의
│   │   ├── reset.css           # 리셋 스타일
│   │   ├── typography.css      # 반응형 타이포그래피
│   │   ├── global.css          # 전역 스타일 및 유틸리티
│   │   └── index.css           # 스타일 통합 파일
│   ├── App.tsx                 # 메인 App 컴포넌트
│   ├── main.tsx                # 진입점
│   └── vite-env.d.ts           # Vite 타입 정의
├── public/                     # 정적 파일
├── index.html                  # HTML 템플릿
├── vite.config.ts              # Vite 설정
├── tsconfig.json               # TypeScript 설정
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

- **Gray Scale**: `--gray-50` ~ `--gray-800`
- **Primary**: `--primary-50` ~ `--primary-900`
- **Accent**: `--accent-50` ~ `--accent-900`
- **Primary(2)**: `--primary2-30` ~ `--primary2-900`
- **Secondary**: `--secondary-50` ~ `--secondary-900`
- **Point Color**: `--point-color`
- **Line**: `--line-50`, `--line-100`

### 사용 예시

```css
.button {
  background-color: var(--primary-600);
  color: var(--gray-50);
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
import Container from '@/components/layout/Container';

<Container>
  <h1>컨텐츠</h1>
</Container>
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
