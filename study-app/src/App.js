import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/Todolnsert';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;