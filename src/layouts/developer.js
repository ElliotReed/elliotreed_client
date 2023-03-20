import React from "react"

import Background from "../components/UI/Background"
import Header from "./Header"
import Footer from "./footer"

import * as styles from "./layout.module.scss"

const DeveloperLayout = ({ children }) => {
  let backgroundType = "developer"
  let headerType = "developer"

  return (
    <div className={styles.content}>
      <Header type={headerType} />
      <Background type={backgroundType} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default DeveloperLayout
