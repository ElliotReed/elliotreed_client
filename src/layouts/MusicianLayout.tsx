import React from "react"

import Background from "../components/UI/Background"
import { ContextProviderComponent } from "../context/Context"

import Header from "./Header"
import Footer from "./footer"

import * as styles from "./layout.module.scss"

const MusicianLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  let backgroundType = "musician";
  let headerType = "musician";

  return (
    <ContextProviderComponent>
      <div className={styles.container}>
        <Header type={headerType} />
        <Background type={backgroundType} />
        <div className={styles.content}>
          {children}
        </div>
        <Footer />
      </div>
    </ContextProviderComponent>
  );
}

export default MusicianLayout
