import { useState } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

import { Paper, Divider, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    width: '40vw',
    marginLeft: '30vw',
  },
});

const App = () => {
  const classes = useStyles();
  const initialTodos = [
    { id: 1, content: 'eating', done: true },
    { id: 2, content: 'sleeping', done: true },
    { id: 3, content: 'coding', done: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = todo => {
    setTodos([todo, ...todos]);
  };

  const updateTodos = newTodo => {
    const newTodos = todos.map(todo => (todo.id === newTodo.id ? newTodo : todo));
    setTodos([...newTodos]);
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos([...newTodos]);
  };

  const clearAllDone = () => {
    const newTodos = todos.filter(todo => !todo.done);
    setTodos([...newTodos]);
  };

  return (
    <div className={classes.root}>
      <Typography variant='h3' gutterBottom>
        a simple todo app with pure react
      </Typography>
      <Paper>
        <Header addTodo={addTodo} />
        <Todos todos={todos} updateTodos={updateTodos} deleteTodo={deleteTodo} />
        <Divider />
        <Footer todos={todos} clearAllDone={clearAllDone} />
      </Paper>
    </div>
  );
};

export default App;
