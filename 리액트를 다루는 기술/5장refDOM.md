# ref:DOM

- HTML에서 DOM 요소에 이름을 달 때는 id를 사용한다.

- 컴포넌트 내부에서 DOM에 직접 접근해야 할 때는 ref를 사용한다.

- 컴포넌트끼리 데이터를 교류할 떄는 언제나데이터를 부모 자식 흐름으로 교류해야 한다.

- 특정 DOM 요소에  id를 달면 CSS에서 특정 id에 특정 스타일을 적용하거나, 자바스크립트에서 해당 id를 가진 요소를 찾아서 작업할 수 있다.

- DOM에 직접적으로 접근할땐 ref를 사용한다.

- #### ref(reference) 참고

  > 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법
  >
  > ref는 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동함.
  >
  > 특정 DOM에 작업을 해야 할 때 ref를 사용
  >
  > DOM을 꼭 직접적으로 건드려야 할 때 사용

- #### 콜백함수

  > ref를 만드는 가장 기본적인 방법. ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해 주면됨
  >
  > ref 값을 파라미터로 전달받음.
  >
  > 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정함.
  >
  > <input ref={(ref)} => {this.input=ref}/>
  >
  > this.input은 input 요소의 DOM을 가리킴

- #### createRef

  > 컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아주어야 함.  ref를 달고자 하는 요소에 ref props로 넣어주면 됨
  >
  > ref를 설정해준 DOM에 접근하려면 this.input.current를 조회하면됨