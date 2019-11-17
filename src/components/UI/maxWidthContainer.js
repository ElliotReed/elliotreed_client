import React from "react"

import Styles from "./maxWidthContainer.module.scss"

const MaxWidthContainer = props => {
  return <div className={Styles.maxWidthContainer}>{props.children}</div>
}

export default MaxWidthContainer
