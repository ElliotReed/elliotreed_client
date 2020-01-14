import React, { useContext } from "react"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"
import Header from "./header"
import Footer from "./footer"
import Background from "../UI/Background"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  let backgroundType = props.type
  let headerType = props.type

  if (headerType === "abbeyroad") {
    backgroundType = "abbeyroad"
    headerType = "musician"
  }

  if (headerType !== state.mode) {
    console.log(props.type)
    let action
    if (headerType === "developer") {
      action = "DEVELOPER_MODE"
    } else if (headerType === "musician") {
      action = "MUSICIAN_MODE"
    }
    dispatch({ type: action })
  }

  return (
    <div className={layoutStyles.full}>
      <Header type={headerType} />
      <Background type={backgroundType} />
      <main className={layoutStyles.content}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
