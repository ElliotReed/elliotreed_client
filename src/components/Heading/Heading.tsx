import React from "react"
import classNames from "classnames";

import * as styles from "./heading.module.scss"

type Heading = {
  level?: 1 | 2 | 3 | 4 | 5 | 6,
  size?: 1 | 2 | 3 | 4 | 5 | 6 | null,
  color?: "light" | "dark" | "default",
}

export default function Heading({ level = 4, size = null, color = "default", children }: React.PropsWithChildren<Heading>) {
  if (!size) size = level;
  const HeadingTag = `h${level}` as const;
  let colorClass;
  switch (color) {
    case 'light':
      colorClass = styles.clrLight;
      break;
    case 'dark':
      colorClass = styles.clrDark;
      break;
    default:
      colorClass = styles.clrDefault;
      break;
  }

  const headingClass = styles[`heading${size}`]

  return (
    <HeadingTag className={classNames(headingClass, colorClass)}>{children}</HeadingTag>
  )
}