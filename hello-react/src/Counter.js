import React, { Component } from 'react';

class Counter extends Component {

    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const { number, fixedNumber } = this.state; // state를 조회할 떄는 this.state로 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    // onClick을 통해 버튼이 클릭되었을 떄 호출할 함수를 지정한다.
                    onClick={() => {
                        // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                console.log('>>> setState 호출됨');
                                console.log(this.state);
                            }
                        );
                    }
                    }
                >
                    +1
                        </button>
            </div>
        );

    }

    // constructor(props) { // 생성자
    //     super(props); // 상태의 초기값
    //     // state의 초기값 설정하기
    //     this.state = {
    //         number : 0,
    //         fixedNumber : 0
    //     };
    // }

    // render(){
    //     const { number, fixedNumber } = this.state; // state를 조회할 떄는 this.state로 조회

    //    

    // }
}

export default Counter;