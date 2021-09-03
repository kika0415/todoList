import React from 'react';
import {
  Button,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';

const Todo = ({ id, content, done, updateTodos, deleteTodo }) => {
  const handleChange = done => () => {
    updateTodos({ id: id, content: content, done: !done });
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <ListItem button key={done} onClick={handleChange(done)}>
      <ListItemIcon>
        <Checkbox checked={done} />
      </ListItemIcon>
      <ListItemText>{content}</ListItemText>
      <ListItemSecondaryAction>
        <Button variant='contained' color='secondary' onClick={handleDelete}>
          delete
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
