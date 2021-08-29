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
  const handleChange = event => {
    console.log(event.target.checked);
  };

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox checked={done} onChange={handleChange} />
      </ListItemIcon>
      <ListItemText>{content}</ListItemText>
      <ListItemSecondaryAction>
        <Button variant='contained' color='secondary'>
          clear
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
