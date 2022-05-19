import React from "react"

import * as styles from "./layout.module.scss"

import Header from "./header"
import Footer from "./footer"
import Background from "../components/UI/Background"

const DeveloperLayout = ({ children }) => {
  let backgroundType = "developer"
  let headerType = "developer"

  return (
    <div className={styles.gridContainer}>
      <Header type={headerType} />
      <div className={styles.content}>
        <Background type={backgroundType} />
        <main>
          {children}
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default DeveloperLayout
