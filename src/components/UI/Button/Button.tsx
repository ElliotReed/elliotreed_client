import React from 'react';

import * as styles from './Button.module.scss';

type ButtonProps = {
  type: "button" | "submit" | "reset",
  children: string
}

export default function Button({ type = "button", children }: ButtonProps) {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}