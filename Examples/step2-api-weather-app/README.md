# STEP2. API-WeatherApp React Mini Project

![image](https://github.com/limseongeun/react-all/assets/13953651/fc69fb23-200e-4943-b27d-c157aee73b21)

[(2024 최신 업데이트)리액트 : 프론트엔드 개발자로 가는 마지막 단계](https://www.inflearn.com/course/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A7%88%EC%A7%80%EB%A7%89) 에서 두 번째 React 미니 프로젝트인 "날씨앱 만들기"에 대한 예제 소스입니다.

## 핵심 내용

- React 기본 개념의 State에 대한 이해
- React 고급 개념의 Hooks(useState, useEffect) 사용에 대한 이해
- API 호출에 대한 이해

## 시작 가이드

- 해당 프로젝트 폴더에서 터미널 열기

```bash
npm install
```

- install 후 실행

```bash
npm start
```

## 진행 구상

1. 앱이 실행 되자마자 현재 위치 기반의 날씨가 보인다.
2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태
3. 5개의 버튼이 있다. (1개는 현재 위치, 4개는 다른 도시)
4. 도시 버튼을 클릭 할 때마다 도시별 날씨가 나온다.
5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
6. 데이터를 들고 오는 동안 로딩 스피너가 돈다.

## 사용 npm

- react-bootstrap

```bash
npm install react-bootstrap bootstrap
```

- react-spinners

```bash
npm install --save react-spinners
```

## 참고 Link

- [OpenWeatherMap(현재 날씨 API 호출 사이트)](https://openweathermap.org/current)
- [react-bootstrap](https://react-bootstrap.netlify.app/docs/getting-started/introduction)
- [react-spinners](https://www.npmjs.com/package/react-spinners)
