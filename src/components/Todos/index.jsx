import React from 'react';
import Todo from './Todo';
import { List } from '@material-ui/core';

const Todos = ({ todos, updateTodos, deleteTodo, ...props }) => {
  return (
    <List>
      {todos.map(todo => (
        <Todo {...todo} updateTodos={updateTodos} deleteTodo={deleteTodo} key={todo.id} />
      ))}
    </List>
  );
};

export default Todos;
