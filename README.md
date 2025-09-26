# -React-
2025년 React 실무 수업의 학습 파일

본 실습은 Do it! 리액트로 웹앱 만들기 with 타입스크립트 교재를 참고합니다. <br />
실무 수업의 학습 노트는 Notion에 정리되어 있으며, 본 문서는 실습 파일을 위주로 작성되었습니다. <br />
**프로젝트 이름 생성 규칙 :** r(react)00(프로젝트 번호)


## 리액트 프로젝트 생성
1. 프로젝트 루트 폴더에서 아래 터미널 명령으로 vite-ts 프로젝트 생성
```
npm create vite@latest <프로젝트명> -- --template react ts
```

2. 생성한 프로젝트 폴더에서 아래 터미널 명령으로 패키지 설치
```
npm install
```
<br />

#### 생성된 리액트 프로젝트 오류
1. tsconfig.app.json 파일
```
"incremental": true
```
incremental 옵션을 추가하면 해결
2. tsconfig.node.json 파일
TypeScript 버전이 낮아서 발생하는 오류로 작업 환경이 아닌 프로젝트 버전을 따르도록 변경

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