import { useState } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

const App = () => {
  const initialTodos = [
    { id: 1, content: 'eating', done: true },
    { id: 2, content: 'sleeping', done: true },
    { id: 3, content: 'coding', done: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = todo => {
    setTodos([todo, ...todos]);
  };

  return (
    <div className='App'>
      <Header addTodo={addTodo} />
      <Todos todos={todos} />
      <Footer todos={todos} />
    </div>
  );
};

export default App;
