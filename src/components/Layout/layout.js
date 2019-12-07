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

  if (props.type !== state.mode) {
    console.log( props.type)
    let action
    if (props.type === "developer") {
      action = "DEVELOPER_MODE"
    } else if (props.type === "musician") {
      action = "MUSICIAN_MODE"
    }
    dispatch({ type: action })
  }

  return (
    <div className={layoutStyles.full}>
      <Header type={props.type} />
      <Background type={props.type} />
      <main className={layoutStyles.content}>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
