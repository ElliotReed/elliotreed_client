import React from "react"

import styles from "./layout.module.scss"


import { ContextProviderComponent } from "../context/Context"

import Header from "./header"
import Footer from "./footer"
import Background from "../components/UI/Background"

const MusicianLayout = ({ children }) => {
  let backgroundType = "musician"
  let headerType = "musician"

  return (
    <ContextProviderComponent>
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
    </ContextProviderComponent>
  )
}

export default MusicianLayout
