import React from "react"

import * as styles from "./heading.module.scss"

type Heading = {
  level?: 1 | 2 | 3 | 4 | 5 | 6,
  size?: 1 | 2 | 3 | 4 | 5 | 6 | null,
}

export default function Heading({ level = 4, size = null, children }: React.PropsWithChildren<Heading>) {
  if (!size) size = level;
  const HeadingTag = `h${level}` as const;

  return (
    <HeadingTag className={styles[`heading-${size}`]}>{children}</HeadingTag>
  )
}