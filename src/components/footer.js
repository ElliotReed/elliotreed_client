import React from "react"

import Copyright from '../components/UI/copyright'
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Copyright />
    </footer>
  )
}

export default Footer
