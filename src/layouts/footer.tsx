import React from "react"

import Copyright from "../components/Copyright/Copyright"

import * as styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Copyright originYear="2018" holder={<a href="/">Elliot Reed</a>} />
    </footer>
  )
}

export default Footer
