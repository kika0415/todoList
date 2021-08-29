import React from 'react';
import { nanoid } from 'nanoid';
import { TextField } from '@material-ui/core';

const Header = ({ addTodo }) => {
  const handleKeyUp = event => {
    if (event.keyCode !== 13) return;
    const todo = { id: nanoid(), content: event.target.value, done: false };
    addTodo(todo);
    event.target.value = '';
  };

  return (
    <>
      <TextField label='inout a todo, press enter to add' fullWidth onKeyUp={handleKeyUp} />
    </>
  );
};

export default Header;
