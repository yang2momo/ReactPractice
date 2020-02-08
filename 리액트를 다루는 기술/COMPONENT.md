# COMPONENT

- 애플리케이션의 인터페이스를 설계할 때 사용자가 볼 수 있는 요소는 여러 가지 컴포넌트로 구성되어 있다.
- 데이터가 주어졌을 때 이에 맞추어 UI를 만들어줌
- 라이프사이클 API를 이용하여 컴포넌트가 화면에서 나타날 때, 사라질 때, 변화가 일어날 때 주어진 작업들을 처리할 수 있다.
- 임의 메서드를 만들어 특별한 기능을 붙여줄 수 있다.
- propr를 읽기 정용으로만 사용할 수 있음.

- #### 함수형 컴포넌트

  >장점: 클래스형 컴포넌트보다 선언하기가 훨씬 편하다. 
  >
  >단점: state와 라이프사이클 API의 사용이 불가능하다. 하지만 Hooks로 가능함

- #### 클래스형 컴포넌트

  > state 및 라이프사이클 기능을 사용할 수 있다는것과, 임의 메서드를 정의할 수 있다.
  >
  > render함수가 꼭 있어야하고 , 그안에서 보여 주어야 할 JSX를 반환해야한다.

- 일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가리킵니다.
- 화살표함수는 값을 연산하여 바로 반환해야 할 떄 사용하면 가독성을 높일 수 있다.
- 화살표함수 조금더 이해하기★

- 화살표함수는 기존 function을 지우고 소괄호(두개이상일때)를 씌운다음 뒤에 화살표를써주면된다. 
- 모듈 불러오기(import)

- #### Props(properies)

  > 컴포넌트 속성을 설정할 때 사용하는 요소. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있음.
  >
  > 부모 컴포넌트가 설정하는 값

- props 기본값 설정 : **defaultProps**

  >MyComponent.defaultProps = {
  >
  >​    day: '게임'
  >
  >};

- 태그 사이의 내용을 보여주는 **children**

  ><MyComponent>chilren값</MyComponent>

- #### 비구조화 할당 문법(ES6)

  >(destructuring assignment)
  >
  >객체에서 값을 추출하는 문법
  >
  >const { day, children } = props;
  >
  >const MyComponent = ({ day, children }) =>{ ... }

- 함수형 컴포넌트에서 props를 사용할 떄 파라미터 부분에서 비구조화 할당 문법을 사용한다.

- #### propTypes

  > 컴포넌트의 필수 props를 지정하거나 props의 타입(type)을 지정할 때 사용
  >
  > import PropTypes from 'prop-types';
  >
  > 컴포넌트명.PropTypes = {
  >
  > ​    day: PropTypes.string
  >
  > };

- #### isRequired

  > propsTypes를 지정하지 않았을 때 경고 메시지를 띄워 주는 작업

- 클래스형 컴포넌트에서 props를 사용할 떄는 render 함수에서 this.props를 조회하면 됨

- static defaultProps = {

  ​        day: '게임'

  ​    };

  static propTypes = {

  ​        day: PropTypes.string

  ​    };

- #### state(상태)

  > 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다

- #### 클래스형 컴포넌트 state

  > constructor 메서드를 작성하여 생성자를 만든다.
  >
  > constructor(props) { // 생성자
  >
  > ​        super(props); // 상태의 초기값
  >
  > ​        // state의 초기값 설정하기
  >
  > ​        this.state = {
  >
  > ​            number : 0,
  >
  > ​            fixedNumber : 0
  >
  > ​        };
  >
  > ​    }
  >
  > 컴포넌트의 state는 객체 형식이어야한다.
  >
  >   state = {
  >
  > ​        number: 0,
  >
  > ​        fixedNumber: 0
  >
  > ​    };

- 이벤트로 설정할 함수를 넣어 줄 때는 화살표 함수 문법을 사용하여 넣어줘야한다.

- 함수 내부에서는 this.setState라는 함수가 state값을 바꿀 수 있게해준다.

- #### callback(콜백)

  > setState를 사용하여 값을 업데이트하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두 번째 파라미터로 콜백 함수를 등록하여 작업을 저리할 수 있다.
  >
  > 무엇인가 일은 다른객체에 시키고 그 일이 끝나는 것을 기다리는게 나이라 그 객체가 나를 다시 부를때까지 내 할일을 하고 있는것.

- #### 함수형 컴포넌트 state

  > Hooks라는 것을 사용
  >
  >  const [message, setMessage] = useState(''); // 상태의 초기값

- #### Setter(세터)

  > 함수를 호출하면 배열이 반환되는데, 배열의 첫번째 원소는 현재 상태이고 두번째 원소는 상태를 바꾸어 주는 함수이다.

- state값을 바꾸어야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야한다.

- 배열이나 객체를 업데이트 해야할때

  > 배열이나 객체 사본을 만들고, 그사본에 값을 업데이트한 후, 그 사본의 상태를 setState혹은 세터 함수를통해 업데이트해야한다.
  >
  > 객체에 대한 사본을 만들때는 spread 연산자
  >
  > 배열에 대한 사본을 만들 때는 배열의 내장 함수들을 활용

- 새로운 컴포넌트를 만들 때는 useState를 사용하는것을 권고.