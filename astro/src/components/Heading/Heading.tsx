import React from "react"
import classNames from "classnames";

import styles from "./heading.module.scss"

type Heading = {
  level?: 1 | 2 | 3 | 4 | 5 | 6,
  size?: 1 | 2 | 3 | 4 | 5 | 6 | null,
  color?: "light" | "dark" | "default",
  align?: "start" | "center" | "end",
  className?: string,
}

export default function Heading({
  align = "start",
  children,
  className,
  color = "default",
  level = 4,
  size = null,
}: React.PropsWithChildren<Heading>) {
  const HeadingTag = `h${level}` as const;

  if (!size) size = level;

  let colorClass;
  switch (color) {
    case 'light':
      colorClass = styles['clr-light'];
      break;
    case 'dark':
      colorClass = styles['clr-dark'];
      break;
    default:
      colorClass = styles['clr-default'];
      break;
  }

  let alignmentClass;
  switch (align) {
    case 'center':
      alignmentClass = styles.center;
      break;
    case 'end':
      alignmentClass = styles.end;
      break;
    default:
      alignmentClass = styles.start
  }

  const headingClass = styles[`heading-${size}`]

  return (
    <HeadingTag
      className={classNames(
        headingClass,
        colorClass,
        alignmentClass,
        className,
      )}
    >{children}
    </HeadingTag>
  )
}