import React from 'react';
import {
  Button,
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';

const Todo = ({ id, name, done }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox checked={done} />
      </ListItemIcon>
      <ListItemText>{name}</ListItemText>
      <ListItemSecondaryAction>
        <Button variant='contained' color='secondary'>
          clear
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
