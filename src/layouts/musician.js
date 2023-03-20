import React from "react"

import Background from "../components/UI/Background"
import { ContextProviderComponent } from "../context/Context"

import Header from "./Header"
import Footer from "./footer"

import * as styles from "./layout.module.scss"

const MusicianLayout = ({ children }) => {
  let backgroundType = "musician"
  let headerType = "musician"

  return (
    <ContextProviderComponent>
      <div className={styles.content}>
        <Header type={headerType} />
        <Background type={backgroundType} />
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>
    </ContextProviderComponent>
  )
}

export default MusicianLayout
