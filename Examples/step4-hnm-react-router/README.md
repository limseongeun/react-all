# STEP4. H&M Mall React Router Mini Project

![image](https://github.com/user-attachments/assets/c28a00cd-ad73-4463-983e-216efadb6cfc)

[(2024 최신 업데이트)리액트 : 프론트엔드 개발자로 가는 마지막 단계](https://www.inflearn.com/course/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A7%88%EC%A7%80%EB%A7%89) 에서 네 번째 스텝 React Router 미니 프로젝트인 "쇼핑몰 홈페이지"에 대한 예제 소스입니다.

## 핵심 내용

- 쇼핑몰 사이트 제작을 통한 React Router 사용에 대한 실전 이해

## 시작 가이드

- 해당 프로젝트 폴더에서 터미널 열기

```bash
npm install
```

- install 후 실행

```bash
npm start
```

## 로드맵 구상

1. 전체 상품 페이지, 로그인, 상품 상세 페이지, 공통 네비게이션 바를 만든다.
2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
4. 상품 디테일을 눌렀으나, 로그인이 안 되있을 경우에는 로그인 페이지가 먼저 나온다.
5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다, 다시 로그인 페이지가 보인다.
7. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
8. 상품을 검색할 수 있다.
9. 작업한 프로젝트를 배포한다. (배포시에는 'http://localhost:5000/~' 정보를 'https://my-json-server.typicode.com/<your-username>/<your-repo>/~' 형태로 변경 후 배포한다.)

## 사용 npm

- react-router

```bash
npm install react-router@6 react-router-dom@6
```

- fontawesome

```bash
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome
npm i --save @fortawesome/free-regular-svg-icons
```

- json-server (최신 버전에서는 검색 기능이 안 되는 현상이 있어 버전을 지정해서 설치)

```bash
npm i -g json-server@0.17.4
json-server --watch db.json --port 5000
```

- react-bootstrap

```bash
npm i react-bootstrap bootstrap
```

## 참고 Link

- [react-router 공식 사이트](https://reactrouter.com/)
- [react-router-v6 설치](https://reactrouter.com/en/main/upgrading/reach#install-react-router-v6)
- [Font Awesome React Docs 사이트](https://docs.fontawesome.com/web/use-with/react/)
- [json-server npm 설치](https://www.npmjs.com/package/json-server)
- [react-bootstrap](https://react-bootstrap.netlify.app/docs/getting-started/introduction)
- [My JSON Server 사이트](https://my-json-server.typicode.com/)
- [Firebase 배포 방법 바로가기](https://github.com/limseongeun/2403-vite-list-ex/blob/main/docs/firebase-deploy-guide.md)
