import React from 'react';

import * as styles from './Button.module.scss';

type ButtonProps = {
  type: "button" | "submit" | "reset",
  children: string,
  onClick?: () => void,
}

export default function Button({ type = "button", children, onClick }: ButtonProps) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
}