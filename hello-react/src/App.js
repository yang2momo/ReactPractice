import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
  // 16777215를 hex로 표현하면 ffffff가 되므로 해당코드는 000000부터 ffffff 값을 변환.
}

class App extends Component {
  state = {
    color: '#000000'
  }
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}
// const App = () => {
//   return <LifeCycleSample />;


// }

export default App;
