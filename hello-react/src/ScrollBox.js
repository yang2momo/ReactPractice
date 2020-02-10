import React, { Component } from 'react';

class ScrollBox extends Component {
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        // 앞 코드에는 비구조화 할당 문법을 사용
        // const scrollHeight = this.box.scrollHeight;와 같은 의미
        // const clientHeight = this.box.cliengHeight;

        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render(){

        
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            height: '650px',
            width: '100%',
            background: 'linear-gradient(white, black)'
        }


        return(
            <div 
                style={style}
                ref={(ref) => {this.box=ref}}>               
                    <div style={innerStyle}/>
            </div>
        );
    }
}

export default ScrollBox;