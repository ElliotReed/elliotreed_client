import React from "react"

import Head from "../../components/head"
import ContactForm from "../../components/ContactForm"

import MaxWidthContainer from "../../components/UI/maxWidthContainer"
// import * as styles from "./contact.module.scss"

const ContactPage = () => {
  return (
    <div>
      <Head title="Developer | Contact" />
      <MaxWidthContainer>
        <ContactForm type="developer" />
      </MaxWidthContainer>
    </div>
  )
}

export default ContactPage
