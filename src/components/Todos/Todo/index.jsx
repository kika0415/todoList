import React from 'react';
import {
  Button,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';

const Todo = ({ id, content, done }) => {
  const handleChange = done => () => {
    console.log(done);
    // console.log(event.target.checked);
  };

  return (
    <ListItem button key={done} onClick={handleChange(done)}>
      <ListItemIcon>
        <Checkbox />
      </ListItemIcon>
      <ListItemText>{content}</ListItemText>
      <ListItemSecondaryAction>
        <Button variant='contained' color='secondary'>
          delete
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
