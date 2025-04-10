import React from "react";

import classnames from "classnames";

import * as styles from "./paragraph.module.scss";

type Paragraph = {
  children: React.ReactNode,
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function Paragraph({ children, className, size = "md" }: Readonly<Paragraph>) {
  let sizeClass;
  switch (size) {
    case "sm":
      sizeClass = styles.sm
      break;
    case "lg":
      sizeClass = styles.lg
      break;
    default:
      sizeClass = styles.md
      break;
  }

  const paragraphClass = classnames(
    styles.paragraphDefault,
    sizeClass,
    className
  );

  return (
    <p className={paragraphClass}>{children}</p>
  )
}