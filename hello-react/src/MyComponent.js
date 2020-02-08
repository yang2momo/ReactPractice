import React from 'react';

const MyComponent = props => {
    return (
        <div>
            오늘은 {props.day}하는 날입니다. <br />
            children 값은 {props.children} 입니다.
        </div>
    );
};
MyComponent.defaultProps = {
    day: '게임'
};

export default MyComponent;