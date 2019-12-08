import React from "react"
import componentStyles from "./UL_Clean.module.scss"

export const UL_Clean = ({ children }) => {
  return <ul className={componentStyles.clean}>{children}</ul>
}
