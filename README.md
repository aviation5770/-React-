# -React-
2025년 React 실무 수업의 학습 파일

본 실습은 Do it! 리액트로 웹앱 만들기 with 타입스크립트 교재를 참고합니다. <br />
실무 수업의 학습 노트는 Notion에 정리되어 있으며, 본 문서는 실습 파일을 위주로 작성되었습니다. <br />
**프로젝트 이름 생성 규칙 :** r(react)00(프로젝트 번호)


## 리액트 프로젝트 생성
1. 프로젝트 루트 폴더에서 아래 터미널 명령으로 vite-ts 프로젝트 생성
```
npm create vite@latest <프로젝트명> -- --template react-ts
```

2. 생성한 프로젝트 폴더에서 아래 터미널 명령으로 패키지 설치
```
npm install
```
<br />

#### 생성된 리액트 프로젝트 오류
1. ``tsconfig.app.json`` 파일
```
"incremental": true
```
incremental 옵션을 추가하면 해결
2. ``tsconfig.node.json`` 파일
TypeScript 버전이 낮아서 발생하는 오류로 작업 환경이 아닌 프로젝트 버전을 따르도록 변경 <br />

## 프로젝트 단위의 prettier 규칙 적용하기
프로젝트 루트에 ``.prettier.rc.cjs `` 파일 추가
```
module.exports = {
  bracketSpacing : false,       // 객체 리터럴에서 중괄호 안에 공백을 넣을지 여부
  jsxBracketSameLine : true,    // 여러 줄 JSX에서 마지막 >를 같은 줄에 둘지 여부
  singleQuote: true,            // 문자열을 '작은따옴표'로 통일
  trailingComma : false,        // 여러 줄일 때 마지막 요소 뒤에 ,를 붙일지 여부
  arrowParens : 'avoid',        // 화살표 함수 매개변수 괄호 처리(하나의 매개변수일때 괄호 생략)
  semi: false,                  // 문장 끝에 세미콜론(;) 붙일지 여부
  printWidth: 90,               // 한 줄 최대 길이 (90을 넘어가면 자동 줄바꿈)
};
```

## Tailwind CSS 설치하기
1. 설치
```
npm i -D tailwindcss @tailwindcss/postcss postcss
```
2. 프로젝트 루트 폴더에 postcss.config.js 파일 추가
```
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```
3. daisyui 패키지 설치
```
npm i -D daisyui
```

## 리액트 프로젝트 모드
리액트 개발은 프로젝트 개발 시 사용하는 **개발 모드**와 개발 완료 후 실제 사용자에게 서비스 할 때 사용하는 **프로덕션 모드**가 존재

1. 개발 모드
```
npm run dev
```
일반적으로 개발할 때 많이 사용 (일반적으로 이것만 사용) <br />

2. 프로덕션 모드
```
npm run build
```
- 프로젝트 dist 폴더가 추가되며 빌드 결과를 생성
- pm2 설치
```
npm install -g pm2
```
- pm2 SPA 모드로 서버 켜기
```
sd dist
pm2 serve --spa
```
- 서버 끄기
```
pm2 kill
cd ..
```

## 터미널에서 파일 복사
```
cp <src/복사할 파일 경로/복사할 파일 이름> <src/복사될 파일 경로/만들어질 파일 이름>
```

## mac 찾기&바꾸기 단축키
찾기 : command + F <br />
바꾸기 : command + option + F