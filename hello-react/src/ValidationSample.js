import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }// 기본 state 값 설정

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });

        this.input.focus(); // onClick 이벤트가 발생할 때  input에 포커스를 주도록함
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleButtonClick();
        }
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref) => { this.input = ref }} //this.input은 input 요소의 DOM을 가리킨다.
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button
                    onClick={this.handleButtonClick}
                >인증하기</button>
            </div>
        );
    }

}

export default ValidationSample;