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

const Footer = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <Checkbox />
        </ListItemIcon>
        <ListItemText>done2/3</ListItemText>
        <ListItemSecondaryAction>
          <Button variant='contained' color='secondary'>
            clear all
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default Footer;
