import React from "react"

import Background from "../components/UI/Background"
import Header from "./Header"
import Footer from "./footer"

import * as styles from "./layout.module.scss"

const DeveloperLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  let backgroundType = "developer"
  let headerType = "developer"

  return (
    <div className={styles.container}>
      <Header type={headerType} />
      <Background type={backgroundType} />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default DeveloperLayout
