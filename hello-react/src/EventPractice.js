// 클래스형 컴포넌트
import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        username: '',
        message: '' // 초기값 설정

    }

    // onChange와 onClick에 전달한 함수를 따로 빼내서 컴포넌트 임의 메서드를 만듬

    // 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 동록되는 과정에서 메서드와
    // this의 관계가 끊어져 버린다.
    // 이때문에 임의 메서드가 이벤트로 등록되어도 this 컴포넌트 자신으로 제대로 가리키기 
    // 위해 메서드를 this와 바인딩하는 작업이필요하다

    // 메서드 바인딩은 생성자 메서드에서 하는것이 정석
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    }



    render() {
        return (
            <div>
                <h1>이벤트 핸들러 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
                {/* <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={
                        (e) => {
                            // console.log(e.target.value);//이벤트가 발생시 변할 input 값
                            // 값이 바뀔때마다 값이 바뀐다.
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }
                }>확인</button> */}
            </div>
        );
    }
}

export default EventPractice;