import React from 'react';
import style from './List.module.scss';

export const List = ({ children }) => {
  return (
    <div className={style["list-container"]}>
      <div className={style["list-container-header"]}>
        {/* <h3>{this.props.title}</h3> */}
      </div>
      <ul>
        {children}
      </ul>
    </div>
  );
}