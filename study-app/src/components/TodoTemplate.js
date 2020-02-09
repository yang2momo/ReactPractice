// 화면을 가운데에 정렬시켜 주며, 앱타이틀(일정관리)을 보여준다.
// children으로 내부 JSX를 props로 받아 와서 렌더링해 줍니다.

import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;