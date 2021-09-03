import React from 'react';
import {
  List,
  ListItem,
  Checkbox,
  ListItemIcon,
  ListItemText,
  Button,
  ListItemSecondaryAction,
} from '@material-ui/core';

const Footer = ({ todos, clearAllDone }) => {
  const doneCnt = todos.filter(todo => todo.done).length;
  const handleClick = () => {
    clearAllDone();
  };

  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <Checkbox checked={doneCnt === todos.length && doneCnt !== 0 ? true : false} />
        </ListItemIcon>
        <ListItemText>
          done {doneCnt}/{todos.length}{' '}
        </ListItemText>
        <ListItemSecondaryAction>
          <Button variant='contained' color='secondary' onClick={handleClick}>
            clear done
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default Footer;
