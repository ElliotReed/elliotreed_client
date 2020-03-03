import React from "react"

import Copyright from "../components/UI/copyright"
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Copyright />
    </footer>
  )
}

export default Footer
