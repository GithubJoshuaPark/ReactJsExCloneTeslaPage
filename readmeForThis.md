### Tesla clone web site

[ref ReactJS Tutorial for Beginners - Full Course in 20 Hours [2022]](https://www.youtube.com/watch?v=0mVbNp1ol_w)
[ref tesla homepage](https://www.tesla.com/)

```
    $npx create-react-app tesla-clone --template redux
```

> vs code extension: ES7 REact/Redux help to make a template component with
> 'Rfce' (react functional component export)

---

> styled-components란 Javascript 파일 내에서 CSS를 사용할 수 있게 해주는
> 대표적인 CSS-in-JS 라이브러리
> **React 프레임워크를 주요 대상으로 한 라이브러리**
> (사용하는 이유는) React의 경우,
> 컴포넌트가 많으면 많아질수록 분리되어 있는 CSS 파일들을
> 일일이 찾아 수정하는 것이 얼마나 귀찮고 짜증 나는 일인지는 다들 동감하실 겁니다.
> 만약 styled-components를 사용하신다면,
> CSS를 컴포넌트화하여 JSX로 사용할 수도 있습니다.
> (사용하는) 결정적인 요인은 바로 CSS에 **Props** 를 사용할 수 있다는 점입니다.
> React의 주요 메커니즘 중 하나인 **Props**를 **CSS**에 적용할 수 있다는 것 때문에
> 특정 컴포넌트에서는 styled-components를 적용하는 것이 엄청난 효율을
> 가져오는 것 같습니다.
> Home Component 에서 확인

---

> materail ui icons 사용위해 npm install
> [ref https://v4.mui.com/components/material-icons/](https://v4.mui.com/components/material-icons/)

```
    $npm install styled-components
    $npm install @material-ui/core
    $npm install @material-ui/icons  // material ui icon install 
```

---

> React Reveal (animation library) install
> [ref https://www.react-reveal.com/](https://www.react-reveal.com/)

```
    $npm i react-reveal --legacy-peer-deps  // 버전에러 나는 것을 회피

```

> 지금 사요하는 react 버전이 17이어서, react-reveal plugin이 설치안되는 이슈
> 사용하는 react 버전을 16으로 낮추자

```
    $npm install --save react@^16.14.0 react-dom@16.14.0  // 버전 낮추기
    $npm i react-reveal   // 이제 잘 설치 됨
```

---

> Project 생성 시 --template redux (프로젝트 전역 상태관리) 포함시켰기에
> index.js 에 redux store 객체를 <Provider store={store}> 하고있음
> App Component 하부 Components에서 store props 변경 시,
> Evalute 후 해당 Component는 (다시)Rerendering !! 되도록 구성됨.
> Project 생성 시 만들어 진 features 아래 새로 폴더/(예: car)하나 만듬
> car/carSlice.js 만듬
> 요약하면, slice를 만들어, store에 저장함
> createSlice 를 사용하면 좋은 점 (소스가 간결해지고 줄어듬)
> 우선 (보통) 리덕스 모듈하나를 만들려면
>
> 1. action type을 정의하고,
> 2. action creator를 만들고 redux-saga를 사용하는 경우 saga 만들고,
> 3. reducer까지 만들어야 하는데 이 모든게(saga 빼고)
>    createSlice 한 방에 가능하다.

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;
```

> store.js 수정

```javascript
import { configureStore } from "@reduxjs/toolkit";
import { carSlice } from "../features/car/carSlice";

export const store = configureStore({
  reducer: {
    car: carSlice.reducer,
  },
});
```

---
