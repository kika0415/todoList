import React from 'react';
import Todo from './Todo';
import { List } from '@material-ui/core';

const Todos = ({ todos, ...props }) => {
  return (
    <List>
      {todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))}
    </List>
  );
};

export default Todos;
