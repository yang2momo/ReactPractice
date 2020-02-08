
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponentCl extends Component {

    static defaultProps = {
        day: '게임'
    };
    static propTypes = {
        day: PropTypes.string
    };
    render() {
        const { day, children } = this.props; //비구조화 할당
        return (
            <div>
                오늘은 {day}하는 날입니다. <br />
                children 값은 {children} 입니다.
         </div>
        );

    }
}
// const MyComponent = ({ day, children }) => {

//     return (
//         <div>
//             오늘은 {day}하는 날입니다. <br />
//             children 값은 {children} 입니다.
//         </div>
//     );
// };



export default MyComponentCl;