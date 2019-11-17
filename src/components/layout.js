import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import Background from "../components/UI/Background"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
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
