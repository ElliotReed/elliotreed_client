import React from "react"

import * as styles from "./maxWidthContainer.module.scss"

const MaxWidthContainer = props => {
  return <div className={styles.maxWidthContainer}>{props.children}</div>
}

export default MaxWidthContainer
