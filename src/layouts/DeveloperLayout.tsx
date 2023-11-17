import React from "react"

import Header from "./Header"
import Footer from "./footer.tsx"

import * as styles from "./layout.module.scss"

const DeveloperLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  let headerType = "developer"

  return (
    <div className={styles.container}>
      <Header type={headerType} />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default DeveloperLayout
