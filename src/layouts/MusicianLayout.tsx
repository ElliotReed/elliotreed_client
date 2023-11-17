import React from "react"

import { ContextProviderComponent } from "../context/Context"

import Header from "./Header"
import Footer from "./footer.tsx"

import * as styles from "./layout.module.scss"

const MusicianLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  let headerType = "musician";

  return (
    <ContextProviderComponent>
      <div className={styles.container}>
        <Header type={headerType} />
        <div className={styles.content}>
          {children}
        </div>
        <Footer />
      </div>
    </ContextProviderComponent>
  );
}

export default MusicianLayout
