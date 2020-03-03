import React, { useContext } from "react"
import {ContextProviderComponent} from '../context/Context'

import Header from "./header"
import Footer from "./footer"
import Background from "../components/UI/Background"
import styles from "./layout.module.scss"

const DeveloperLayout = ({ children }) => {
  let backgroundType = 'developer'
  let headerType = 'developer'

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

export default DeveloperLayout
