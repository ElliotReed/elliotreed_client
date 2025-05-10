import React from 'react';
import './List.module.scss';

export const ListItem = props => {
  return (
    <li>
      {props.children}
    </li>
  );
}